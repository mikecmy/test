var http = require('http');
var fs = require('fs');

var sw2dts = require('sw2dts');

var project_config = require('./../../project.json');
var dts_address = "./" + project_config.type_def.output_file_name


http.get(project_config.type_def.swagger_def_url, (res) => {
    res.setEncoding('utf8');
    var body = ""
    res.on('data', function (chunk) {
        body += chunk;
    });
    res.on('end', function () {
        var swagger_data = JSON.parse(body)
        sw2dts.convert(swagger_data).then((dts) => {
            var file = fs.writeFile(dts_address, dts, (err) => {
                //return console.log(err);
            });
            console.log("dts已经处理完毕")
        }, (err) => {
            console.log(err)
        });
    })
})
