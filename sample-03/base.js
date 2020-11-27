const io = require("../utils/io")

module.exports = class Base {
  async execute() {
    io.write(this._commandWriteText)
    this.targetName = await io.read()

    this.#checkTargetName()

    io.write(this._impressionText)

    this.extractIndex = Math.floor(Math.random() * this.targetName.length)
    this.extractName = this.targetName[this.extractIndex]
    io.write(this._resultNameText)
  }

  #checkTargetName() {
    if (this.targetName.length < 2) throw new Error(this._targetNameErrorText)
  }
}
