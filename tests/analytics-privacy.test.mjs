import test from 'node:test';
import assert from 'node:assert/strict';
import { safePageUrl, safeReferrer, filterPageview, trackingAllowed, createPageviewTracker } from '../src/lib/analytics-privacy.ts';

test('URLs lose query, fragments and unknown paths; referrers retain only origin', () => {
  assert.equal(safePageUrl('https://luxitin.example/products?email=private#secret'), 'https://luxitin.example/products');
  assert.equal(safePageUrl('https://luxitin.example/user/private-name'), 'https://luxitin.example/other');
  assert.equal(safePageUrl('javascript:alert(1)'), undefined);
  assert.equal(safeReferrer('https://search.example/private?email=private#secret'), 'https://search.example');
  assert.equal(safeReferrer('invalid'), '');
});
test('Do Not Track variants opt out', () => {
  assert.equal(trackingAllowed('1'), false);
  assert.equal(trackingAllowed(null, 'yes'), false);
  assert.equal(trackingAllowed('0', null), true);
});
test('only pageviews and an explicit property allowlist leave the client', () => {
  const input = { event: '$pageview', properties: { $current_url: 'https://luxitin.example/?token=secret#secret', $referrer: 'https://search.example/query?q=secret', $set: { email: 'secret' }, email: 'secret', $initial_current_url: 'secret', $session_entry_url: 'secret', $title: 'secret', distinct_id: 'anonymous-id' } };
  const output = filterPageview(input, true);
  assert.ok(output);
  assert.equal(JSON.stringify(output).includes('secret'), false);
  assert.equal(output.properties.distinct_id, 'anonymous-id');
  assert.equal(filterPageview(input, false), null);
  for (const event of ['$autocapture', '$exception', '$snapshot', '$identify', '$pageleave']) {
    assert.equal(filterPageview({ ...input, event }, true), null);
  }
});
test('initial, SPA and back visits count once, query/hash and effect repeats do not', () => {
  const events = [];
  const track = createPageviewTracker((url) => events.push(url));
  track('https://luxitin.example/', true);
  track('https://luxitin.example/', true);
  track('https://luxitin.example/?private=yes#secret', true);
  track('https://luxitin.example/products', true);
  track('https://luxitin.example/', true);
  track('https://luxitin.example/science', false);
  assert.deepEqual(events, ['https://luxitin.example/', 'https://luxitin.example/products', 'https://luxitin.example/']);
});
