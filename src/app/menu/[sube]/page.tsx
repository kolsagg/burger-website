import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type MenuItem = {
  id: string
  name: string
  description?: string
  price: number
  image?: string
}

type MenuCategory = {
  id: string
  title: string
  items: MenuItem[]
}

type BranchMenu = {
  branchId: string
  branchName: string
  categories: MenuCategory[]
}

import atasehirMenu from "@/data/atasehir-menu.json"
import cekmekoyMenu from "@/data/cekmekoy-menu.json"

const BRANCH_TO_MENU_MAP: Record<string, BranchMenu> = {
  atasehir: atasehirMenu as BranchMenu,
  cekmekoy: cekmekoyMenu as BranchMenu,
}

export async function generateStaticParams() {
  return Object.keys(BRANCH_TO_MENU_MAP).map((sube) => ({ sube }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sube: string }>
}): Promise<Metadata> {
  const { sube } = await params
  const menu = getMenuData(sube)
  if (!menu) return {}
  return {
    title: `${menu.branchName} Menü | Burgerpark`,
    description: `${menu.branchName} için menü ve fiyatlar`,
  }
}

function getMenuData(sube: string): BranchMenu | null {
  const data = BRANCH_TO_MENU_MAP[sube]
  if (!data) return null
  return data
}

export default async function BranchMenuPage({
  params,
}: {
  params: Promise<{ sube: string }>
}) {
  const { sube } = await params
  const menu = getMenuData(sube)
  if (!menu) notFound()

  const firstCategory = menu.categories[0]?.id ?? ""

  return (
    <div className="font-sans mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-8 text-center">
        <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          {menu.branchName}
        </h1>
        <p className="mt-2 text-muted-foreground">Menümüzü keşfedin</p>
      </header>

      <Tabs defaultValue={firstCategory} className="w-full">
        <TabsList aria-label="Menü kategorileri" className="border-2 shadow-md rounded-md sticky top-18 z-30 md:static">
          {menu.categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {menu.categories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <section
              className="mt-3 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
              aria-label={`${category.title} ürünleri`}
            >
              {category.items.map((item) => (
                <Dialog key={item.id}>
                  <Card className="overflow-hidden">
                    <DialogTrigger asChild>
                      <button
                        className="text-left outline-none focus-visible:ring-2 focus-visible:ring-ring block w-full"
                        aria-label={`${item.name} detaylarını aç`}
                      >
                        <div className="relative w-full aspect-[3/2] sm:aspect-[4/3] bg-gradient-to-br from-muted to-secondary rounded-md">
                          <Image
                            src={item.image || "/burgerpark-logo.png"}
                            alt={item.name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="text-sm sm:text-lg">{item.name}</CardTitle>
                          <CardDescription className="text-xs sm:text-sm">{item.description ?? ""}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-sm font-semibold sm:text-base">₺{item.price}</div>
                        </CardContent>
                      </button>
                    </DialogTrigger>
                  </Card>

                  <DialogContent aria-describedby={`${item.id}-desc`}>
                    <DialogHeader>
                      <DialogTitle>{item.name}</DialogTitle>
                      <DialogDescription id={`${item.id}-desc`}>
                        {item.description ?? ""}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="relative mt-2 aspect-[4/3] w-full">
                      <Image
                        src={item.image || "/burgerpark-logo.png"}
                        alt={item.name}
                        fill
                        sizes="90vw"
                        className="rounded-md object-cover"
                      />
                    </div>
                    <div className="mt-4 text-right text-lg font-semibold">
                      ₺{item.price}
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </section>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}


