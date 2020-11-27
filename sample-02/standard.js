const io = require("../utils/io")

module.exports = async () => {
  io.write("契約書だよ。そこに名前を書きな。")
  const targetName = await io.read()

  if (targetName.length < 2) throw new Error("名前は2文字以上で書きな!!")

  io.write(`ふん。${targetName}というのかい。贅沢な名前だねぇ。`)

  const extractIndex = Math.floor(Math.random() * targetName.length)
  const extractName = targetName[extractIndex]
  io.write(`今からお前の名前は${extractName}だ。いいかい、${extractName}だよ。分かったら返事をするんだ、${extractName}!!`)
}
