import posthog from "posthog-js";

// Cookieless, pageview-only analytics: unique visitors (server-side hash) and traffic source (referrer/UTM).
// Requires "Cookieless server hash mode" in PostHog project settings, otherwise events are dropped.
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
