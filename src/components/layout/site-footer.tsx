import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"

export type Branch = {
  id: string
  name: string
  addressLines: string[]
  phone: string
}

const branches: Branch[] = [
  {
    id: "atasehir",
    name: "Burger Pub Ataşehir",
    addressLines: [
      "Ataşehir Bulvarı, Ata Blokları 3-3",
      "Ataşehir, İstanbul",
    ],
    phone: "+90 216 000 00 00",
  },
  {
    id: "cekmekoy",
    name: "Burger Park Çekmeköy",
    addressLines: [
      "Mimar Sinan, Mimar Sinan Cd. No: 9/A",
      "Çekmeköy, İstanbul",
    ],
    phone: "+90 216 111 11 11",
  },
]

const navItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Şubeler", href: "/subeler" },
  { label: "Galeri", href: "/galeri" },
  { label: "İletişim", href: "/iletisim" },
]

const linkClass =
  "text-sm text-primary-foreground/80 hover:text-primary focus:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xs"

const SiteFooter = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t bg-primary">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        {/* Brand */}
        <div>
          <div className="font-heading text-xl font-bold text-primary-foreground">Burgerpark</div>
          <p className="mt-2 max-w-sm text-sm text-primary-foreground/80">
            Gurme burger deneyimini şehrin iki yakasında aynı kaliteyle sunuyoruz.
          </p>
        </div>

        {/* Nav */}
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/80">
            Navigasyon
          </div>
          <ul className="mt-3 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Branches */}
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/80">
            Şubeler
          </div>
          <ul className="mt-3 space-y-4">
            {branches.map((b) => (
              <li key={b.id}>
                <div className="font-bold text-primary-foreground">{b.name}</div>
                <div className="text-sm text-primary-foreground/80">
                  {b.addressLines.map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
                <Link
                  href={`tel:${b.phone.replace(/[^+\d]/g, "")}`}
                  className="mt-1 inline-flex text-sm text-primary-foreground/80 hover:text-primary focus:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xs"
                  aria-label={`${b.name} telefon ara`}
                >
                  {b.phone}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-4 text-sm text-primary-foreground/80 sm:px-6 lg:px-8">
          <div>© {year} Burgerpark. Tüm hakları saklıdır.</div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
