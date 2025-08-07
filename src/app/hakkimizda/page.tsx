import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Leaf, Sparkles, ShieldCheck, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { branches } from "@/data/branches"

export const metadata: Metadata = {
  title: "Hakkımızda | Burgerpark",
  description:
    "Burgerpark'ın hikayesi, değerleri ve vizyonu. Taze malzeme, el yapımı soslar ve yüksek hijyen standartlarıyla gurme burger deneyimi.",
}

const values = [
  {
    title: "Taze Malzemeler",
    description: "Günlük hazırlanmış, özenle seçilmiş tedarikçiler",
    Icon: Leaf,
  },
  {
    title: "İmza Soslar",
    description: "Kendimize özgü tariflerle benzersiz tatlar",
    Icon: Sparkles,
  },
  {
    title: "Hijyen ve Güven",
    description: "Sıkı denetimler ve eğitimli ekip",
    Icon: ShieldCheck,
  },
]

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-xl border bg-gradient-to-br from-primary/5 to-background">
        <div className="grid gap-8 p-10 sm:grid-cols-2 sm:items-center">
          <div>
            <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">Burgerpark Hakkında</h1>
            <p className="mt-3 text-muted-foreground">
              Gurme burger tutkumuzu; taze malzeme, usta dokunuş ve misafirperverlikle birleştiriyoruz.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/subeler" aria-label="Şubeler sayfasına git">
              <Button>Şubeler</Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-haspopup="menu"
                    aria-expanded={undefined}
                  >
                    Menüler <ChevronDown className="size-4" aria-hidden />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {branches.map((b) => (
                    <DropdownMenuItem key={b.slug} asChild>
                      <Link
                        href={`/menu/${b.menuSlug}`}
                        className="w-full px-2 py-1.5"
                        aria-label={`${b.name} menüsü`}
                      >
                        {b.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] w-full">
              <Image src="/window.svg" alt="Burgerpark" fill className="object-contain opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / Story */}
      <section className="mt-12">
        <h2 className="font-heading text-2xl font-semibold tracking-tight">Hikayemiz</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {[
            { year: "2018", text: "İlk tarif ve marka vizyonu oluştu" },
            { year: "2020", text: "Ataşehir şubesi ile kapılarımızı açtık" },
            { year: "2023", text: "Çekmeköy şubesiyle lezzeti yaydık" },
          ].map((item) => (
            <Card key={item.year}>
              <CardHeader>
                <CardTitle className="text-xl">{item.year}</CardTitle>
                <CardDescription>{item.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mt-12">
        <h2 className="font-heading text-2xl font-semibold tracking-tight">Değerlerimiz</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {values.map(({ title, description, Icon }) => (
            <Card key={title}>
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="inline-flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden />
                </div>
                <CardTitle className="text-base">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}


