"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const lastCollapsedWidthRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);
  const lastScrollYRef = useRef<number>(0);
  const [isHidden, setIsHidden] = useState(false);

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

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;
    let ticking = false;

    const updateVisibility = () => {
      const currentY = window.scrollY;
      const menuOpen = menuRef.current?.matches(":popover-open") ?? false;

      if (currentY <= 80 || menuOpen) {
        setIsHidden(false);
        lastScrollYRef.current = currentY;
        ticking = false;
        return;
      }

      const delta = currentY - lastScrollYRef.current;
      if (Math.abs(delta) >= 8) {
        setIsHidden(delta > 0);
        lastScrollYRef.current = currentY;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateVisibility);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

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
      className={`site-header sticky top-0 z-40 border-b border-border-subtle bg-surface-white/95 shadow-xs backdrop-blur-sm transition-transform duration-300 ease-out motion-reduce:transition-none ${
        isHidden ? "-translate-y-full" : "translate-y-0"
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
            className="site-logo inline-flex items-center gap-1.5 rounded-md py-1 transition-opacity hover:opacity-90"
          >
            <Image
              src="/images/logo.svg"
              alt=""
              width={44}
              height={56}
              priority
              className="h-7 w-auto shrink-0 sm:h-11"
            />
            <span className="flex flex-col justify-center leading-none">
              <span className="font-logo text-[13px] font-extrabold uppercase tracking-[0.06em] text-spruce-900 sm:text-[19px]">
                BASHO VALLEY
              </span>
              <span className="mt-0.5 font-logo text-[8px] font-bold uppercase tracking-[0.16em] text-slate-500 sm:mt-1 sm:text-[10px]">
                EDUCATION FOUNDATION
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-3 sm:gap-6">
            <nav className="site-nav flex items-center" aria-label="Primary">
              <button
                className="menu-button inline-flex h-11 w-11 items-center justify-center rounded-md text-spruce-900 transition-opacity hover:opacity-80"
                type="button"
                popoverTarget="site-menu"
                popoverTargetAction="toggle"
                aria-controls="site-menu"
                aria-label="Menu"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                  aria-hidden="true"
                >
                  <path d="M3 8h18M3 16h18" />
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
                        className={`nav-link type-nav relative block rounded-md px-3 py-2 transition-colors hover:bg-surface-mist hover:text-spruce-900 ${
                          isActive
                            ? "font-semibold text-spruce-900 underline decoration-spruce-900 decoration-2 underline-offset-8"
                            : "text-text-body"
                        }`}
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
              className="header-cta type-btn inline-flex items-center justify-center rounded-full bg-saffron-600 px-6 py-2.5 text-surface-white transition-colors hover:bg-saffron-700"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
