var http = require('http');
var fs = require('fs');

var sw_to_flowtype = require('swagger-to-flowtype');

var project_config = require('./../../project.json');
var dts_address = "./" + project_config.type_def.output_file_name


http.get(project_config.type_def.swagger_def_url, (res) => {
  res.setEncoding('utf8');
  var body = ""
  res.on('data', function(chunk) {
    body += chunk;
  });
  res.on('end', function() {
    var swagger_data = JSON.parse(body)
    var generated_type = new sw_to_flowtype.FlowTypeGenerator(swagger_data).definitions()
    var file = fs.writeFile(dts_address, generated_type, (err) => {
      //return console.log(err);
    });
    console.log("flow_type已经处理完毕")
  })
})
