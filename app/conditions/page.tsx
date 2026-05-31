import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Skin Conditions — Causes, Symptoms & Treatments",
  description:
    "Evidence-led profiles of common skin conditions: causes, symptoms, and treatment options explained with reference to published dermatology research.",
  alternates: { canonical: "/conditions" },
};

const conditions = [
  { title: "Acne", description: "The most common skin condition. Pathology, triggers, and evidence-based treatment hierarchy — from topical retinoids to antibiotic stewardship.", symptoms: ["Breakouts", "Blackheads", "Whiteheads", "Oiliness"] },
  { title: "Eczema (Atopic Dermatitis)", description: "Barrier dysfunction and immune dysregulation — emollient strategies, trigger identification, and when to step up treatment.", symptoms: ["Itching", "Dryness", "Redness", "Flaking"] },
  { title: "Hyperpigmentation", description: "PIH, melasma, and solar lentigines — causes differ, treatment protocols differ. A clinical breakdown of each subtype.", symptoms: ["Dark spots", "Uneven tone", "Melasma", "Post-acne marks"] },
  { title: "Rosacea", description: "Chronic inflammatory condition often misidentified as acne or sensitive skin. Trigger mapping and barrier-first protocol.", symptoms: ["Flushing", "Persistent redness", "Papules", "Sensitivity"] },
  { title: "Psoriasis", description: "Immune-mediated condition with skin and systemic implications. Topical management strategies and when to seek specialist care.", symptoms: ["Plaques", "Scaling", "Inflammation", "Itching"] },
  { title: "Dehydrated Skin", description: "Distinct from dry skin type — a transient condition affecting all skin types. Barrier repair and humectant sequencing.", symptoms: ["Tightness", "Dullness", "Fine lines", "Flakiness"] },
];

export default function SkinConditionsPage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", gap: 8 }}>
          <a href="https://fitlabreviews.com" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</a>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Skin</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Conditions</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #D4C9B8" }} className="pad-hero">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880" }}>SKIN HEALTH</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>Condition Library</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 12 }}>
            Skin Conditions
          </h1>
          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.7, maxWidth: 560 }}>
            Evidence-based profiles covering causes, symptoms, and treatment options — sourced from published dermatology literature, not brand copy.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
          {conditions.map((condition) => (
            <div key={condition.title} style={{ padding: "22px 24px", borderRadius: 12, border: "1px solid #D4C9B8", backgroundColor: "#F8F2E4" }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 17, fontWeight: 700, color: "#1A1714", lineHeight: 1.3, marginBottom: 10 }}>{condition.title}</h2>
              <p style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.6, marginBottom: 14 }}>{condition.description}</p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {condition.symptoms.slice(0, 3).map((symptom) => (
                  <span key={symptom} style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, padding: "2px 8px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, color: "#8A8480", textTransform: "uppercase" }}>
                    {symptom}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
