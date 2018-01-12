module.exports = {
  'step one' : function (browser) {
    browser
      .url('https://www.dominos.com/')
      //.waitForElementVisible('body', 1000)
    //  .setValue('input[type=text]', 'nightwatch')
       .waitforElementVisible(button'class=card--overlay__closejs-closeButton]')
       .click(button'class=card--overlay__close js-closeButton]')
       .waitForElementVisible('class(btn btn--carryout js-carryout]', 1000)
       .click('button[class(btn btn--carryout js-carryout]')
  },

  'step two' : function (browser) {
    browser
      //click Search Locations button
	  .click('button([name=btn btn--large js-search-cta c-locationsearch-search-cta]')
      
      .pause(1000)
      .assert.name('City')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'Arlington')
      
      //dropdown to select VA
      .click('select[id="Region"] option[value="VA"]')
      
      //Zip code
      .assert.name('Postal_Code')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', '22203')
      
//Search button
      .click('button([name=btn btn--large js-search-cta c-locationsearch-search-cta]')
      
//select location, possibly won't run depending on delivery script running first -needs testing to decide to clear data
      
//select location
	 // .waitforElementVisible(button'data-quid=S_MX]')
	  //.click(button'data-quid=S_MX]')

  },
  
  'step three': function (browser) {
  	  .pause(1000)
  	  //click Pizza tab
	  .click('button[name=navigation-AllPizzas]')
	  .waitforElementVisible(button'data-quid=S_MX]')
	  .click('button([data-quid=S_MX]')


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

//confirm totals
	  .assert.value('$18.69')
	  .end();

  
};
}