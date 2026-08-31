type EventParams = Record<string, string | number | boolean | undefined>;

/**
 * Pushes catalogue events to the dataLayer / gtag when available.
 * Safe no-op when no analytics tag is installed.
 */
export function trackEvent(event: string, params: EventParams = {}) {
  if (typeof window === "undefined") return;

  const payload = {
    ...params,
    device_type: window.innerWidth < 768 ? "mobile" : window.innerWidth < 1280 ? "tablet" : "desktop",
  };

  const w = window as unknown as {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  };

  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...payload });
  w.gtag?.("event", event, payload);
}

export function getCampaignContext() {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const pick = (key: string) => params.get(key) || undefined;

  return {
    pageUrl: window.location.href.slice(0, 500),
    referrer: document.referrer ? document.referrer.slice(0, 500) : undefined,
    utmSource: pick("utm_source"),
    utmMedium: pick("utm_medium"),
    utmCampaign: pick("utm_campaign"),
    utmContent: pick("utm_content"),
  };
}
