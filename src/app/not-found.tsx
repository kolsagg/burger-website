import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
      <div className="text-primary mb-4">
        <FileQuestion className="mx-auto h-24 w-24" />
      </div>
      
      <p className="text-base font-semibold text-primary">404</p>
      <h1 className="mt-2 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
        Sayfa Bulunamadı
      </h1>
      <p className="mt-4 text-base text-muted-foreground max-w-md">
        Üzgünüz, aradığınız sayfa bulunamadı. Sayfa taşınmış, silinmiş veya geçici olarak kullanılamıyor olabilir.
      </p>
      
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Link href="/" aria-label="Ana sayfaya dön">
          <Button>Ana Sayfaya Dön</Button>
        </Link>
        <Link href="/subeler" aria-label="Şubelerimizi inceleyin">
          <Button variant="outline">Şubelerimizi İnceleyin</Button>
        </Link>
      </div>

      <div className="mt-8 text-sm text-muted-foreground">
        <p>
          Yardıma mı ihtiyacınız var?{" "}
          <Link href="/iletisim" className="text-primary hover:underline">
            Bizimle iletişime geçin
          </Link>
        </p>
      </div>
    </div>
  );
}