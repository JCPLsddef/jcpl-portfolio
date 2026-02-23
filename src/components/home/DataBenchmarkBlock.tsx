"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/motion";

export default function DataBenchmarkBlock() {
  return (
    <SectionWrapper id="benchmark" className="bg-[#060b14] py-16">
      <Reveal className="text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-400 mb-6">
          Operational Benchmark
        </p>
        <p className="text-7xl font-black text-white leading-none mb-0">$33</p>
        <p className="text-slate-400 text-base max-w-md mx-auto text-center mt-4">
          Average cost per qualified call delivered across active client accounts in Q4 2025. Updated as campaigns scale.
        </p>
      </Reveal>
    </SectionWrapper>
  );
}
