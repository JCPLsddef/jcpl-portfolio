"use client";

import { useState } from "react";

export default function ROICalculator() {
  const [jobValue, setJobValue] = useState(1500);
  const [callsNeeded, setCallsNeeded] = useState(10);

  const costPerCall = 33;
  const monthlyCost = callsNeeded * costPerCall;
  const monthlyRevenue = callsNeeded * jobValue;
  const roi = monthlyRevenue / monthlyCost;

  return (
    <section className="relative px-6 md:px-12 lg:px-20 py-24 bg-[#09090b]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-emerald-500/60" />
          <span className="text-xs tracking-[0.2em] uppercase text-zinc-500 font-medium">
            Unit Economics
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight max-w-[700px]">
          Do the Math Yourself.
        </h2>
        <p className="mt-3 text-zinc-400 max-w-[550px]">
          At $33 per qualified call, this is what the system produces based on
          your numbers. Not projections. Math.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Inputs */}
          <div className="space-y-10">
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-sm text-zinc-400">Your average job value</label>
                <span className="text-2xl font-semibold text-white tabular-nums">
                  ${jobValue.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={200}
                max={10000}
                step={100}
                value={jobValue}
                onChange={(e) => setJobValue(Number(e.target.value))}
                className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-zinc-800
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-5
                  [&::-webkit-slider-thumb]:h-5
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:bg-white
                  [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(255,255,255,0.2)]
                  [&::-webkit-slider-thumb]:cursor-pointer
                  [&::-moz-range-thumb]:w-5
                  [&::-moz-range-thumb]:h-5
                  [&::-moz-range-thumb]:rounded-full
                  [&::-moz-range-thumb]:bg-white
                  [&::-moz-range-thumb]:border-0
                  [&::-moz-range-thumb]:cursor-pointer"
              />
              <div className="flex justify-between text-xs text-zinc-600 mt-1">
                <span>$200</span>
                <span>$10,000</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-sm text-zinc-400">Calls needed per month to stay fully booked</label>
                <span className="text-2xl font-semibold text-white tabular-nums">
                  {callsNeeded}
                </span>
              </div>
              <input
                type="range"
                min={3}
                max={30}
                step={1}
                value={callsNeeded}
                onChange={(e) => setCallsNeeded(Number(e.target.value))}
                className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-zinc-800
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-5
                  [&::-webkit-slider-thumb]:h-5
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:bg-white
                  [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(255,255,255,0.2)]
                  [&::-webkit-slider-thumb]:cursor-pointer
                  [&::-moz-range-thumb]:w-5
                  [&::-moz-range-thumb]:h-5
                  [&::-moz-range-thumb]:rounded-full
                  [&::-moz-range-thumb]:bg-white
                  [&::-moz-range-thumb]:border-0
                  [&::-moz-range-thumb]:cursor-pointer"
              />
              <div className="flex justify-between text-xs text-zinc-600 mt-1">
                <span>3 calls</span>
                <span>30 calls</span>
              </div>
            </div>

            <p className="text-xs text-zinc-600 leading-relaxed">
              Based on $33 average cost per qualified call across all active
              client accounts. Q4 2025 verified.
            </p>
          </div>

          {/* Output */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 space-y-8">
            <div>
              <p className="text-sm text-zinc-500 mb-1">Monthly lead generation cost</p>
              <p className="text-3xl font-semibold text-white tabular-nums">
                ${monthlyCost.toLocaleString()}
              </p>
              <p className="text-xs text-zinc-600 mt-1">
                {callsNeeded} calls × $33 per call
              </p>
            </div>

            <div className="h-px bg-zinc-800" />

            <div>
              <p className="text-sm text-zinc-500 mb-1">Projected monthly revenue</p>
              <p className="text-4xl font-semibold text-emerald-400 tabular-nums">
                ${monthlyRevenue.toLocaleString()}
              </p>
              <p className="text-xs text-zinc-600 mt-1">
                {callsNeeded} calls × ${jobValue.toLocaleString()} avg job
              </p>
            </div>

            <div className="h-px bg-zinc-800" />

            <div>
              <p className="text-sm text-zinc-500 mb-1">Return multiple</p>
              <p className="text-2xl font-semibold text-white tabular-nums">
                {roi.toFixed(0)}x
                <span className="text-sm font-normal text-zinc-500 ml-2">
                  return on lead cost
                </span>
              </p>
            </div>

            <a
              href="/apply"
              className="block w-full text-center px-6 py-3.5 bg-white text-zinc-900 font-medium rounded-lg text-sm hover:bg-zinc-100 transition-colors duration-200"
            >
              Apply with these numbers in mind →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
