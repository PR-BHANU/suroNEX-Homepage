import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="grid-layer"></div>
        <div className="glow-layer"></div>
        <div className="hero-content">
          <div className="card">
            <Sparkles size={16} color="#7c86ff" />
            <a>AI-Powered Risk & Compliance Platform</a>
          </div>
          <div className="pt-10">
            <h1>Transform Compliance</h1>
            <h1>from</h1>
            <h1>Complexity to</h1>
            <h1 className="text-[#8686ff]">Confidence</h1>
          </div>
          <div className="para">
            <p>
              Organizations face fragmented compliance and growing security
              risks across multi-cloud environments. Suronex, our AI-powered
              platform, delivers complete visibility, intelligent controls, and
              scalable security so you can stay ahead of compliance demands with
              confidence.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
