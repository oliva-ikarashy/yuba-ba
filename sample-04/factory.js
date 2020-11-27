const fs = require("fs")

class Factory {
  constructor() {
    // ファイルロードエラーやJSONパースエラーのハンドリング処理は省略。
    const settings = JSON.parse(fs.readFileSync(`${__dirname}/DI.json`))

    // {tom: Yamaguchi, ...}構造のデータを作成する。
    // この処理の前に、必須要素が存在することをチェックをすべきだが、やはり省略。
    this.settings = {}
    settings.forEach(setting => {
      // クラスロードエラーのハンドリングもやはり省略。
      if (setting.command) {
        this.settings[setting.command] = require(setting.source)
      } else if (setting.default) {
        this.settings.default = require(setting.source)
      }
    })
  }

  getNewInstance(command) {
    const targetClass = this.settings[command]
    return targetClass ? new targetClass() : new this.settings.default()
  }
}

// 外部から扱えるのはファクトリーのシングルトンインスタンスのみでOK。
module.exports = new Factory()
