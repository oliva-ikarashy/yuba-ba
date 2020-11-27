// コマンドライン引数を便利に扱うライブラリです。
// 例えば「-m」で指定した値はargv.mで取得できます。
const argv = require("minimist")(process.argv.slice(2))

const standardExecutor = require("./standard")
const yamaguchExecutor = require("./yamaguchi")
const hanyuExecutor = require("./hanyu")

const main = async() => {
  let processFunction = null

  switch (argv.m) {
    case "tom":
      processFunction = yamaguchExecutor
      break
    case "michi":
      processFunction = hanyuExecutor
      break
    default:
      processFunction = standardExecutor
  }

  processFunction()
}

main()
