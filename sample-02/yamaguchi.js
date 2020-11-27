const io = require("../utils/io")

module.exports = async() => {
  io.write(
    `名前を

    教えてもらえますか

    早く

    まだ？`.replace(/ /g, "")
  )
  const targetName = await io.read()

  if (targetName.length < 2) throw new Error(
    `いやお前…

    常識的に考えて

    名前は2文字以上だろ

    雑なんだよな

    仕事が、雑`.replace(/ /g, "")
  )

  io.write(
    `「${targetName}」ってお前ww

    マジかww

    クソみたいな名前だなwwww`.replace(/ /g, "")
  )

  const extractIndex = Math.floor(Math.random() * targetName.length)
  const extractName = targetName[extractIndex]
  const reExtractName = extractIndex === 0 ? targetName[1] : targetName[extractIndex - 1]

  io.write(
    `そしたらそうだなぁ

    お前の名前は「${extractName}」にしよう

    いや

    ちょっとまって

    やっぱりやめた

    「${reExtractName}」にしよう

    うん、「${reExtractName}」でよろしく`.replace(/ /g, "")
  )
}
