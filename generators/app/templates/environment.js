// Check for a .env file specific to this environment, otherwise attempt to load the default
var fs = require('fs');

var current_env = process.env.NODE_ENV || 'development'
var current_env_file = ".env." + current_env.toLowerCase();
var env_file = fs.existsSync(current_env_file) ? current_env_file : '.env'

console.log("Loading environment variables from: " + env_file);

require("dotenv").load({path: __dirname + '/' + env_file});
