const io = require("../utils/io")

module.exports = async () => {
  io.write("あ、これ契約書なんで名前書いてもらえますか？。")
  const targetName = await io.read()

  if (targetName.length < 2) throw new Error("すんません、名前は2文字以上で書いてください。")

  io.write(`へぇー、${targetName}さんって言うんですねー。良い名前っすね。`)

  const extractIndex = Math.floor(Math.random() * targetName.length)
  const extractName = targetName[extractIndex]
  io.write(`でもちょっと長いんで${extractName}さんって呼びますね。`)
}
