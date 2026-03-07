import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import ApplyForm from "@/components/ApplyForm";
import SpotsLeftSection from "@/components/home/SpotsLeftSection";

export const metadata: Metadata = buildMetadata({
  title: "Apply: Start Your Growth Partnership",
  description:
    "Apply to work with Client Growth. Answer a few quick questions and I'll personally review your application within 24 hours.",
  path: "/apply",
});

export default function ApplyPage() {
  return (
    <>
      <SpotsLeftSection />
      <ApplyForm />
    </>
  );
}
