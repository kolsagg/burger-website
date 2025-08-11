import type { Metadata } from "next"
import ContactForm from "@/app/iletisim/contact-form"

export const metadata: Metadata = {
  title: "İletişim | Burgerpark",
  description: "Burgerpark iletişim: adres, telefon ve mesaj gönderme formu.",
}

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">İletişim</h1>
      <p className="mt-2 text-muted-foreground">Bizimle iletişime geçin. Görüş ve önerileriniz bizim için değerli.</p>
      <ContactForm />
    </div>
  )
}


