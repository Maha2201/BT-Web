import { Then} from '@cucumber/cucumber';

When('I log in with valid credentials', async () => {
    await browser.maximizeWindow();
    console.log('***** Maximized window');
    await browser.pause(3000);

	await $("div[id='nav-signin-tooltip'] span[class='nav-action-inner']").click();
	
    await $('//*[@name="email"]').setValue('maha1985@gmail.com');
    await browser.pause(3000);
   await $("input[type='submit']").click();
   await browser.pause(3000);
   await $('//*[@name="password"]').setValue('testing123');
   await browser.pause(3000);

   await $('//*[@id="signInSubmit"]').click();
   await browser.pause(3000);
   console.log('***** Clicked on Sign in button');

});

When('I search for the deals {string}', async (deals) => {
    await $('#twotabsearchtextbox').setValue(deals);
    browser.pause(3000);
    console.log("***** Entered product:",deals, " in search box");
    await $('//*[@id="nav-search-submit-button"]').click();
    browser.pause(3000);
    console.log("***** Searched for  :",deals);
});


Then('I add the first deal to the cart and do checkout', async () => {
    
    await $('//button[@id="a-autoid-1-announce"]').click();
    browser.pause(3000);

    await $("input[value='Proceed to checkout']").click();
    browser.pause(3000);

    await $("input[aria-labelledby='orderSummaryPrimaryActionBtn-announce']").click();   
    browser.pause(3000);
 
});
