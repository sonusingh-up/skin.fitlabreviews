import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Skin Guides — Research-Led Skincare Articles",
  description:
    "Research-led skincare guides covering acne, anti-aging, hydration, SPF, and more. Every guide cites the evidence behind its recommendations.",
  alternates: { canonical: "/guides" },
};

const guides = [
  { title: "The Retinol Starter Guide: How to Begin Without Irritation", category: "Anti-Aging", difficulty: "beginner", timeEstimate: "8 min read", description: "A step-by-step introduction to retinol — correct concentrations, buffering methods, and how to avoid the retinol purge." },
  { title: "SPF 101: Why Mineral vs Chemical Sunscreen Matters", category: "Sun Protection", difficulty: "beginner", timeEstimate: "6 min read", description: "The evidence behind UV filters, what broad-spectrum actually means, and how to choose between mineral and chemical options." },
  { title: "Building a Hyperpigmentation Routine That Works", category: "Hyperpigmentation", difficulty: "intermediate", timeEstimate: "10 min read", description: "PIH, melasma, and solar lentigines have different causes — and different protocols. A clinical breakdown." },
  { title: "The Acid Guide: AHAs, BHAs, and PHAs Explained", category: "Exfoliation", difficulty: "intermediate", timeEstimate: "9 min read", description: "What pH, concentration, and contact time mean for exfoliant efficacy — and how to sequence them correctly." },
  { title: "Niacinamide: The Evidence Behind the Hype", category: "Ingredients", difficulty: "beginner", timeEstimate: "7 min read", description: "A deep look at the clinical studies on niacinamide — what it actually does, at what concentration, and what's overstated." },
  { title: "Sensitive Skin: Patch Testing and Trigger Identification", category: "Sensitive Skin", difficulty: "beginner", timeEstimate: "5 min read", description: "How to identify sensitising ingredients, patch-test correctly, and build a barrier-first protocol." },
];

const difficultyColor: Record<string, string> = {
  beginner: "#4A7C59", intermediate: "#C4622D", advanced: "#8B1A1A",
};

export default function SkinGuidesPage() {
  return (
    <div style={{ backgroundColor: "#F2EBD9" }}>

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", gap: 8 }}>
          <a href="https://fitlabreviews.com" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</a>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Skin</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Guides</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ borderBottom: "1px solid #D4C9B8" }} className="pad-hero">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880" }}>SKIN HEALTH</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D" }}>Guide Library</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.05, marginBottom: 12 }}>
            Skin Guides
          </h1>
          <p style={{ fontSize: 15, color: "#5C5650", lineHeight: 1.7, maxWidth: 560 }}>
            Research-led guides for every skin concern. Each article ties its recommendations to the peer-reviewed evidence behind them.
          </p>
          <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880", marginTop: 16 }}>{guides.length} guides</p>
        </div>
      </div>

      {/* Grid */}
      <div style={{ maxWidth: 1280, margin: "0 auto" }} className="container-pad">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 12 }}>
          {guides.map((guide) => (
            <div key={guide.title} style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #D4C9B8", backgroundColor: "#F8F2E4" }}>
              <div style={{ height: 4, backgroundColor: difficultyColor[guide.difficulty] ?? "#C4622D" }} />
              <div style={{ padding: "16px 18px 20px", display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, padding: "2px 7px", backgroundColor: "#EDE8DF", border: "1px solid #D4C9B8", borderRadius: 4, color: "#8A8480", textTransform: "uppercase", letterSpacing: "0.1em" }}>{guide.category}</span>
                  <span style={{ padding: "2px 7px", borderRadius: 4, fontSize: 9, fontFamily: "var(--font-dm-mono), monospace", textTransform: "uppercase", color: difficultyColor[guide.difficulty] ?? "#8A8480", backgroundColor: `${difficultyColor[guide.difficulty] ?? "#8A8480"}14`, border: `1px solid ${difficultyColor[guide.difficulty] ?? "#8A8480"}33` }}>
                    {guide.difficulty}
                  </span>
                </div>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 16, fontWeight: 700, color: "#1A1714", lineHeight: 1.3, margin: 0 }}>{guide.title}</h2>
                <p style={{ fontSize: 12, color: "#8A8480", lineHeight: 1.5, margin: 0 }}>{guide.description}</p>
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, color: "#A89880" }}>{guide.timeEstimate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
