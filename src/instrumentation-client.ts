import posthog from 'posthog-js';
import { filterPageview, trackingAllowed } from './lib/analytics-privacy';

const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

export function browserAllowsAnalytics() {
  return trackingAllowed(navigator.doNotTrack, (window as Window & { doNotTrack?: string }).doNotTrack);
}

// Keep initialization here (Next.js 15.3+); route tracking never initializes another client.
if (token && host && browserAllowsAnalytics()) {
  posthog.init(token, {
    api_host: host,
    defaults: '2026-08-30',
    capture_pageview: false,
    capture_pageleave: false,
    autocapture: false,
    rageclick: false,
    capture_dead_clicks: false,
    disable_session_recording: true,
    capture_exceptions: false,
    capture_performance: false,
    capture_heatmaps: false,
    disable_surveys: true,
    disable_external_dependency_loading: true,
    advanced_disable_flags: true,
    person_profiles: 'never',
    persistence: 'memory',
    respect_dnt: true,
    ip: false,
    save_campaign_params: false,
    save_referrer: false,
    before_send: (event) => event ? filterPageview(event, browserAllowsAnalytics()) : null,
  });
}
