import { initAnalytics, isAnalyticsAllowed } from "@/lib/analytics";

if (isAnalyticsAllowed()) {
  initAnalytics();
}
