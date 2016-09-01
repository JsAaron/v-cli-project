const data = require('./data')
const LATENCY = 16

export function getAllMessages (cb) {
  setTimeout(() => {
    cb(data)
  }, LATENCY)
}
