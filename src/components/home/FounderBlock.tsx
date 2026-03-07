"use client";

const JUAN_IMG_SRC = "https://static.wixstatic.com/media/62f926_557272f0fa6547d9b0c8d0518959c14b~mv2.jpeg";

const BADGES = [
  "3 active partnerships max",
  "Every system built personally",
  "Direct access, no middlemen",
];

export default function FounderBlock() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "#1A1510" }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-center">
          <div className="relative max-w-[520px] mx-auto md:mx-0 overflow-hidden">
            <div className="founder-photo-wrapper rounded-xl overflow-hidden" style={{ border: "1px solid #2A2318" }}>
              <img
                src={JUAN_IMG_SRC}
                alt="Juan Carlos Portillo-Laflamme, founder of Client Growth"
                className="w-full h-auto object-cover object-top"
                style={{ borderRadius: 12 }}
              />
            </div>
          </div>

          <div>
            <p
              className="uppercase mb-3"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                color: "#D4A853",
              }}
            >
              WHO BUILDS THIS
            </p>

            <p
              className="text-white font-bold mb-4"
              style={{ fontSize: "1.5rem", lineHeight: 1.4 }}
            >
              I run Client Growth solo. Three clients at a time.
            </p>

            <p
              className="mb-6"
              style={{
                fontSize: "1rem",
                color: "#D2C9B8",
                lineHeight: 1.75,
              }}
            >
              Not because of artificial scarcity, but because every system I build gets my direct attention every single week. No junior staff touches your account. No account manager sits between you and me. When something breaks at 9 PM on a Tuesday, I fix it that night.
            </p>

            <p
              className="mb-8"
              style={{
                fontSize: "1rem",
                color: "#D2C9B8",
                lineHeight: 1.75,
              }}
            >
              Every system I build, I own from the diagnostic call to the first booked call. No handoffs. You work directly with me, every week.
            </p>

            <p
              className="mb-8"
              style={{
                fontSize: "1rem",
                color: "#D2C9B8",
                lineHeight: 1.75,
              }}
            >
              That is not a limitation of my size. It is the entire point.
            </p>

            <div className="flex flex-wrap gap-2" style={{ gap: 8 }}>
              {BADGES.map((badge) => (
                <span
                  key={badge}
                  className="inline-block rounded-md"
                  style={{
                    background: "#221D17",
                    border: "1px solid #2A2318",
                    borderLeft: "3px solid #D4A853",
                    color: "#D2C9B8",
                    fontSize: "0.8rem",
                    padding: "8px 16px",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
