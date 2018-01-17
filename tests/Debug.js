module.exports = {
    '@tags': ['debug'],
  
    'debug standalone selenium': function(browser) {
      
      browser
        .url('https://google.com');
    },
  
    afterEach: function(browser, done) {
      browser
        .end();
      done();
    }
  
  };