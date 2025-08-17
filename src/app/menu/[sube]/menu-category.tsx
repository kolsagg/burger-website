"use client"

import * as React from "react"
import Image from "next/image"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

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

type MenuCategorySectionProps = {
  category: MenuCategory
}

const MenuCategorySection: React.FC<MenuCategorySectionProps> = ({ category }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [selectedItem, setSelectedItem] = React.useState<MenuItem | null>(null)

  const handleOpenItem = React.useCallback((item: MenuItem) => {
    setSelectedItem(item)
    setIsOpen(true)
  }, [])

  const handleClose = React.useCallback((open: boolean) => {
    setIsOpen(open)
    if (!open) setSelectedItem(null)
  }, [])

  return (
    <>
      <section
        className="mt-3 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
        aria-label={`${category.title} ürünleri`}
      >
        {category.items.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <button
              className="text-left outline-none focus-visible:ring-2 focus-visible:ring-ring block w-full"
              aria-label={`${item.name} detaylarını aç`}
              onClick={() => handleOpenItem(item)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  handleOpenItem(item)
                }
              }}
            >
              {item.image && (
                <div className="relative w-full aspect-[3/2] sm:aspect-[4/3] bg-gradient-to-br from-muted to-secondary rounded-md mb-6 -mt-6">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover rounded-md opacity-90 "
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-sm sm:text-lg">{item.name}</CardTitle>
                <CardDescription className="text-xs sm:text-sm">{item.description ?? ""}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm font-semibold sm:text-base">₺{item.price}</div>
              </CardContent>
            </button>
          </Card>
        ))}
      </section>

      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent aria-describedby={selectedItem ? `${category.id}-${selectedItem.id}-desc` : undefined}>
          <DialogHeader>
            <DialogTitle>{selectedItem?.name ?? ""}</DialogTitle>
            {selectedItem && (
              <DialogDescription id={`${category.id}-${selectedItem.id}-desc`}>
                {selectedItem.description ?? ""}
              </DialogDescription>
            )}
          </DialogHeader>
          {selectedItem?.image && (
            <div className="relative mt-2 aspect-[4/3] w-full">
              <Image
                src={selectedItem.image}
                alt={selectedItem.name}
                fill
                sizes="90vw"
                className="rounded-md object-cover"
              />
            </div>
          )}
          <div className="mt-4 text-right text-lg font-semibold">
            {selectedItem ? `₺${selectedItem.price}` : ""}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default MenuCategorySection


