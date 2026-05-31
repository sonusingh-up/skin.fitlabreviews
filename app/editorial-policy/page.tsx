import type { Metadata } from "next";
import Link from "next/link";
import SkinBreadcrumb from "@/components/ui/SkinBreadcrumb";

export const metadata: Metadata = {
  title: "Editorial Policy — Skin Health",
  description:
    "How Fitlabreviews Skin researches skincare ingredients, evaluates products, and publishes guides. Our independence guarantee and corrections policy.",
  alternates: { canonical: "/editorial-policy" },
};

const steps = [
  { step: "01", title: "Literature Search", body: "Every ingredient profile begins with a structured search of PubMed, the Journal of Cosmetic Dermatology, the British Journal of Dermatology, and the Journal of the American Academy of Dermatology. We prioritise randomised controlled trials (RCTs), systematic reviews, and meta-analyses." },
  { step: "02", title: "Evidence Classification", body: "Each ingredient claim is assigned an evidence level: Strong, Moderate, Limited, Emerging, or Insufficient. We never conflate animal data with clinical human evidence." },
  { step: "03", title: "Concentration & Formulation Assessment", body: "We note the concentrations used in clinical evidence and compare them to typical product formulations. An ingredient present at 0.01% when clinical evidence requires 2% is flagged explicitly." },
  { step: "04", title: "Safety Review", body: "We review safety data from published literature, CIR assessments, and EU Cosmetics Regulation annexes. Known sensitisers, photosensitisers, and ingredients with contraindications are explicitly flagged." },
  { step: "05", title: "Condition Accuracy", body: "Skin condition profiles are reviewed against current clinical guidelines (BAD, AAD) and peer-reviewed diagnostic literature. We do not reproduce unverified claims from consumer media." },
  { step: "06", title: "Routine Construction", body: "Routine guides are built from the ingredient level up. Step order, product category sequencing, and active ingredient pairing rules are sourced from dermatology literature, not influencer convention." },
  { step: "07", title: "Peer Review & Publication", body: "Every article is reviewed by at least one other editor before publication. We maintain a corrections policy: errors are corrected, dated, and noted transparently." },
];

const conflicts = [
  { q: "Do brands pay for coverage?", a: "No. Coverage decisions are made by our editorial team. Brands are not informed before publication and cannot pay for placement in any article." },
  { q: "Do you accept free products?", a: "Occasionally. If so, it is disclosed. Receiving a product does not improve its coverage." },
  { q: "How do affiliate links affect recommendations?", a: "They don't. A product we earn nothing on may be our first recommendation if the formulation warrants it." },
  { q: "Can a brand request removal?", a: "No. We do not remove articles on commercial grounds. We update content when formulations change or new evidence emerges." },
];

export default function SkinEditorialPolicyPage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>
      <SkinBreadcrumb items={[{ label: "Editorial Policy" }]} />

      <div style={{ maxWidth: 780, margin: "0 auto", padding: "64px 24px" }}>

        <div style={{ marginBottom: 40 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 16 }}>POLICY · SKIN-ED-001</p>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.0, marginBottom: 16 }}>
            Editorial Policy
          </h1>
          <p style={{ fontSize: 13, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace" }}>Skin Health Section · Last updated: May 31, 2026</p>
        </div>

        <div style={{ padding: "28px 32px", backgroundColor: "#1A1714", borderRadius: 12, marginBottom: 48 }}>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5C5650", marginBottom: 12 }}>Mission</p>
          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#F2EBD9", lineHeight: 1.35, letterSpacing: "-0.02em" }}>
            Evidence-based skincare research. No marketing. No trends. No affiliate-influenced recommendations.
          </p>
        </div>

        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1A1714", marginBottom: 8, letterSpacing: "-0.02em" }}>How We Research</h2>
          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.7, marginBottom: 32 }}>Every article, ingredient profile, and routine guide follows a consistent research process.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
            {steps.map((s, i) => (
              <div key={s.step} style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: 20, padding: "20px 24px", borderBottom: i < steps.length - 1 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
                <div style={{ paddingTop: 2 }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 11, fontWeight: 700, color: "#C4622D", letterSpacing: "0.1em" }}>§ {s.step}</span>
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: "#2D2926", lineHeight: 1.75, margin: 0 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ paddingBottom: 40, borderBottom: "1px solid #D4C9B8", marginBottom: 40 }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Author Expertise</h2>
          <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8 }}>
            Fitlabreviews Skin content is researched and written by editors with backgrounds in health science communication, cosmetic formulation, or nutritional biochemistry. We do not employ ghost writers or AI-generated content without editorial review and fact-checking.
          </p>
        </div>

        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", marginBottom: 24, letterSpacing: "-0.02em" }}>Independence & Conflicts of Interest</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {conflicts.map((c) => (
              <div key={c.q} style={{ border: "1px solid #D4C9B8", borderRadius: 8, overflow: "hidden" }}>
                <div style={{ padding: "12px 16px", backgroundColor: "#F8F2E4", borderBottom: "1px solid #EDE8DF" }}>
                  <p style={{ fontWeight: 700, color: "#1A1714", margin: 0, fontSize: 14 }}>{c.q}</p>
                </div>
                <div style={{ padding: "12px 16px" }}>
                  <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, margin: 0 }}>{c.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ paddingBottom: 40, borderBottom: "1px solid #D4C9B8", marginBottom: 40 }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1A1714", marginBottom: 16, letterSpacing: "-0.02em" }}>Corrections Policy</h2>
          <p style={{ fontSize: 15, color: "#2D2926", lineHeight: 1.8 }}>
            If an error is identified in any Skin Health article, we correct it promptly. Corrections are noted at the bottom of the relevant article with the date corrected and a brief description of what changed. To report an error, use our contact page.
          </p>
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/methodology" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", backgroundColor: "#1A1714", color: "#F2EBD9", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
            Skin Methodology →
          </Link>
          <Link href="/medical-disclaimer" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", border: "1px solid #D4C9B8", backgroundColor: "#F8F2E4", color: "#5C5650", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
            Medical Disclaimer
          </Link>
          <a href="https://fitlabreviews.com/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", border: "1px solid #D4C9B8", backgroundColor: "#F8F2E4", color: "#5C5650", fontSize: 13, fontWeight: 600, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none" }}>
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
