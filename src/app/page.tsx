import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Leaf, Sparkles, Flame, ShieldCheck } from "lucide-react";
import {
  MarqueeItem,
  MarqueeContent,
  MarqueeFade,
  Marquee,
} from "@/components/ui/marquee";

type Branch = {
  id: string;
  name: string;
  address: string;
  menuHref: string;
};

const branches: Branch[] = [
  {
    id: "atasehir",
    name: "Burger Pub Ataşehir",
    address: "Atatürk Mah. Atatürk Blv. Ata Blokları 3/3 No:3 , Ataşehir / İstanbul",
    menuHref: "/menu/atasehir",
  },
  {
    id: "cekmekoy",
    name: "Burger Park Çekmeköy",
    address: "Mimar Sinan, Mimar Sinan Cd. No: 9/A, 34782 Çekmeköy / İstanbul",
    menuHref: "/menu/cekmekoy",
  },
];

const features = [
  {
    title: "Taze Malzemeler",
    description: "Günlük hazırlanan malzemelerle maksimum lezzet",
    Icon: Leaf,
  },
  {
    title: "İmza Soslar",
    description: "Kendimize özel tariflerle fark yaratan soslar",
    Icon: Sparkles,
  },
  {
    title: "Ateşte Pişirme",
    description: "Mükemmel mühür, kusursuz pişirme",
    Icon: Flame,
  },
  {
    title: "Hijyen ve Güven",
    description: "Yüksek standartlarda üretim ve servis",
    Icon: ShieldCheck,
  },
];

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative isolate flex min-h-[94vh] items-center overflow-hidden bg-primary py-20"
        aria-label="Hero section"
      >
        <div className="absolute inset-0 -z-10 flex h-full w-full items-center justify-center">
          <Marquee>
            <MarqueeContent pauseOnHover={false} play={true}>
              <MarqueeItem>
                <Image
                  src="/anasayfa1.png"
                  alt="burger pub"
                  width={1625}
                  height={1024}
                  className="opacity-70 rounded-md"
                  sizes="100vw"
                  priority
                />
              </MarqueeItem>
              <MarqueeItem>
                <Image
                  src="/hotdog/burgerpark-hotdog.jpg"
                  alt="burger park hotdog"
                  width={1024}
                  height={1024}
                  className="opacity-70 rounded-md"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 50vw"
                  priority
                />
              </MarqueeItem>
              <MarqueeItem>
                <Image
                  src="/hamburger/cheeseburger.jpg"
                  alt="cheeseburger"
                  width={1024}
                  height={1024}
                  className="opacity-70 rounded-md"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 50vw"
                  priority
                />
              </MarqueeItem>
            </MarqueeContent>
          </Marquee>
        </div>
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-6 px-4 text-left text-primary-foreground sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Gurme Burger Deneyimi
          </h1>
          <p className="max-w-2xl text-base text-primary-foreground/80 sm:text-lg">
            Şehrin iki yakasında aynı kalite, aynı lezzet. Menülerimizi keşfedin
            ve size en yakın şubeyi bulun.
          </p>

          <div className="flex flex-wrap items-start justify-start gap-3">
            <Link href="#branches" tabIndex={0} aria-label="Şubelere git">
              <Button size="lg">Menüleri Keşfet</Button>
            </Link>
            <Link
              href="/subeler"
              aria-label="Şubeler sayfasına git"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
            >
              <Button variant="secondary" size="lg">
                Şubelerimiz
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section
        id="why-us"
        className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        aria-labelledby="why-us-title"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="why-us-title"
            className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Bizi Özel Kılan Nedir?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Her lokmada kalite, tazelik ve özgünlük. İşte farkımızı yaratan
            detaylar.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, Icon }) => (
            <Card key={title} className="h-full">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="inline-flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden />
                </div>
                <CardTitle className="text-base">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section
        className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8"
        id="markalarimiz"
      >
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Markalarımız
          </h2>
          <p className="mt-3 text-muted-foreground">Markalarımızı keşfedin.</p>
        </div>
        <Marquee className="w-full">
          <MarqueeFade side="left" />
          <MarqueeContent>
            <MarqueeItem>
              <Image
                src="/markalar-burgerparklogo.png"
                alt="Burgerpark"
                width={100}
                height={100}
              />
            </MarqueeItem>
            <MarqueeItem>
              <Image
                src="/markalar-burgerpub.png"
                alt="Burgerpub"
                width={100}
                height={100}
              />
            </MarqueeItem>
            <MarqueeItem>
              <Image
                src="/markalar-parkchicken.png"
                alt="Parkchicken"
                width={100}
                height={100}
              />
            </MarqueeItem>
          </MarqueeContent>
          <MarqueeFade side="right" />
        </Marquee>
      </section>

      {/* Branches Section */}
      <section
        id="branches"
        className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8"
        aria-labelledby="branches-title"
      >
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2
            id="branches-title"
            className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Şubelerimiz
          </h2>
          <p className="mt-3 text-muted-foreground">
            Size en yakın Burgerpark şubesini seçin ve menüyü inceleyin.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {branches.map((b) => (
            <Card key={b.id} className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl">{b.name}</CardTitle>
                <CardDescription>{b.address}</CardDescription>
              </CardHeader>
              <CardFooter className="pt-0">
                <Link
                  href={b.menuHref}
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
                  aria-label={`${b.name} menüsünü görüntüle`}
                >
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Menüyü Görüntüle
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Burgerpark | Gurme Burger Deneyimi",
  description: "Burgerpark: Gurme burgerler, hotdoglar ve imza soslarla iki yakada aynı lezzet. Şubeleri ve menüleri keşfedin.",
};
