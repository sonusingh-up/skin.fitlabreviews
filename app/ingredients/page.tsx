import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Skin Ingredients — Evidence-Rated Ingredient Profiles",
  description:
    "Evidence-rated profiles for common skincare ingredients: retinol, niacinamide, vitamin C, and more. Benefits, risks, and how to use each one.",
  alternates: { canonical: "/ingredients" },
};

const ingredients = [
  { title: "Retinol", category: "Retinoid", evidenceLevel: "strong", benefits: ["Increases cell turnover", "Reduces fine lines and wrinkles", "Improves texture and tone", "Evidence-backed for photoageing"] },
  { title: "Niacinamide", category: "Vitamin B3", evidenceLevel: "strong", benefits: ["Reduces pore appearance", "Targets hyperpigmentation", "Strengthens skin barrier", "Anti-inflammatory properties"] },
  { title: "Vitamin C (L-Ascorbic Acid)", category: "Antioxidant", evidenceLevel: "strong", benefits: ["Brightens and evens skin tone", "Neutralises free radical damage", "Boosts collagen synthesis", "Fades hyperpigmentation"] },
  { title: "Hyaluronic Acid", category: "Humectant", evidenceLevel: "moderate", benefits: ["Draws moisture to the surface", "Plumps and hydrates skin", "Reduces transepidermal water loss", "Suitable for all skin types"] },
  { title: "AHAs (Glycolic & Lactic Acid)", category: "Exfoliant", evidenceLevel: "strong", benefits: ["Chemical exfoliation of dead skin cells", "Improves radiance and texture", "Helps with pigmentation", "Stimulates collagen at higher concentrations"] },
  { title: "BHA (Salicylic Acid)", category: "Exfoliant", evidenceLevel: "strong", benefits: ["Oil-soluble — penetrates pores", "Reduces blackheads and breakouts", "Anti-inflammatory in acne", "Keratolytic action"] },
  { title: "Zinc Oxide", category: "UV Filter", evidenceLevel: "strong", benefits: ["Broad-spectrum UVA/UVB protection", "Photostable mineral filter", "Well-tolerated on sensitive skin", "Anti-inflammatory secondary action"] },
  { title: "Azelaic Acid", category: "Multifunctional", evidenceLevel: "strong", benefits: ["Targets hyperpigmentation", "Anti-acne (bacteriostatic)", "Reduces rosacea symptoms", "Evidence for melasma"] },
  { title: "Peptides", category: "Peptide", evidenceLevel: "limited", benefits: ["Signalling peptides may stimulate collagen", "Carrier peptides deliver trace elements", "Generally well-tolerated", "Evidence varies by peptide class"] },
  { title: "Ceramides", category: "Emollient", evidenceLevel: "moderate", benefits: ["Restore barrier lipid composition", "Reduce transepidermal water loss", "Clinical evidence in eczema management", "Compatible with most actives"] },
  { title: "Tranexamic Acid", category: "Brightening", evidenceLevel: "moderate", benefits: ["Inhibits melanin transfer", "Evidence for melasma treatment", "Well-tolerated alternative to hydroquinone", "Can be used AM and PM"] },
  { title: "Bakuchiol", category: "Retinol Alternative", evidenceLevel: "limited", benefits: ["Plant-derived retinol alternative", "Some evidence for anti-ageing effects", "Better tolerated than retinol in some populations", "Safe during pregnancy (limited data)"] },
];

const evidenceColor: Record<string, string> = {
  strong: "#4A7C59", moderate: "#C4622D", limited: "#D4A96A",
  emerging: "#4A6C8C", insufficient: "#8A8480",
};

export default function SkinIngredientsPage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", gap: 8 }}>
          <a href="https://fitlabreviews.com" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</a>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Skin</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Ingredients</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #D4C9B8" }} className="pad-hero">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880" }}>SKIN HEALTH</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>Ingredient Library</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 12 }}>
            Skin Ingredients
          </h1>
          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.7, maxWidth: 560 }}>
            What the research actually says about the ingredients in your skincare. Evidence levels assigned from published dermatology and cosmetic science literature.
          </p>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880", marginTop: 16 }}>{ingredients.length} ingredients profiled</p>
        </div>
      </div>

      {/* List */}
      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
        <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
          {ingredients.map((ing, i) => (
            <div key={ing.title} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "center", padding: "18px 22px", borderBottom: i < ingredients.length - 1 ? "1px solid #EDE8DF" : "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
                  <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 15, fontWeight: 700, color: "#1A1714" }}>{ing.title}</span>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, padding: "1px 6px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, color: "#8A8480", textTransform: "uppercase" }}>{ing.category}</span>
                </div>
                <p style={{ fontSize: 12, color: "#8A8480", lineHeight: 1.5 }}>{ing.benefits[0]}</p>
              </div>
              <span style={{ padding: "3px 9px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-dm-mono), monospace", textTransform: "uppercase", whiteSpace: "nowrap", color: evidenceColor[ing.evidenceLevel] ?? "#8A8480", backgroundColor: `${evidenceColor[ing.evidenceLevel] ?? "#8A8480"}14`, border: `1px solid ${evidenceColor[ing.evidenceLevel] ?? "#8A8480"}33` }}>
                {ing.evidenceLevel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
