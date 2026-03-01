/* ─── Lightweight Analytics / Event Tracking Utility ─── */

export type EventName =
  | "hero_primary_cta_click"
  | "hero_secondary_cta_click"
  | "hero_cta_click"
  | "section_cta_click"
  | "case_card_click"
  | "faq_cta_click"
  | "portfolio_cta_click"
  | "final_cta_primary_click"
  | "final_cta_secondary_click"
  | "apply_form_start"
  | "apply_form_submit"
  | "booking_complete"
  | "thank_you_view"
  | "form_start"
  | "form_step_complete"
  | "form_submit"
  | "lead_qualified_true"
  | "lead_qualified_false"
  | "services_hero_primary_cta_click"
  | "services_hero_secondary_cta_click"
  | "services_plan_select_foundation"
  | "services_plan_select_growth"
  | "services_plan_select_scale"
  | "services_plan_cta_click_foundation"
  | "services_plan_cta_click_growth"
  | "services_plan_cta_click_scale"
  | "services_plan_expand_scope"
  | "services_compare_expand"
  | "services_final_cta_primary_click"
  | "services_final_cta_secondary_click"
  | "services_faq_toggle"
  | "services_payment_methods_view"
  | "services_quiz_answer"
  | "services_quiz_result"
  | "services_quiz_cta_click_foundation"
  | "services_quiz_cta_click_growth"
  | "services_quiz_cta_click_scale"
  | "services_sticky_cta_click";

interface TrackOptions {
  /** Additional data payload */
  data?: Record<string, string | number | boolean>;
}

/**
 * Fire a custom analytics event.
 * Currently logs to console + pushes to dataLayer (Google Tag Manager-compatible).
 * Replace / extend with your analytics provider (Plausible, PostHog, GA4, etc.)
 */
export function trackEvent(name: EventName, options?: TrackOptions) {
  if (typeof window === "undefined") return;

  // Console (dev mode)
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics] ${name}`, options?.data ?? "");
  }

  // Google Tag Manager dataLayer
  const w = window as Window & { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: name, ...options?.data });
}
