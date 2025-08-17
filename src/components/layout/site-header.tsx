"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MenuIcon, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

type NavItem = {
  label: string;
  href: string;
  onClick?: () => void;
};

const navItems: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Şubeler", href: "/subeler" },
  { label: "Markalarımız", href: "/#markalarimiz" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
];

const menuItems = [
  { label: "Burger Pub Ataşehir", href: "/menu/atasehir" },
  { label: "Burger Park Çekmeköy", href: "/menu/cekmekoy" },
];

const linkBaseClass =
  "text-primary-foreground/80 font-medium transition-colors hover:text-accent focus:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xs px-2 py-1";

export const SiteHeader = () => {
  const pathname = usePathname();

  const handleKeyDown: React.KeyboardEventHandler<HTMLAnchorElement> = (
    event
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      (event.target as HTMLAnchorElement)?.click();
    }
  };

  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const handleClickBrands: React.MouseEventHandler<HTMLAnchorElement> = (
    event
  ) => {
    if (pathname !== "/") return;
    event.preventDefault();
    const el = document.getElementById("markalarimiz");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-primary font-semibold shadow-sm">
      <div
        className={
          "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        }
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-base tracking-wide text-primary-foreground hover:text-accent rounded-xs"
          aria-label="Burgerpark anasayfa"
        >
          <Image src="/Burger-Park-White.png" alt="Burgerpark" width={80} height={80} />
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden items-center gap-2 md:flex"
          aria-label="Ana navigasyon"
        >
          {navItems.slice(0, 2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkBaseClass}
              aria-current={pathname === item.href ? "page" : undefined}
              tabIndex={0}
              onKeyDown={handleKeyDown}
              onClick={item.onClick}
            >
              {item.label}
            </Link>
          ))}

          {/* Menüler Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className={`${linkBaseClass} inline-flex items-center gap-1`}
                aria-haspopup="menu"
                aria-expanded={undefined}
              >
                Menüler <ChevronDown className="size-4" aria-hidden />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="bg-background">
              {menuItems.map((item) => (
                <DropdownMenuItem
                  key={item.href}
                  asChild
                  className="font-medium text-sm"
                >
                  <Link
                    href={item.href}
                    className="w-full px-2 py-1.5"
                    tabIndex={0}
                    aria-label={`${item.label} menüsü`}
                  >
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navItems.slice(2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkBaseClass}
              aria-current={pathname === item.href ? "page" : undefined}
              tabIndex={0}
              onKeyDown={handleKeyDown}
              onClick={item.href.endsWith("#markalarimiz") ? handleClickBrands : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Menüyü aç"
                className="inline-flex items-center justify-center rounded-xl border border-accent px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <MenuIcon className="size-5 text-accent" aria-hidden />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="gap-0 p-0 bg-background/80 backdrop-blur-sm">
              <SheetHeader className="p-4">
                <SheetTitle className="font-semibold text-lg">
                <Image src="/burgerpark-logo.png" alt="Burgerpark" width={50} height={50} />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col" aria-label="Mobil navigasyon" onClick={() => setIsSheetOpen(false)}>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-3 text-base hover:bg-muted focus:bg-muted focus:outline-none"
                    onClick={item.href.endsWith("#markalarimiz") ? handleClickBrands : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-2 border-t px-4 pt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Menüler
                </div>
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-3 text-base hover:bg-muted focus:bg-muted focus:outline-none"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
