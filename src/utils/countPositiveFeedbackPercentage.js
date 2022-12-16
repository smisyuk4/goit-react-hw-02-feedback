export const countPositiveFeedbackPercentage = (good, total) => {
  let sum = Math.round(good * 100 / total)
    if (!sum) {
      sum = 0
    }
  return sum
}