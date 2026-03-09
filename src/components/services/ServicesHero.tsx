"use client";

export default function ServicesHero() {
  return (
    <section
      className="relative w-full min-h-[75vh] flex items-center px-6 overflow-hidden"
      style={{ background: "#0D0B09" }}
    >
      {/* Hero orb */}
      <div
        className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full pointer-events-none z-0 orb-hero"
        style={{
          background: "radial-gradient(circle, rgba(212,168,83,0.04) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        aria-hidden
      />
      <div className="relative z-10 max-w-4xl mx-auto pt-28 pb-14 md:pb-12">
        <p
          className="mb-6 section-label"
          style={{
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#D4A853",
          }}
        >
          CLIENT GROWTH / SERVICES
        </p>

        <h1
          className="mb-6"
          style={{
            fontSize: "clamp(2rem, 5vw, 4.5rem)",
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#F5F0E8",
            maxWidth: "800px",
          }}
        >
          I Build the Growth Infrastructure<br />
          for Service Businesses.
        </h1>

        <p
          className="mb-10"
          style={{
            fontSize: "17px",
            fontWeight: 400,
            lineHeight: 1.7,
            color: "#D2C9B8",
            maxWidth: "520px",
          }}
        >
          A conversion website. Local SEO. Google Ads with a tracked cost per call. AI lead capture that works after hours. One system. One person. Built in 2 to 4 weeks.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <a
            href="#apply"
            className="cta-primary inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold"
          >
            Apply for a Partnership →
          </a>
          <a
            href="#pricing"
            className="cta-secondary inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-medium"
          >
            See the three tiers
          </a>
        </div>

        <div className="flex flex-wrap gap-6 mt-8">
          {[
            "Response within 24 hours",
            "No retainer until I confirm fit",
            "One spot currently open",
          ].map((item, i) => (
            <span
              key={item}
              className="text-xs flex items-center gap-2 animate-fade-in"
              style={{ color: "#A69D8D", animationDelay: `${i * 100}ms` }}
            >
              <span style={{ color: "#D4A853" }}>✓</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
