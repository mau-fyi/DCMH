import posthog from "posthog-js";

const CONSENT_KEY = "analytics-consent";

// "granted-with-gpc" is an opt-in made while Global Privacy Control was on, so it overrides the signal.
// A plain "granted" was given before GPC was turned on, so GPC wins over it.
export type Consent = "granted" | "granted-with-gpc" | "denied";

// Global Privacy Control is a legally binding opt-out signal in California.
export const hasGlobalPrivacyControl = () =>
  (navigator as Navigator & { globalPrivacyControl?: boolean })
    .globalPrivacyControl === true;

export const getConsent = () =>
  localStorage.getItem(CONSENT_KEY) as Consent | null;

export const isAnalyticsAllowed = () =>
  getConsent() === "granted-with-gpc" ||
  (getConsent() === "granted" && !hasGlobalPrivacyControl());

export function setConsent(allowed: boolean) {
  const consent: Consent = !allowed
    ? "denied"
    : hasGlobalPrivacyControl()
      ? "granted-with-gpc"
      : "granted";
  localStorage.setItem(CONSENT_KEY, consent);
  if (allowed) {
    initAnalytics();
  } else if (posthog.__loaded) {
    // Cookieless mode ignores opt_out_capturing(), so reload to drop the running instance.
    window.location.reload();
  }
}

// Cookieless, pageview-only analytics: unique visitors (server-side hash) and traffic source (referrer/UTM).
// Requires "Cookieless server hash mode" in PostHog project settings, otherwise events are dropped.
// Only call after the user grants consent: posthog.init() contacts PostHog even when capturing is opted out.
export function initAnalytics() {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    defaults: "2025-05-24", // pageviews on client-side navigation (capture_pageview: "history_change")
    cookieless_mode: "always",
    person_profiles: "never",
    autocapture: false,
    capture_pageleave: false,
    capture_performance: false,
    capture_heatmaps: false,
    capture_dead_clicks: false,
    capture_exceptions: false,
    disable_session_recording: true,
    disable_surveys: true,
    disable_product_tours: true,
    disable_conversations: true,
    disable_web_experiments: true,
    disable_external_dependency_loading: true,
    advanced_disable_flags: true,
  });
}
