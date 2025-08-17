import { notFound } from "next/navigation"
import type { Metadata } from "next"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import MenuCategorySection from "./menu-category"

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
            <MenuCategorySection category={category} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}


