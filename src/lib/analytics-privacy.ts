/** Only public, known marketing routes belong in analytics. */
const routes = new Set(['/', '/products', '/science', '/sustainability']);

export function safePageUrl(value: string): string | undefined {
  try {
    const url = new URL(value);
    if (!['https:', 'http:'].includes(url.protocol)) return undefined;
    return `${url.origin}${routes.has(url.pathname) ? url.pathname : '/other'}`;
  } catch { return undefined; }
}

export function safeReferrer(value: string): string {
  try {
    const url = new URL(value);
    return ['https:', 'http:'].includes(url.protocol) ? url.origin : '';
  } catch { return ''; }
}

export function trackingAllowed(...signals: (string | boolean | null | undefined)[]): boolean {
  return !signals.some((signal) => signal === true || signal === '1' || signal === 'yes');
}

/** Discard arbitrary properties, person data, campaign fields, and non-pageview events. */
export function filterPageview<T extends { event: string; properties: Record<string, unknown> }>(
  event: T, allowed: boolean,
): T | null {
  if (!allowed || event.event !== '$pageview') return null;
  const url = safePageUrl(String(event.properties.$current_url ?? ''));
  if (!url) return null;
  const properties: Record<string, unknown> = {
    $current_url: url,
    $pathname: new URL(url).pathname,
    $host: new URL(url).host,
    $referrer: safeReferrer(String(event.properties.$referrer ?? '')),
    $process_person_profile: false,
    $geoip_disable: true,
    site: 'luxitin',
  };
  // The public ingestion token and anonymous SDK IDs are required by the SDK.
  // Never copy arbitrary user properties.
  for (const key of ['token', 'distinct_id', '$device_id', '$session_id', '$window_id', '$lib', '$lib_version']) {
    if (typeof event.properties[key] === 'string') properties[key] = event.properties[key];
  }
  return { ...event, properties };
}

export function createPageviewTracker(capture: (url: string) => void) {
  let previous: string | undefined;
  return (value: string, allowed: boolean) => {
    const url = safePageUrl(value);
    if (!allowed || !url || url === previous) return;
    previous = url;
    capture(url);
  };
}
