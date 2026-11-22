"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isOverlay = isHome;
  const headerRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const lastCollapsedWidthRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);

  const syncLayout = useCallback(() => {
    const header = headerRef.current;
    const inner = innerRef.current;
    const menu = menuRef.current;
    if (!header || !inner || !menu) return;

    const wasWide = header.classList.contains("is-wide");
    const currentWidth = header.clientWidth;

    // Avoid thrashing while collapsed unless the header has grown wider
    if (!wasWide && currentWidth <= lastCollapsedWidthRef.current) {
      return;
    }

    const wasOpen = !wasWide && menu.matches(":popover-open");
    if (wasOpen) {
      try {
        menu.hidePopover();
      } catch {
        // Ignore if popover is not currently open
      }
    }

    header.classList.add("is-measuring");
    header.classList.add("is-wide");
    menu.removeAttribute("popover");

    const fitsInline = inner.scrollWidth <= inner.clientWidth;

    if (fitsInline) {
      lastCollapsedWidthRef.current = 0;
    } else {
      header.classList.remove("is-wide");
      menu.setAttribute("popover", "auto");
      lastCollapsedWidthRef.current = currentWidth;
      if (wasOpen) {
        try {
          menu.showPopover();
        } catch {
          // Ignore if showPopover is unavailable
        }
      }
    }

    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
    }
    rafRef.current = requestAnimationFrame(() => {
      header.classList.remove("is-measuring");
      rafRef.current = null;
    });
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    const menu = menuRef.current;
    if (!header || !menu) return;

    syncLayout();

    const observer = new ResizeObserver(() => {
      syncLayout();
    });
    observer.observe(header);
    observer.observe(menu);

    return () => {
      observer.disconnect();
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [syncLayout]);

  const handleNavClick = () => {
    const header = headerRef.current;
    const menu = menuRef.current;
    if (!header || !menu) return;
    if (!header.classList.contains("is-wide") && menu.matches(":popover-open")) {
      try {
        menu.hidePopover();
      } catch {
        // Ignore if already closed
      }
    }
  };

  return (
    <header
      ref={headerRef}
      className={`site-header z-40 ${
        isOverlay
          ? "is-overlay absolute inset-x-0 top-0 border-b border-transparent bg-transparent"
          : "sticky top-0 border-b border-border-subtle bg-surface-white/95 shadow-xs backdrop-blur-sm"
      }`}
    >
      {/* Main Navbar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={innerRef}
          className="header-inner flex h-18 items-center justify-between gap-2 sm:h-22 sm:gap-4"
        >
          <Link
            href="/"
            aria-label={siteConfig.name}
            className="site-logo inline-flex items-center gap-2.5 rounded-md py-1 transition-opacity hover:opacity-90 sm:gap-3"
          >
            <Image
              src={isOverlay ? "/images/logo-white.svg" : "/images/logo.svg"}
              alt=""
              width={44}
              height={56}
              priority
              className="h-9 w-auto sm:h-12"
            />
            <span className="flex flex-col leading-tight">
              <span className="text-xl tracking-tight sm:text-[1.75rem]">
                <span
                  className={`font-serif font-bold ${
                    isOverlay ? "text-surface-white" : "text-navy-950"
                  }`}
                >
                  Basho{" "}
                </span>
                <span
                  className={`font-sans font-light ${
                    isOverlay ? "text-surface-white/90" : "text-navy-900/80"
                  }`}
                >
                  Valley
                </span>
              </span>
              <span
                className={`hidden text-[11px] font-medium tracking-wide sm:block ${
                  isOverlay ? "text-surface-white/80" : "text-slate-500"
                }`}
              >
                {siteConfig.name}
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-3 sm:gap-5">
            <nav className="site-nav flex items-center" aria-label="Primary">
              <button
                className={`menu-button inline-flex h-11 w-11 items-center justify-center rounded-md transition-opacity hover:opacity-80 ${
                  isOverlay ? "text-surface-white" : "text-navy-950"
                }`}
                type="button"
                popoverTarget="site-menu"
                popoverTargetAction="toggle"
                aria-controls="site-menu"
                aria-label="Menu"
              >
                <svg
                  className="h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="square"
                  aria-hidden="true"
                >
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
                <span className="sr-only">Menu</span>
              </button>

              <ul id="site-menu" ref={menuRef} className="site-menu" popover="auto">
                {siteConfig.nav.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={handleNavClick}
                        aria-current={isActive ? "page" : undefined}
                        className="nav-link relative block rounded-md px-3 py-2 text-xs font-semibold uppercase tracking-widest text-text-body transition-colors hover:bg-surface-ivory hover:text-navy-950"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <Link
              href="/support"
              className="header-cta inline-flex items-center justify-center rounded-full bg-gold-500 px-5 py-2 text-xs font-bold uppercase tracking-wider text-navy-950 shadow-xs transition-colors hover:bg-gold-600"
            >
              Support Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
