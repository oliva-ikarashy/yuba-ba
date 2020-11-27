const Base = require("./base")

module.exports = class Standard extends Base {
  get _commandWriteText() {
    return "あ、これ契約書なんで名前書いてもらえますか？。"
  }

  get _targetNameErrorText() {
    return "すんません、名前は2文字以上で書いてください。"
  }

  get _impressionText() {
    return `へぇー、${this.targetName}さんって言うんですねー。良い名前っすね。`
  }

  get _resultNameText() {
    return `でもちょっと長いんで${this.extractName}って呼びますね。`
  }
}
