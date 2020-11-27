// Node.jsは標準入出力処理ががちょっと複雑なので、ラップしたライブラリを作りました。
// JavaのSystem.outとかScanner的な存在だと思ってください。
const io = require("../utils/io")

// function main() {} とほぼ同じ意味です(詳細な挙動は違いますが説明は省略)。
const main = async() => {
  io.write("契約書だよ。そこに名前を書きな。")
  const targetName = await io.read()

  if (targetName.length < 2) throw new Error("名前は2文字以上で書きな!!")

  io.write(`ふん。${targetName}というのかい。贅沢な名前だねぇ。`)

  const extractIndex = Math.floor(Math.random() * targetName.length)
  const extractName = targetName[extractIndex]
  io.write(`今からお前の名前は${extractName}だ。いいかい、${extractName}だよ。分かったら返事をするんだ、${extractName}!!`)
}

main()
