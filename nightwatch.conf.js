module.exports = {
  "src_folders" : ["test"],
  "output_folder" : "reports",
 // "custom_commands_path" : "",
  /"custom_assertions_path" : "",
 // "page_objects_path" : "",
 // "globals_path" : "",

  "selenium" : {
    "start_process" : true,
    "server_path" : "./Downloads/selenium-server-standalone-3.8.1.jar",
    "log_path" : "reports",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "./node_modules/chromedriver/bin/chromedriver",
      "webdriver.gecko.driver" : "./node_modules/geckodriver/bin/geckodriver",
      "webdriver.edge.driver" : ""
    }
  },

  "test_settings" : {
    "default" : {
      "launch_url" : "http://localhost",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      "desiredCapabilities": {
        "browserName": 'chrome',
        "marionette": true
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },

    "chrome" : {
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    },

    "edge" : {
      "desiredCapabilities": {
        "browserName": "MicrosoftEdge"
      }
    }
  }
}