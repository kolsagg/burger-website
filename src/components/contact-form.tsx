"use client"

import { useId, useState } from "react"

type FormState = {
  fullName: string
  email: string
  phone?: string
  message: string
}

const ContactForm = () => {
  const [form, setForm] = useState<FormState>({ fullName: "", email: "", phone: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" })
  const [honeypot, setHoneypot] = useState("")

  const nameId = useId()
  const emailId = useId()
  const phoneId = useId()
  const messageId = useId()

  const handleChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const validate = () => {
    if (!form.fullName.trim()) return { field: "fullName", message: "Lütfen ad soyad girin" }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return { field: "email", message: "Geçerli bir e-posta girin" }
    if (!form.message.trim()) return { field: "message", message: "Lütfen bir mesaj yazın" }
    return null
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    setStatus({ type: null, message: "" })
    const error = validate()
    if (error) {
      setStatus({ type: "error", message: error.message })
      return
    }
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website: honeypot }),
      })
      if (!res.ok) throw new Error("Gönderim başarısız")
      setStatus({ type: "success", message: "Mesajınız alınmıştır. En kısa sürede dönüş yapacağız." })
      setForm({ fullName: "", email: "", phone: "", message: "" })
    } catch (err) {
      setStatus({ type: "error", message: "Bir hata oluştu. Lütfen tekrar deneyin." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4" aria-describedby="form-status">
      {status.type && (
        <div
          id="form-status"
          role={status.type === "error" ? "alert" : "status"}
          className={
            status.type === "error"
              ? "rounded-md border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
              : "rounded-md border border-emerald-300/50 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
          }
        >
          {status.message}
        </div>
      )}

      {/* Honeypot */}
      <div className="hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="border" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor={nameId} className="text-sm font-medium">Ad Soyad</label>
          <input
            id={nameId}
            type="text"
            required
            value={form.fullName}
            onChange={handleChange("fullName")}
            className="rounded-md border px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-invalid={!form.fullName ? true : undefined}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor={emailId} className="text-sm font-medium">E-posta</label>
          <input
            id={emailId}
            type="email"
            required
            value={form.email}
            onChange={handleChange("email")}
            className="rounded-md border px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-invalid={form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? true : undefined}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={phoneId} className="text-sm font-medium">Telefon (opsiyonel)</label>
        <input
          id={phoneId}
          type="tel"
          value={form.phone}
          onChange={handleChange("phone")}
          className="rounded-md border px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={messageId} className="text-sm font-medium">Mesaj</label>
        <textarea
          id={messageId}
          required
          rows={5}
          value={form.message}
          onChange={handleChange("message")}
          className="rounded-md border px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
        className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition hover:bg-accent/90 focus-visible:ring-2 focus-visible:ring-ring"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? "Gönderiliyor..." : "Gönder"}
        </button>
      </div>
    </form>
  )
}

export default ContactForm


