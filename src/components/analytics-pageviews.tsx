'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import posthog from 'posthog-js';
import { createPageviewTracker, trackingAllowed } from '@/lib/analytics-privacy';

// A single tracker also deduplicates React Strict Mode's repeated effect setup.
const track = createPageviewTracker((url) => {
  posthog.capture('$pageview', { $current_url: url, $referrer: document.referrer });
});

export function AnalyticsPageviews() {
  const pathname = usePathname();
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN || !process.env.NEXT_PUBLIC_POSTHOG_HOST) return;
    track(window.location.href, trackingAllowed(navigator.doNotTrack,
      (window as Window & { doNotTrack?: string }).doNotTrack));
  }, [pathname]);
  return null;
}
