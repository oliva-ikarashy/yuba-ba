const Base = require("./base")

module.exports = class Standard extends Base {
  get _commandWriteText() {
    return "契約書だよ。そこに名前を書きな。"
  }

  get _targetNameErrorText() {
    return "名前は2文字以上で書きな!!"
  }

  get _impressionText() {
    return `ふん。${this.targetName}というのかい。贅沢な名前だねぇ。`
  }

  get _resultNameText() {
    return `今からお前の名前は${this.extractName}だ。いいかい、${this.extractName}だよ。分かったら返事をするんだ、${this.extractName}!!`
  }
}
