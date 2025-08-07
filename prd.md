# PRD: Burgerpark Web Sitesi Yeniden Tasarımı

**Sürüm:** 1.2
**Tarih:** 07.08.2025
**Proje Sahibi:** Burgerpark Yönetimi
**Yazar:** Proje Geliştirme Ekibi

## 1. Genel Bakış

Bu doküman, Burgerpark markasının kurumsal web sitesi olan `burgerpark.com.tr`'nin yeniden tasarlanması ve geliştirilmesi projesinin gereksinimlerini tanımlar. Projenin temel amacı, markanın premium ve gurme kimliğini yansıtan, modern, hızlı ve mobil uyumlu bir dijital vitrin oluşturmaktır. Site, **iki farklı şubeye ait özel menüleri** sunacak, kullanıcıları menüleri keşfetmeye, şubeler hakkında bilgi almaya ve markayla etkileşime teşvik edecektir.

## 2. Proje Hedefleri

- **Marka İmajını Güçlendirmek:** Site, ziyaretçilere Burgerpark'ın kaliteli, taze ve lezzetli ürünler sunan premium bir marka olduğu hissini vermelidir.
- **Kullanıcı Deneyimini İyileştirmek:** Mobil öncelikli, hızlı ve sezgisel bir arayüz ile kullanıcıların aradıkları bilgiye (**şube özelindeki menüler**, adres, iletişim) saniyeler içinde ulaşmasını sağlamak.
- **Fiziksel Şubelere Trafik Çekmek:** Google Haritalar entegrasyonu ve her şubeye ait özel menü ve bilgilerle müşterileri doğru şubeye yönlendirmek.

## 3. Teknik Gereksinimler (Tech Stack)

- **Framework:** Next.js (App Router)
- **Dil:** TypeScript
- **UI Kütüphanesi:** React
- **Styling:** Tailwind CSS
- **Component Kütüphanesi:** shadcn/ui
- **Deployment:** Vercel (Önerilen)

## 4. Tasarım ve Marka Kimliği

### 4.1. Renk Paleti

- **Ana Renk (Primary):** `#005139` (Derin Yeşil)
- **Arka Plan (Background):** `#F7F4EC` (Şampanya/Kemik Beyazı)
- **Vurgu Rengi (Accent/CTA):** `#FFB700` (Altın Sarısı)
- **Metin Rengi (Text):** `#2C2C2C` (Koyu Füme)

### 4.2. Tipografi

- **Başlıklar (Headings):** **Playfair Display** (Tırnaklı/Serif)
- **Gövde Metni (Body):** **Lato** veya **Source Sans Pro** (Tırnaksız/Sans-serif)

## 5. Geliştirme Adımları ve Özellikler

### Adım 1: Proje Kurulumu ve Temel Yapılandırma

-   [ X ] Next.js projesini TypeScript ile başlat (`create-next-app`).
-   [ X ] Tailwind CSS'i projeye entegre et.
-   [ X ] `shadcn/ui` CLI'ı kur ve temel bileşenleri (Button, Card, DropdownMenu vb.) yapılandır.
-   [ X ] Renk paletini ve fontları `tailwind.config.ts` ve `globals.css` dosyalarına ekle.
-   [ X ] Proje için klasör yapısını oluştur (`components`, `app`, `lib`, `data` vb.).

### Adım 2: Global Bileşenlerin Geliştirilmesi

-   [ X ] **Header (Üst Bilgi):**
    -   [ X ] Solda Burgerpark logosu.
    -   [ X ] Ortada navigasyon linkleri (Ana Sayfa, Hakkımızda, Şubeler, Galeri, İletişim).
    -   [ X ] **"Menüler" linki, `DropdownMenu` bileşeni olmalı.** Tıklandığında "Burger Pub Ataşehir" ve "Burger Park Çekmeköy" adında 2 seçenek sunmalı ve ilgili menü sayfasına yönlendirmeli.
    -   [ X ] Mobil görünümde hamburger menüye dönüşmeli (`Sheet` bileşeni ile).
-   [ X ] **Footer (Alt Bilgi):**
    -   [ X ] Logo ve kısa bir marka sloganı.
    -   [ X ] Navigasyon linkleri.
    -   [ X ] Şube adresleri ve telefon numaraları.
    -   [ X ] Sosyal medya ikonları.
    -   [ X ] Telif hakkı yazısı.

