export function recentHistory (state) {
  const end = state.counter.history.length
  const begin = end - 5 < 0 ? 0 : end - 5
  return state.counter.history
    .slice(begin, end)
    .toString()
    .replace(/,/g, ', ')
}
