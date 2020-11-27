const Base = require("./base")

module.exports = class Yamaguchi extends Base {
  get _commandWriteText() {
    return `
    名前を

    教えてもらえますか

    早く

    まだ？
    `.replace(/ /g, "")
  }

  get _targetNameErrorText() {
    return `
    いやお前…

    常識的に考えて

    名前は2文字以上だろ

    雑なんだよな

    仕事が、雑
    `.replace(/ /g, "")
  }

  get _impressionText() {
    return `「${this.targetName}」ってお前ww

    マジかww

    クソみたいな名前だなwwww
    `.replace(/ /g, "")
  }

  get _resultNameText() {
    // 入力された名前が必ず2文字以上という前提があるので。
    const reExtractName = this.extractIndex === 0 ? this.targetName[1] : this.targetName[this.extractIndex - 1]

    return `そしたらそうだなぁ

    お前の名前は「${this.extractName}」にしよう

    いや

    ちょっとまって

    やっぱりやめた

    「${reExtractName}」にしよう

    うん、「${reExtractName}」でよろしく
    `.replace(/ /g, "")
  }
}
