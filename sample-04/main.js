const argv = require("minimist")(process.argv.slice(2))
const processFactory = require("./factory")

processFactory.getNewInstance(argv.m).execute()
