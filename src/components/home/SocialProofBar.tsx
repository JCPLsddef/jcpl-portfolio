"use client";

const clients = [
  {
    name: "Triple W Rentals",
    industry: "RV Rental",
    location: "Texas",
    result: "$41K revenue, 30 days",
    logo: "/images/logos/triplew.png",
  },
  {
    name: "Elite Barbershop",
    industry: "Premium Barbershop",
    location: "Montreal",
    result: "90 new clients, 90 days",
    logo: "/images/logos/elite.png",
  },
  {
    name: "Culture Barbershop",
    industry: "Barbershop",
    location: "Montreal",
    result: "Page 1 SEO, 60 days",
    logo: "/images/logos/culture.png",
  },
  {
    name: "Absolute Painting",
    industry: "Home Services",
    location: "DFW, Texas",
    result: "System live",
    logo: "/images/logos/absolute.png",
  },
  {
    name: "Centre Dentaire Saint-Élzéar",
    industry: "Dental Clinic",
    location: "Quebec",
    result: "Funnel live",
    logo: "/images/logos/dentaire.png",
  },
];

export default function SocialProofBar() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 bg-[#09090b] border-y border-zinc-800/40">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-xs tracking-[0.2em] uppercase text-zinc-600 font-medium">
            Active Systems
          </span>
          <div className="h-px flex-1 bg-zinc-800/60" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {clients.map((client, i) => (
            <div
              key={i}
              className="group relative p-4 rounded-xl border border-zinc-800/40 hover:border-zinc-700/60 transition-colors duration-300 bg-zinc-900/30"
            >
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4 overflow-hidden">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-7 h-7 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <p className="text-sm font-medium text-zinc-300">{client.name}</p>
              <p className="text-xs text-zinc-600 mt-0.5">
                {client.industry} · {client.location}
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-zinc-800/50 border border-zinc-700/30">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                <span className="text-[11px] text-zinc-400">{client.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
