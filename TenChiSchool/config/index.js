/**
 * Created by Максим on 03.06.2016.
 */
var nconf = require("nconf");
var path = require("path");

nconf.argv()
    .env()
    .file({ file: path.join(__dirname, 'config.json') });

module.exports = nconf;