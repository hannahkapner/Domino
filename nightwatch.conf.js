module.exports = {
  "src_folders" : ["tests"],
  "output_folder" : "reports",
 
  "selenium" : {
    "start_process" : true,
    "server_path" : "./node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.6.0.jar",
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
      "launch_url" : "https://www.dominos.com",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "output" : true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      }
    },
    "desiredCapabilities": {
      "name" : "gannett-assignment",
      "tag" : "hannah",
      "javascriptEnabled" : true,
      "acceptSslCerts" : true
    },
      "globals" : {
        "propertyData" : {
        "baseURL":"${SITE_NAME}"
      }, 
      "selenium" : { 
        "start_process" : false
      }
    },

    "local-chrome" : {
      "desiredCapabilities": {
        "name" : "local-chrome",
        "browserName" : "chrome"
      },
      
      "selenium" : {
        "start_process" : true
      }
    }
  }
};