module.exports = {
  'step one' : function (browser) {
    browser
      .url('https://www.dominos.com/')
      //.waitForElementVisible('body', 1000)
    //  .setValue('input[type=text]', 'nightwatch')
       .waitforElementVisible(button'class=card--overlay__closejs-closeButton]')
       .click(button'class=card--overlay__close js-closeButton]')
      .waitForElementVisible('button[class=class btn btn--delivery js-delivery]', 1000)
      .click('button[class=class btn btn--delivery js-delivery]')
  },

  'step two' : function (browser) {
    browser
      .click('button[class=btn btn--delivery js-delivery]')
      
      .pause(1000)
      //text fields for Street and City
      .assert.name('Street')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', '901 n nelson st.')
      .assert.name('City')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'Arlington')
      //dropdown to select VA
      .click('select[id="Region"] option[value="VA"]')
      //Zip code
      .assert.name('Postal_Code')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', '22203')
      .click('button[class= btn btn--large js-search-cta c-locationsearch-search-cta]')

  },
  
  'step three': function (browser) {
  	  .pause(1000)
  	  //click Pizza tab
	  .click('button([name=navigation-AllPizzas]')
	  .waitforElementVisible(button'data-quid=S_MX]')
	  .click(button'data-quid=S_MX]')


//No Add To Order Now button
 	  .waitforElementVisible(button'class=btn btn--large js-isNew]')
	  .click(button'class=btn btn--large js-isNew]')


//Check Out button
	  .waitforElementVisible(button'class=btn btn--large btn--checkout js-buttonCheckout qa-AllChek c-order-buttonCheckout]')
 	  .click(button'class=btn btn--large btn--checkout js-buttonCheckout qa-AllChek c-order-buttonCheckout]')


//x out of pop up*****
	  .waitforElementVisible(button'class=card--overlay__closejs-closeButton]')
	  .click(button'class=card--overlay__close js-closeButton]')


//Continue Checkout button
	  .waitforElementVisible(button'btn btn--large btn--block submitButton qa-OrCheck js-continueCheckout c-order-continueCheckout]')
	  .click(button'class=btn btn--large btn--block submitButton qa-OrCheck js-continueCheckout c-order-continueCheckout]')

//confirm total
	  .assert.value('$21.68')
	  .end();

  
};
}