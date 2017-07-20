var fs = require("fs")

try {
  fs.linkSync("node_modules/", 'UI/node_modules', "dir")
} catch (ex) {
  console.log(ex || "done")
}
