const readline = require('readline')

module.exports.read = async() => {
  const readlineIF = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  return new Promise(resolve => {
    readlineIF.question("", (answer) => {
      resolve(answer)
      readlineIF.close()
    })
  })
}

exports.write = (message) => {
  console.log(message)
}
