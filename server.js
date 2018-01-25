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
    if (doc.versions) {
      Object.keys(doc.versions).forEach(function (version) {
        var meta = doc.versions[version]
        if (doc.licensezero) {
          console.log(JSON.stringify(doc))
        }
      })
    }
  })
)
