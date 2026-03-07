import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "Terms governing the use of Client Growth services and this website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="bg-[#030812] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-sv-primary mb-4">Legal</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
          Terms of Service
        </h1>
        <p className="text-sm text-sv-text-sub mb-10">
          Last updated: February 2026
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Services</h2>
            <p className="text-sm text-sv-text-sub leading-relaxed">
              Client Growth provides digital growth services including website design and development, paid advertising management, SEO, and AI automation for service businesses. Specific deliverables, timelines, and terms are defined in individual engagement agreements.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. Engagements</h2>
            <p className="text-sm text-sv-text-sub leading-relaxed">
              All engagements are milestone-based. Work begins upon receipt of a signed proposal and initial deposit. No long-term contracts are required. You may discontinue at any milestone boundary with appropriate notice as defined in your agreement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. Ownership</h2>
            <p className="text-sm text-sv-text-sub leading-relaxed">
              Upon final payment, clients retain full ownership of all deliverables produced during the engagement, including website code, ad creatives, and copy. Client Growth retains the right to reference completed work in case studies and portfolio materials unless otherwise agreed.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. Results Disclaimer</h2>
            <p className="text-sm text-sv-text-sub leading-relaxed">
              Results showcased on this website represent real client outcomes but are not guaranteed. Performance varies based on market conditions, client offer quality, budget, and execution. Client Growth does not guarantee specific revenue or lead outcomes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Confidentiality</h2>
            <p className="text-sm text-sv-text-sub leading-relaxed">
              Both parties agree to treat proprietary information as confidential and not disclose it to third parties without written consent. This includes business strategies, pricing, client lists, and proprietary processes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Limitation of Liability</h2>
            <p className="text-sm text-sv-text-sub leading-relaxed">
              Client Growth&apos;s liability is limited to the total fees paid in the three months prior to any claim. Client Growth is not liable for indirect, incidental, or consequential damages arising from service delivery.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Governing Law</h2>
            <p className="text-sm text-sv-text-sub leading-relaxed">
              These terms are governed by the laws of the Province of Quebec, Canada. Disputes shall be resolved through good-faith negotiation prior to any formal proceedings.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">8. Contact</h2>
            <p className="text-sm text-sv-text-sub leading-relaxed">
              Questions about these terms?{" "}
              <a
                href="mailto:hello@clientgrowth.ca"
                className="text-sv-primary hover:underline"
              >
                hello@clientgrowth.ca
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
