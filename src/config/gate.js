// Experimental starting points from our research plan.
// They are not established safety limits. Final values come from validation data.
export const THRESHOLDS = {
  execute: 0.98, // at or above: execute
  confirm: 0.9, // from here up to `execute`: ask for confirmation
}

export function decide(confidence) {
  if (confidence >= THRESHOLDS.execute) return 'execute'
  if (confidence >= THRESHOLDS.confirm) return 'confirm'
  return 'reject'
}

export const pct = (x) => `${Math.round(x * 100)}%`