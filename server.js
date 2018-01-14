var registryUpdates = require('pull-npm-registry-updates')
var pull = require('pull-stream')

pull(
  registryUpdates(),
  pull.drain(function (update) {
    if (update.seq % 1000 === 0) {
      console.log(update.seq)
    }
    var doc = update.doc
    if (!doc) return
    if (doc.licensezero) {
      console.log(JSON.stringify(doc))
    }
  })
)
