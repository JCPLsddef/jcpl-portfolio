"use client";

import { servicesHero } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { Reveal } from "@/components/motion";
import TrueFocus from "@/components/ui/TrueFocus";
import TextType from "@/components/ui/TextType";
import Script from "next/script";

export default function ServicesHero() {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center">
      <div
        data-us-project="IBaCdFRsTBycjxvivLX9"
        style={{ width: '1440px', height: '900px', maxWidth: '100%', maxHeight: '100%' }}
      />
      <Script id="unicornstudio-script" strategy="afterInteractive">
        {`
          !function(){
            var u=window.UnicornStudio;
            if(u&&u.init){
              if(document.readyState==="loading"){
                document.addEventListener("DOMContentLoaded",function(){u.init()})
              }else{u.init()}
            }else{
              window.UnicornStudio={isInitialized:!1};
              var i=document.createElement("script");
              i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js",
              i.onload=function(){
                if(document.readyState==="loading"){
                  document.addEventListener("DOMContentLoaded",function(){UnicornStudio.init()})
                }else{UnicornStudio.init()}
              },
              (document.head||document.body).appendChild(i)
            }
          }();
        `}
      </Script>
    </div>
  );
}
