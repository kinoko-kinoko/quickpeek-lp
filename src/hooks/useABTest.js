import { useState, useEffect } from 'react';

/**
 * Custom hook for A/B testing.
 * Assigns a variant ('A' or 'B') to the user and persists it in localStorage.
 * Pushes the assignment to the dataLayer.
 * 
 * @param {string} experimentId - The ID of the experiment (e.g., 'headline_test_v1')
 * @returns {string} The assigned variant ('A' or 'B')
 */
export function useABTest(experimentId) {
  const [variant, setVariant] = useState('A'); // Default to Control (A)

  useEffect(() => {
    // 1. Check for existing assignment
    const storageKey = `ab_test_${experimentId}`;
    let assignedVariant = localStorage.getItem(storageKey);

    // 2. Assign if new user
    if (!assignedVariant) {
      assignedVariant = Math.random() < 0.5 ? 'A' : 'B';
      localStorage.setItem(storageKey, assignedVariant);
    }

    setVariant(assignedVariant);

    // 3. Push to DataLayer (Experiment Start)
    if (window.dataLayer) {
      // Avoid duplicate pushes if possible, but GTM handles unique events usually.
      // We push a distinct event for the assignment.
      window.dataLayer.push({
        'event': 'ab_test',
        'experiment_id': experimentId,
        'variant': assignedVariant
      });
    } else {
      console.warn('GTM dataLayer not found. Ensure GTM snippet is installed.');
      // Initialize if missing (safe fallback)
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'ab_test',
        'experiment_id': experimentId,
        'variant': assignedVariant
      });
    }

    console.log(`🧪 AB Test [${experimentId}]: Assigned to ${assignedVariant}`);

  }, [experimentId]);

  return variant;
}

/**
 * Helper to track CTA clicks with the current variant.
 * @param {string} experimentId 
 * @param {string} variant 
 * @param {string} [label] - Optional label for the button
 */
export function trackCTAClick(experimentId, variant, label) {
  if (window.dataLayer) {
    window.dataLayer.push({
      'event': 'cta_click',
      'experiment_id': experimentId,
      'variant': variant,
      'label': label || 'unknown'
    });
    console.log(`📊 Tracked Click: ${experimentId} (${variant}) - ${label}`);
  }
}
