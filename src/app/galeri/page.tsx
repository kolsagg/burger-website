"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type GalleryItem = {
  id: string
  src: string
  alt: string
  category: "urun" | "mekan" | "etkinlik"
}

const allItems: GalleryItem[] = Array.from({ length: 12 }).map((_, i) => ({
  id: `img-${i + 1}`,
  // Placeholder görseller; gerçek görsellerle değiştirilebilir
  src: i % 3 === 0 ? "/window.svg" : i % 3 === 1 ? "/globe.svg" : "/file.svg",
  alt: "Burgerpark görseli",
  category: ([("urun" as const), ("mekan" as const), ("etkinlik" as const)][i % 3]),
}))

const categories = [
  { id: "all", label: "Tümü" },
  { id: "urun", label: "Ürünler" },
  { id: "mekan", label: "Mekan" },
  { id: "etkinlik", label: "Etkinlik" },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null)

  const filtered = useMemo(() => {
    if (activeCategory === "all") return allItems
    return allItems.filter((i) => i.category === activeCategory)
  }, [activeCategory])

  const handleSelectCategory = (categoryId: string) => {
    setActiveCategory(categoryId)
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">Galeri</h1>
          <p className="mt-2 text-muted-foreground">Markamızdan kareleri keşfedin.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <Button
              key={c.id}
              variant={activeCategory === c.id ? "default" : "outline"}
              onClick={() => handleSelectCategory(c.id)}
              aria-pressed={activeCategory === c.id}
            >
              {c.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {filtered.map((item) => (
          <Dialog key={item.id}>
            <DialogTrigger asChild>
              <button
                type="button"
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring group relative aspect-square overflow-hidden rounded-md border bg-muted/20"
                onClick={() => setActiveItem(item)}
                aria-label={item.alt}
              >
                <Image src={item.src} alt={item.alt} fill className="object-contain opacity-80 transition group-hover:scale-105" />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-3xl">
              <DialogHeader>
                <DialogTitle>Galeri</DialogTitle>
                <DialogDescription>{item.alt}</DialogDescription>
              </DialogHeader>
              <div className="relative aspect-[4/3] w-full">
                <Image src={activeItem?.src ?? item.src} alt={activeItem?.alt ?? item.alt} fill className="object-contain" />
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}