### Adım 3: Ana Sayfa Geliştirilmesi (`/`)

-   [ X ] **Hero Section:** Ekranı kaplayan, yüksek çözünürlüklü video veya fotoğraf arka planı. Üzerinde büyük, etkileyici başlık ve altın rengi **"Menüleri Keşfet"** butonu (bu buton menü dropdown'ını açabilir veya şubeler sayfasına yönlendirebilir).
-   [ X ] **Neden Biz?:** "Bizi Özel Kılan Nedir?" başlığı altında, ikonlar ve kısa metinlerle markanın güçlü yönlerini (Taze Malzemeler, İmza Soslar vb.) anlatan 3-4 sütunlu bir bölüm.
-   [ X ] **Şubelerimiz:** İki şube için ayrı `Card` bileşenleri. Her kartta şubenin bir fotoğrafı, adı, adresi ve en önemlisi, **doğrudan o şubenin menüsüne giden bir "Menüyü Görüntüle" butonu** (`/menu/atasehir` gibi) olmalı.

### Adım 4: Dinamik Menü Sayfası Geliştirilmesi (`/menu/[sube]`)

-   [ X ] **Dinamik Rota:** Menü sayfası, `app/menu/[sube]/page.tsx` yapısında oluşturulmalı. `[sube]` parametresi (örn: "atasehir", "kadikoy") hangi şubenin menüsünün gösterileceğini belirleyecek.
-   [ X ] **Veri Yapısı:** Menü verileri şube bazlı olarak ayrılmalı (örn: `data/atasehir-menu.json`, `data/kadikoy-menu.json`). Sayfa, `[sube]` parametresine göre ilgili JSON dosyasını okumalı.
-   [ X ] **Dinamik Başlık:** Sayfanın başlığı şube adını içermeli (Örn: "Burger Pub Ataşehir").
-   [ X ] **Kategoriler:** "Burgerler", "Atıştırmalıklar", "İçecekler" gibi sekmeler (`Tabs` bileşeni), seçilen şubenin menü kategorilerini göstermeli.
-   [ X ] **Ürün Listesi:** Her ürün için yüksek kaliteli fotoğraf, isim, içerik açıklaması ve fiyat bilgisi içeren bir grid yapısı.
-   [ X ] **Ürün Detayı:** Bir ürüne tıklandığında, ürünün daha büyük fotoğrafı ve detaylı açıklamasının gösterildiği bir `Dialog` (modal/popup) penceresi açılmalı.

### Adım 5: Diğer Sayfaların Geliştirilmesi

-   [ X ] **Hakkımızda Sayfası (`/hakkimizda`):** Markanın hikayesini, değerlerini ve vizyonunu aktarır.
    -   [ X ] İçerik Blokları:
        -   [ X ] Hero: Üstte geniş kapak görseli/video, güçlü başlık ve kısa misyon cümlesi.
        -   [ X ] Hikayemiz: Zaman çizelgesi (timeline) veya 2 sütunlu anlatım (metin + görsel).
        -   [ X ] Değerlerimiz: 3–6 kartlık grid (Taze Malzeme, El Yapımı Soslar, Usta Şefler vb.).
        -   [ X ] CTA: "Şubeler" ve "Menüler"e yönlendiren butonlar.
    -   [ X ] UX/Tech:
        -   [ X ] Mobil-öncelikli düzen; görseller `<Image>` ile optimize.
        -   [ X ] Başlık, açıklama, Open Graph ve Twitter meta etiketleri.
    -   [ X ] Kabul Kriterleri:
        -   [ X ] Sayfa yüklenince hero, hikaye ve değerler alanları görünür.
        -   [ X ] CTA butonları `/subeler` ve menü dropdown/rota ile çalışır.
        -   [ X ] Lighthouse SEO bölümü min 90.

-   [ X ] **Şubeler Sayfası (`/subeler`):** Tüm şubelerin detayları ve yönlendirmeleri.
    -   [ X ] İçerik Blokları:
        -   [ X ] Şube Kartları/Bölümleri: Şube adı, kısa açıklama, adres, telefon, çalışma saatleri.
        -   [ X ] Fotoğraflar: Her şube için min. 3 görsel (küçük slider veya grid).
        -   [ X ] **Menü Butonu:** İlgili şube menüsüne (`/menu/[sube]`) net CTA.
        -   [ X ] Harita: Her şube için gömülü Google Haritalar (iframe) ve "Yol Tarifi" linki.
    -   [ X ] Veri/Tech:
        -   [ X ] Şube verisi: `name`, `slug`, `address`, `phone`, `hours`, `coords`, `menuSlug`, `images[]` (JSON veya sabit nesne).
        -   [ X ] Haritalar için `coords` (lat, lng) ile embed URL oluşturma.
    -   [ X ] Kabul Kriterleri:
        -   [ X ] Her şube bölümü eksiksiz metin ve görsellerle listelenir.
        -   [ X ] Menü butonları doğru şube menüsüne gider.
        -   [ X ] Harita embed görünür ve tıklanabilir yol tarifi sunar.

-   [ X ] **Galeri Sayfası (`/galeri`):** Marka görsellerinin keşfedildiği hafif bir görsel galeri.
    -   [ X ] İşlevsellik:
        -   [ X ] Masonry veya responsive grid; `<Image>` ile lazy-loading.
        -   [ X ] Kategoriler/Etiketler (örn. Ürünler, Mekan, Etkinlik) ile filtreleme.
        -   [ X ] Görsele tıklandığında `Dialog` ile lightbox, swipe/klavye ile gezinme.
        -   [ X ] Altyazı/kısa açıklama desteği (opsiyonel).
    -   [ X ] Kabul Kriterleri:
        -   [ X ] 12+ görsel hızlı yüklenir; CLS/LCP değerleri iyi.
        -   [ X ] Filtre seçimi yalnızca ilgili görselleri gösterir.
        -   [ X ] Lightbox açılır, ESC ile kapanır, ok tuşlarıyla gezinir.

-   [ X ] **İletişim Sayfası (`/iletisim`):** İletişim bilgileri ve form.
    -   [ X ] İçerik:
        -   [ X ] Adres(ler), telefon, e-posta, sosyal linkler.
        -   [ X ] Gömülü Google Harita.
        -   [ X ] İletişim Formu: Ad Soyad, E-posta, Telefon (opsiyonel), Mesaj alanları.
    -   [ X ] Form Davranışı:
        -   [ X ] Zorunlu alan doğrulamaları; e-posta format kontrolü; anti-spam honeypot.
        -   [ X ] Başarı/başarısızlık durum geri bildirimi (toast veya inline alert).
        -   [ X ] Backend seçeneği: Next.js API Route veya güvenli üçüncü parti form hizmeti.
    -   [ X ] Kabul Kriterleri:
        -   [ X ] Tüm alanlar klavye ile erişilebilir; etiketler ve `aria-*` mevcut.
        -   [ X ] Geçersiz girişlerde kullanıcıya yardımcı hata mesajları gösterilir.
        -   [ X ] Gönderim sonrası onay mesajı görünür.

### Adım 6: Optimizasyon ve Dağıtım

-   [ ] **Responsiveness:** Tüm sayfaların tablet ve mobil cihazlarda kusursuz göründüğünden emin ol.
-   [ ] **Performans:** Next.js `<Image>` bileşeni ile görselleri optimize et. Menü sayfaları şube bazlı olduğu için SSG (Static Site Generation) ile `generateStaticParams` kullanarak önceden oluşturulabilir, bu da performansı artırır.
-   [ ] **SEO:** Her sayfa için (dinamik menü sayfaları dahil) `title` ve `description` meta etiketleri oluştur.
-   [ ] **Erişilebilirlik (a11y), Test ve Dağıtım:** (Değişiklik yok).

## 6. Kapsam Dışı (Out of Scope)

-   **Çoklu Dil Desteği (i18n):** Projenin bu ilk fazında site sadece Türkçe olacaktır.
-   **Doğrudan Sipariş Sistemi:** Site üzerinden doğrudan online sipariş alınmayacaktır.
-   **Kullanıcı Hesabı Sistemi:** Kullanıcı kaydı veya girişi gibi özellikler bulunmayacaktır.
-   **Blog / Haberler Bölümü:** Proje kapsamında bir blog sayfası geliştirilmeyecektir.