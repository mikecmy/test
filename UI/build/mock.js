const fs = require('fs');
const apimocker = require('apimocker')
const path = require('path')
const chokidar = require('chokidar')
console.log(path.resolve('../Configurations/mock.js'))
console.log(process.cwd())
const mock_setting = require('../../Configurations/mock.js')

// const forever = require('forever')

const MOCK_FILE_CONFIG_NAME = path.resolve("temp/generated_mock_config.json")
const MOCK_FILE_DIR = path.resolve("mock/")

fs.writeFileSync(path.resolve("temp/generated_mock_confiag.json"), JSON.stringify(mock_setting))

function generate_mock_file() {
  try {
    let dirs = fs.readdirSync(MOCK_FILE_DIR)
    dirs.forEach((dir) => {
      let file_name = path.join(MOCK_FILE_DIR, dir)
      let file_stat = fs.statSync(file_name)
      if (file_stat.isFile()) {
        let res = fs.readFileSync(file_name)
        let temp = JSON.parse(res)
        for (var key in temp) {
          mock_setting.webServices[key] = temp[key]
        }
        fs.writeFileSync(MOCK_FILE_CONFIG_NAME, JSON.stringify(mock_setting))
      }
    })
  } catch (err) {
    console.log(err)
  }
}




generate_mock_file()

const server = apimocker.createServer();
server.setConfigFile(MOCK_FILE_CONFIG_NAME)

process.on('SIGINT', () => {
  watcher.close();
  server.stop();
})

// nodemon({
//   "watch": [
//     path.resolve("../configurations/mock.js"),
//     path.resolve("../mock/*.json")
//   ],
//   'debug': true
// })
// nodemon.on('start', function () {
//   console.log("------------- nodemon start -------------")
// }).on('crash', function () {
//   console.log("------------- nodemon crash -------------")
//   server.setConfigFile(MOCK_FILE_CONFIG_NAME)
//   server.stop();
// }).on('restart', function (files) {
//   console.log("------------- nodemon restart -------------")
//   server.start()
// });
//
// nodemon.emit('start')

var watcher = chokidar.watch(path.resolve("./mock/"), {
  persistent: true
});
watcher.add(path.resolve("./../Configurations/mock.js"))
watcher
  .on('ready', () => {
    server.start()
    console.log("==============   watching files below   ==============")
    console.log(watcher.getWatched())
    console.log("==============   start watching   ==============")
  })
  .on('raw', (event, path, details) => {
    console.log('Raw event info:', event, path, details);
    if (event === 'modified') {
      console.log("mock files changed, apimocker restarting")
      server.setConfigFile(MOCK_FILE_CONFIG_NAME)
      server.stop();
      server.start()
    }
  })
  .on('error', error => {
    watcher.close();
    server.stop();
  })
