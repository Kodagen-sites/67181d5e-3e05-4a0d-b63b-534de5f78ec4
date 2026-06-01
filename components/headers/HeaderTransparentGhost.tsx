"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/content/site-config";
import { NAV_LINKS } from "./nav-links";
import { useScrollState } from "./hooks";

/**
 * Header — TRANSPARENT GHOST (light, ink-citron theme).
 *
 * Over the dark cinematic home hero the nav is white. Once scrolled, or on any
 * inner page (cream background), it flips to a cream panel with ink text so it
 * stays legible. Active/hover use the citron accent.
 */
export default function HeaderTransparentGhost() {
  const scrolled = useScrollState(60);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  // "Solid" = cream panel with ink text. Otherwise we're floating over the dark
  // home hero, so use white text.
  const solid = scrolled || !isHome;

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          solid
            ? "bg-bg/85 backdrop-blur-xl border-b border-ink/10"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-10 py-5 md:py-6">
          <Link
            href="/"
            className={`font-display font-bold tracking-[0.2em] uppercase text-[11px] md:text-xs transition-colors ${
              solid ? "text-ink" : "text-white"
            }`}
          >
            {siteConfig.company.name}
          </Link>

          {solid ? (
            <nav className="hidden md:flex gap-8 font-mono text-[11px] uppercase tracking-[0.25em] text-ink/70">
              {NAV_LINKS.slice(1).map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`transition-colors ${
                      active
                        ? "text-ink underline decoration-citron decoration-2 underline-offset-4"
                        : "hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          ) : null}

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className={`hidden md:inline-flex font-display text-xs uppercase tracking-[0.2em] transition-colors pb-0.5 border-b ${
                solid
                  ? "text-ink border-ink/30 hover:border-citron hover:text-ink"
                  : "text-white border-white/40 hover:border-citron"
              }`}
            >
              {siteConfig.cta.primary} →
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              className={`md:hidden transition-colors ${
                solid ? "text-ink" : "text-white"
              }`}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && <MobileOverlay onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

function MobileOverlay({ onClose }: { onClose: () => void }) {
  const pathname = usePathname();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 bg-bg md:hidden"
    >
      <div className="flex items-center justify-between p-6">
        <div className="font-display font-bold tracking-[0.2em] uppercase text-xs text-ink">
          {siteConfig.company.name}
        </div>
        <button onClick={onClose} className="text-ink" aria-label="Close menu">
          <X size={22} />
        </button>
      </div>
      <ul className="flex flex-col gap-6 p-6">
        {NAV_LINKS.map((link, i) => {
          const active = pathname === link.href;
          return (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.06 }}
            >
              <Link
                href={link.href}
                onClick={onClose}
                className={`font-display text-3xl transition-colors ${
                  active ? "text-ink underline decoration-citron" : "text-ink/80 hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
}
