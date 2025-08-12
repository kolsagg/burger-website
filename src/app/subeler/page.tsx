import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { branches } from "@/data/branches"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Şubeler | Burgerpark",
  description: "Burgerpark şubeleri: adres, telefon, çalışma saatleri, menü bağlantıları ve harita yol tarifi.",
}

const buildMapEmbedUrl = (lat: number, lng: number) =>
  `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`

const buildDirectionsUrl = (lat: number, lng: number) =>
  `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`

export default function BranchesPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">Şubelerimiz</h1>
        <p className="mt-2 text-muted-foreground">Size en yakın şubeyi seçin ve menüyü inceleyin.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {branches.map((b) => (
          <Card key={b.slug} className="overflow-hidden">
            {/* Images */}
            <div className="grid grid-cols-3 gap-1 bg-muted/30 p-1">
              {b.images.map((src, idx) => (
                <div key={src + idx} className="relative aspect-[4/3] w-full">
                  <Image src={src} alt={`${b.name} görseli ${idx + 1}`} fill className="object-contain opacity-85" />
                </div>
              ))}
            </div>

            <CardHeader>
              <CardTitle className="text-xl">{b.name}</CardTitle>
              <CardDescription>{b.description}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Telefon:</span> {b.phone}
              </p>
              <p>
                <span className="font-medium text-foreground">Çalışma Saatleri:</span> {b.hours}
              </p>
              <p>
                <span className="font-medium text-foreground">Adres:</span> {b.address}
              </p>
            </CardContent>

            <CardFooter className="flex flex-wrap gap-3">
              <Link
                href={`/menu/${b.menuSlug}`}
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
                aria-label={`${b.name} menüsüne git`}
              >
               <Button>Menüyü Görüntüle</Button>
              </Link>
              <a
                href={buildDirectionsUrl(b.coords.lat, b.coords.lng)}
                target="_blank"
                rel="noopener noreferrer"
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
                aria-label={`${b.name} için yol tarifi al`}
              >
                <Button variant="outline">Yol Tarifi</Button>
              </a>
            </CardFooter>

            <div className="px-6 pb-6">
              <div className="relative overflow-hidden rounded-lg border">
                <iframe
                  title={`${b.name} harita konumu`}
                  src={buildMapEmbedUrl(b.coords.lat, b.coords.lng)}
                  className="h-64 w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}


