// The Demo page reads trials only through this file.
// Today it returns illustrative examples.
// Later, replace getTrials() with real saved predictions from the ML team:
//   const res = await fetch('/predictions.json')
//   return res.json()
// (put predictions.json in the /public folder) and set IS_SIMULATION to false.
// Keep this trial shape: { id, asked, predicted, confidence }

export const IS_SIMULATION = true

const exampleTrials = [
  { id: 'ex-1', asked: 'left', predicted: 'left', confidence: 0.99 },
  { id: 'ex-2', asked: 'right', predicted: 'right', confidence: 0.94 },
  { id: 'ex-3', asked: 'right', predicted: 'left', confidence: 0.64 },
  { id: 'ex-4', asked: 'left', predicted: 'left', confidence: 0.58 },
  { id: 'ex-5', asked: 'left', predicted: 'right', confidence: 0.95 },
  { id: 'ex-6', asked: 'right', predicted: 'left', confidence: 0.99 },
  { id: 'ex-7', asked: 'right', predicted: 'right', confidence: 0.985 },
]

export async function getTrials() {
  return exampleTrials
}