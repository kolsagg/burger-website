export type BranchInfo = {
  name: string
  slug: string
  address: string
  phone: string
  hours: string
  coords: { lat: number; lng: number }
  images: string[]
  menuSlug: string
  description: string
}

export const branches: BranchInfo[] = [
  {
    name: "Burger Pub Ataşehir",
    slug: "atasehir",
    address: "Atatürk Mah. Atatürk Blv. Ata Blokları 3/3 No:3 , Ataşehir / İstanbul",
    phone: "+90 530 825 82 60",
    hours: "Haftaiçi 12:00–00:00, Haftasonu 12:00–00:00",
    coords: { lat: 40.99264122460218, lng:  29.12211500458104 },
    images: ["/pub-sunum.jpg", "/markalar-burgerpub.png", "/hamburger/burgerkutusu.jpg"],
    menuSlug: "atasehir",
    description: "Burger Pub Ataşehir, özgün hamburgerleri, hotdogları ve zengin içecek menüsüyle şehrin kalbinde keyifli bir buluşma noktası. Samimi atmosferi, özenle seçilmiş alkollü içecekleri ve lezzetli atıştırmalıklarıyla arkadaşlarınızla vakit geçirmek için ideal. Şehrin enerjisini hissetmek ve gerçek bir pub deneyimi yaşamak için sizi bekliyoruz.",
  },
  {
    name: "Burger Park Çekmeköy",
    slug: "cekmekoy",
    address: "Mimar Sinan, Mimar Sinan Cd. No: 9/A, 34782 Çekmeköy / İstanbul",
    phone: "+90 216 642 68 62",
    hours: "Haftaiçi 11:00–22:00, Haftasonu 11:00–22:00",
    coords: { lat: 41.033092205761974, lng: 29.174915641106907 },
    images: ["/hamburger/trüf.jpg", "/burgerpark-logo.png", "/hamburger/chicken-burger.jpg"],
    menuSlug: "cekmekoy",
    description: "Burger Park Çekmeköy, kafe konseptiyle öne çıkan bir şubemizdir. Hem özenle hazırlanan burger ve hotdoglarımızı tadabilir, hem de kahve, çay, limonata veya milkshake gibi sıcak-soğuk içeceklerimiz eşliğinde keyifli vakit geçirebilirsiniz. Samimi ve rahat atmosferiyle, arkadaşlarınızla buluşmak veya sakin bir mola vermek için ideal bir ortam sunar.",
  },
]


