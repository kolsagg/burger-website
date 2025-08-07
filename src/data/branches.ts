export type BranchInfo = {
  name: string
  slug: string
  address: string
  phone: string
  hours: string
  coords: { lat: number; lng: number }
  images: string[]
  menuSlug: string
}

export const branches: BranchInfo[] = [
  {
    name: "Burger Pub Ataşehir",
    slug: "atasehir",
    address: "Ataşehir Bulvarı No:10, Ataşehir / İstanbul",
    phone: "+90 216 000 00 00",
    hours: "Haftaiçi 11:00–23:00, Haftasonu 11:00–00:00",
    coords: { lat: 40.9929, lng: 29.1276 },
    images: ["/window.svg", "/globe.svg", "/file.svg"],
    menuSlug: "atasehir",
  },
  {
    name: "Burger Park Çekmeköy",
    slug: "cekmekoy",
    address: "Park Caddesi No:22, Çekmeköy / İstanbul",
    phone: "+90 216 111 11 11",
    hours: "Haftaiçi 11:00–23:00, Haftasonu 11:00–00:00",
    coords: { lat: 41.026, lng: 29.199 },
    images: ["/window.svg", "/globe.svg", "/file.svg"],
    menuSlug: "cekmekoy",
  },
]


