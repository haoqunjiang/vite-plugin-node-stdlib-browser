const { red, green } = require('kolorist')

function test (func) {
  console.log(
    func()
      ? green(`Success ${func.toString()}`)
      : red(`Failed ${func.toString()}`)
  )
}

const path = require('path')

module.exports = function main () {
  test(() => global === globalThis)
  // FIXME: the global Buffer object does not work on build yet
  test(() => Buffer !== undefined)
  test(() => path.posix.join('foo', 'bar') === 'foo/bar')
}
