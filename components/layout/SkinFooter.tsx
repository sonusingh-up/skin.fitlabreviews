"use client";

import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "./NewsletterForm";

const footerLinks = {
  Guides: [
    { label: "All Skin Guides",      href: "/guides" },
    { label: "Acne & Breakouts",     href: "/guides" },
    { label: "Anti-Aging",           href: "/guides" },
    { label: "Hydration & Barrier",  href: "/guides" },
    { label: "Sun Protection (SPF)", href: "/guides" },
  ],
  Conditions: [
    { label: "All Conditions",       href: "/conditions" },
    { label: "Acne",                 href: "/conditions" },
    { label: "Eczema",               href: "/conditions" },
    { label: "Psoriasis",            href: "/conditions" },
    { label: "Hyperpigmentation",    href: "/conditions" },
  ],
  Routines: [
    { label: "All Routines",         href: "/routines" },
    { label: "Oily Skin",            href: "/routines" },
    { label: "Dry Skin",             href: "/routines" },
    { label: "AM Routines",          href: "/routines" },
    { label: "PM Routines",          href: "/routines" },
  ],
  Ingredients: [
    { label: "Ingredient Library",   href: "/ingredients" },
    { label: "Retinol",              href: "/ingredients" },
    { label: "Niacinamide",          href: "/ingredients" },
    { label: "Vitamin C",            href: "/ingredients" },
    { label: "Hyaluronic Acid",      href: "/ingredients" },
  ],
  "About Skin": [
    { label: "About This Section",   href: "/about" },
    { label: "Contact",              href: "https://fitlabreviews.com/contact", external: true },
    { label: "Skin Methodology",     href: "/methodology" },
    { label: "Editorial Policy",     href: "/editorial-policy" },
    { label: "← Main Site",         href: "https://fitlabreviews.com", external: true },
  ],
  Legal: [
    { label: "Medical Disclaimer",   href: "/medical-disclaimer" },
    { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
    { label: "Privacy Policy",       href: "https://fitlabreviews.com/privacy", external: true },
    { label: "Terms of Use",         href: "https://fitlabreviews.com/terms", external: true },
  ],
} as Record<string, { label: string; href: string; external?: boolean }[]>;

export default function SkinFooter() {
  return (
    <footer style={{ borderTop: "1px solid #D4C9B8", backgroundColor: "#EDE8DF", marginTop: 80 }}>

      {/* Newsletter band */}
      <div style={{ borderBottom: "1px solid #D4C9B8", padding: "48px 24px", textAlign: "center", backgroundColor: "#1A1714" }}>
        <div style={{ maxWidth: 480, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8A8480", marginBottom: 12 }}>
            The Skin Dispatch
          </p>
          <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "#F2EBD9", marginBottom: 8, letterSpacing: "-0.02em" }}>
            Evidence first. Clear skin after.
          </h3>
          <p style={{ fontSize: 14, color: "#8A8480", marginBottom: 24 }}>
            Skincare research, ingredient breakdowns, and routine updates — backed by dermatology literature, not brand copy.
          </p>
          <NewsletterForm />
        </div>
      </div>

      {/* Links grid */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "56px 24px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "40px 32px", marginBottom: 56 }}>
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8A8480", marginBottom: 14 }}>
                {section}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        style={{ fontSize: 13, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}
                        onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C4622D")}
                        onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#5C5650")}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        style={{ fontSize: 13, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}
                        onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C4622D")}
                        onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#5C5650")}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer block */}
        <div style={{ border: "1px dashed #C8BFB0", borderRadius: 10, padding: "22px 24px", marginBottom: 28, display: "flex", flexDirection: "column", gap: 14 }}>
          <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.75, margin: 0 }}>
            <strong style={{ color: "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif" }}>Not medical or dermatological advice.</strong>{" "}
            Skin Health content on Fitlabreviews is educational and reflects our reading of published cosmetic science and dermatology literature. Nothing here replaces a licensed dermatologist or healthcare professional. Consult a qualified professional before making significant changes to your skincare routine, especially if you have a diagnosed skin condition or take medications.{" "}
            <Link href="/medical-disclaimer" style={{ color: "#C4622D", fontWeight: 600, textDecoration: "none" }}>Full disclaimer →</Link>
          </p>
          <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.75, margin: 0 }}>
            <strong style={{ color: "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif" }}>Affiliate disclosure.</strong>{" "}
            Some product links may be affiliate links. Commissions never influence our ingredient ratings or routine recommendations.{" "}
            <Link href="/affiliate-disclosure" style={{ color: "#C4622D", fontWeight: 600, textDecoration: "none" }}>Full disclosure →</Link>
          </p>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid #D4C9B8", paddingTop: 20, display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Image src="/logo-banner.svg" alt="Fitlabreviews Skin" width={130} height={32} style={{ objectFit: "contain", objectPosition: "left" }} />
            <span style={{ width: 1, height: 16, backgroundColor: "#D4C9B8" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>Skin</span>
          </div>
          <p style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-sans), sans-serif" }}>
            © {new Date().getFullYear()} Fitlabreviews. Skin Health. Editorially independent.
          </p>
        </div>
      </div>
    </footer>
  );
}
