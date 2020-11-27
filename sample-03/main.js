const argv = require("minimist")(process.argv.slice(2))
const Standard = require("./standard")
const Yamaguchi = require("./yamaguchi")
const Hanyu = require("./hanyu")

const main = async() => {
  let processInstance = null

  switch (argv.m) {
    case "tom":
      processInstance = new Yamaguchi()
      break
    case "michi":
      processInstance = new Hanyu()
      break
    default:
      processInstance = new Standard()
  }

  processInstance.execute()
}

main()
