"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isTransparent = isHome && !scrolled && !mobileOpen;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  return (
    <header
      className={`z-40 w-full transition-colors duration-200 ${
        isHome ? "fixed inset-x-0 top-0" : "sticky top-0"
      } ${
        isTransparent
          ? "border-b border-surface-white/15 bg-navy-950/35 backdrop-blur-xs"
          : "border-b border-border-subtle bg-surface-ivory/95 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between gap-4 sm:h-20">
          {/* Brand Lockup */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            aria-label={siteConfig.name}
            className="inline-flex items-center gap-3 rounded-sm py-1 transition-opacity hover:opacity-90"
          >
            <Image
              src={isTransparent ? "/images/logo-white.svg" : "/images/logo.svg"}
              alt=""
              width={36}
              height={46}
              priority
              className="h-9 w-auto sm:h-10"
            />
            <span className="flex flex-col">
              <span
                className={`font-serif text-lg font-semibold leading-none tracking-tight sm:text-xl ${
                  isTransparent ? "text-surface-white" : "text-navy-950"
                }`}
              >
                Basho Valley
              </span>
              <span
                className={`mt-1 text-[11px] font-medium leading-none tracking-wide ${
                  isTransparent ? "text-surface-white/80" : "text-text-muted"
                }`}
              >
                Education Foundation
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 lg:flex">
            <nav aria-label="Primary" className="flex items-center gap-1">
              {siteConfig.nav.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative rounded-sm px-3 py-2 text-sm font-medium transition-colors ${
                      isTransparent
                        ? isActive
                          ? "text-surface-white"
                          : "text-surface-white/85 hover:text-surface-white"
                        : isActive
                          ? "text-navy-950"
                          : "text-text-body hover:text-navy-950"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-3 bottom-0.5 h-0.5 bg-ochre-500"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/support"
              className="inline-flex items-center justify-center rounded-md bg-ochre-500 px-4 py-2 text-sm font-semibold text-navy-980 transition-colors hover:bg-ochre-400"
            >
              Support a School
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-md transition-colors lg:hidden ${
              isTransparent
                ? "text-surface-white hover:bg-surface-white/10"
                : "text-navy-950 hover:bg-surface-linen"
            }`}
          >
            {mobileOpen ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="border-t border-border-subtle bg-surface-ivory lg:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto max-w-7xl space-y-1 px-4 pt-3 pb-6 sm:px-6"
          >
            {siteConfig.nav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`block rounded-md px-3.5 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? "border-l-2 border-ochre-500 bg-surface-linen text-navy-950"
                      : "text-text-body hover:bg-surface-linen hover:text-navy-950"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="pt-4">
              <Link
                href="/support"
                onClick={() => setMobileOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-md bg-navy-950 px-5 py-3 text-sm font-semibold text-surface-white transition-colors hover:bg-navy-900"
              >
                Support a School
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
