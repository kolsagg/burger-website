import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, email, phone, message, website } = body ?? {}

    // Honeypot: bot doldurduysa sessizce başarılı dön
    if (typeof website === "string" && website.trim().length > 0) {
      return NextResponse.json({ ok: true })
    }

    if (!fullName || !email || !message) {
      return NextResponse.json({ ok: false, error: "Eksik alan" }, { status: 400 })
    }

    // Burada prod ortamında bir mail servisi veya ticket sistemi entegre edilebilir
    console.log("CONTACT_FORM", { fullName, email, phone, message })

    return NextResponse.json({ ok: true })
  } catch (error) {
    return NextResponse.json({ ok: false, error: "Sunucu hatası" }, { status: 500 })
  }
}


