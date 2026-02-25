"use client";

import Image from "next/image";

const LOGOS = [
  {
    src: "https://cdn.shopify.com/s/files/1/0624/6059/2222/files/ChatGPT_Image_6_janv._2026_17_33_55.png?v=1767738915",
    alt: "Absolute Painting",
    name: "Absolute Painting",
    city: "Dallas, TX",
    service: "Painting Contractor",
  },
  {
    src: "https://static.wixstatic.com/media/62f926_58438d6814374c1b81421512d6762ad0~mv2.png",
    alt: "Culture Barbershop",
    name: "Culture Barbershop",
    city: "Montreal, QC",
    service: "Barbershop",
  },
  {
    src: "https://static.wixstatic.com/media/62f926_26ca6fb6d443456c94fab653adce03cc~mv2.png",
    alt: "Triple W Rentals",
    name: "Triple W Rentals",
    city: "Texas",
    service: "RV Rental",
  },
  {
    src: "https://static.wixstatic.com/media/62f926_5c14016a71f74c77a7eedfa86309eadd~mv2.jpg",
    alt: "Centre Dentaire Saint-Lazare",
    name: "Centre Dentaire Saint-Lazare",
    city: "Montreal, QC",
    service: "Dental Clinic",
  },
  {
    src: "https://static.wixstatic.com/media/62f926_b2db4e8f4d74470fb8848ee6183aecde~mv2.png",
    alt: "Centre Dentaire Saint-Elzear",
    name: "Centre Dentaire Saint-Elzear",
    city: "Montreal, QC",
    service: "Dental Clinic",
  },
];

const LOOP_COUNT = 3;

export default function LogoArrowLoop() {
  const items = Array.from({ length: LOOP_COUNT }, (_, i) =>
    LOGOS.map((logo, j) => ({ ...logo, key: `${i}-${j}` }))
  ).flat();

  return (
    <>
      <div className="lal-section">
        {/* lal-runway: centered + rotated. lal-track: animates within rotated frame */}
        <div className="lal-runway">
          <div className="lal-track">
            {items.map((logo) => (
              <div key={logo.key} className="lal-card">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={32}
                  loading="lazy"
                  className="lal-img"
                />
                <span className="lal-name">{logo.name}</span>
                <span className="lal-meta">
                  {logo.city}&nbsp;·&nbsp;{logo.service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .lal-section {
          position: relative;
          height: 260px;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            #000 14%,
            #000 86%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            #000 14%,
            #000 86%,
            transparent 100%
          );
        }

        /*
         * lal-runway is centered in the section and rotated.
         * translate(-50%, -50%) centres it around the section midpoint.
         * rotate(-20deg) tilts the card strip so cards appear to flow
         * from bottom-right → top-left (upward-arrow direction).
         */
        .lal-runway {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-20deg);
          white-space: nowrap;
        }

        /*
         * lal-track holds all LOOP_COUNT copies of the logos side-by-side.
         * translateX(-33.3334%) = exactly one copy's width → seamless loop.
         * % is relative to the track's own width (= LOOP_COUNT × one-set-width),
         * so 1/3 of that = one set. With margin-right on every card (including
         * the last in each set) the inter-set gap matches the intra-set gap.
         */
        .lal-track {
          display: inline-flex;
          flex-wrap: nowrap;
          will-change: transform;
          animation: lal-scroll 24s linear infinite;
        }

        .lal-card {
          flex-shrink: 0;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 14px 18px;
          margin-right: 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          min-width: 160px;
        }

        .lal-img {
          object-fit: contain;
        }

        .lal-name {
          display: block;
          font-size: 12px;
          font-weight: 700;
          color: #fff;
          white-space: nowrap;
          text-align: center;
        }

        .lal-meta {
          display: block;
          font-size: 10px;
          color: rgba(255, 255, 255, 0.4);
          white-space: nowrap;
          text-align: center;
        }

        @keyframes lal-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.3334%);
          }
        }

        /* Pause on hover */
        .lal-section:hover .lal-track {
          animation-play-state: paused;
        }

        /* Mobile: flat horizontal marquee, hide text labels */
        @media (max-width: 767px) {
          .lal-section {
            height: 96px;
          }
          .lal-runway {
            /* remove the diagonal rotation */
            transform: translate(-50%, -50%);
          }
          .lal-name,
          .lal-meta {
            display: none;
          }
          .lal-card {
            min-width: 80px;
            padding: 8px 12px;
            border-radius: 8px;
            margin-right: 12px;
          }
        }

        /* Respect prefers-reduced-motion */
        @media (prefers-reduced-motion: reduce) {
          .lal-track {
            animation-play-state: paused !important;
          }
        }
      `}</style>
    </>
  );
}
