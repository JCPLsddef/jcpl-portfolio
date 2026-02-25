import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";

export default function InvestmentSection() {
  return (
  <SectionWrapper variant="surface" className="bg-cg-section-a py-16">
      <div className="text-center mb-8">
        <div className="uppercase text-cg-secondary tracking-[0.1em] text-[0.75rem] font-semibold mb-3">INVESTMENT</div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What Does $2,500 Buy You?</h2>
        <p className="text-cg-body max-w-xl mx-auto mb-6 text-base sm:text-lg font-medium">
          Triple W Rentals put in $900 and got $41,084.85 back in 30 days. The question is never what it costs. It is what it costs you to keep doing nothing.
        </p>
      </div>
      <div className="max-w-lg w-full bg-cg-card border border-[rgba(37,99,235,0.15)] rounded-2xl p-6 sm:p-10 flex flex-col items-center mx-auto">
        <div className="uppercase text-cg-secondary tracking-[0.1em] text-[0.75rem] font-semibold mb-2">ENGAGEMENTS START AT</div>
        <div className="text-4xl sm:text-5xl font-bold text-white mb-2 tracking-tight">$2,500 / month</div>
        <div className="w-full border-t border-[rgba(37,99,235,0.15)] my-4"></div>
        <div className="text-cg-body text-base sm:text-lg leading-7 text-center mb-6 font-medium">
          The scope depends on your market and your starting point. Some businesses need the full system. Others need two or three components to break through. The strategy call is where I figure out exactly what your situation calls for, before you commit to anything.
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-6">
          <div className="flex items-center gap-2">
            <svg width="22" height="22" fill="none" viewBox="0 0 22 22" className="opacity-80"><circle cx="11" cy="11" r="11" fill="#2563EB" fillOpacity="0.12"/><path d="M7 11.5l3 3 5-5" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span className="text-cg-secondary text-sm font-medium">No long-term contracts</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="22" height="22" fill="none" viewBox="0 0 22 22" className="opacity-80"><circle cx="11" cy="11" r="11" fill="#2563EB" fillOpacity="0.12"/><path d="M7 11.5l3 3 5-5" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span className="text-cg-secondary text-sm font-medium">Milestone-based delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="22" height="22" fill="none" viewBox="0 0 22 22" className="opacity-80"><circle cx="11" cy="11" r="11" fill="#2563EB" fillOpacity="0.12"/><path d="M7 11.5l3 3 5-5" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span className="text-cg-secondary text-sm font-medium">I will tell you upfront if it is not a fit</span>
          </div>
        </div>
        <CTAButton
          href="/apply"
          className="w-full bg-cg-accent hover:bg-cg-accent-hov text-white rounded-lg py-4 px-6 font-semibold text-base sm:text-lg transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-cg-accent"
        >
          Apply to See If You Qualify
        </CTAButton>
        <div className="text-cg-body text-xs text-center mt-2 font-medium">
          Short application. I will personally review it within 24 hours.
        </div>
        <div className="text-cg-secondary text-xs text-center mt-2">
          Strategy call. Scope. Build. Launch. Optimize.
        </div>
      </div>
    </SectionWrapper>
  );
}
