export function convertRate(rateA: number, rateB: number) {
  return rateA / rateB;
}

export function amountInB(amount: number, fromCur: number, toCure: number) {
  return amount * convertRate(fromCur, toCure)
}
