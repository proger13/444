const  TelegramBot  =  require ( 'node-telegram-bot-api' ) ;
const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');


const token = '5542460569:AAHXfmOs3hsKbwR5ZyRjwfEQBJOay-2J-TQ'

const  bot  =  new  TelegramBot ( token ,  { polling : true } ) ;


  const asdfg = async () => {
    const chatId = 505344184;
    let driver = new Builder()
    

    .forBrowser(Browser.CHROME)
    .setChromeOptions(new chrome.Options().addArguments('--headless'))
    .build();
    
    await driver.get('https://www.google.com/search?q=%D0%BA%D1%83%D1%80%D1%81+%D0%B4%D0%BE%D0%BB%D0%BB%D0%B0%D1%80%D0%B0+%D0%BA+%D1%80%D1%83%D0%B1%D0%BB%D1%8E+&newwindow=1&sxsrf=ALiCzsY543bfT8TEbKLsQlwhYsztUVCQEA%3A1666206923019&ei=y0xQY_5mr7fFzw-r_YboCQ&ved=0ahUKEwi--JK-gO36AhWvW_EDHau-AZ0Q4dUDCA8&uact=5&oq=%D0%BA%D1%83%D1%80%D1%81+%D0%B4%D0%BE%D0%BB%D0%BB%D0%B0%D1%80%D0%B0+%D0%BA+%D1%80%D1%83%D0%B1%D0%BB%D1%8E+&gs_lcp=Cgdnd3Mtd2l6EAMyCggAEIAEEEYQggIyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjEOoCECc6BAgjECc6BAgAEEM6CQgjECcQRhCCAjoKCAAQgAQQhwIQFDoPCAAQgAQQhwIQFBBGEIICSgQIQRgASgQIRhgAUMgNWIBCYL9DaAFwAXgAgAHCAogBhSOSAQgwLjIuMTYuMpgBAKABAbABCsABAQ&sclient=gws-wiz');
    const kurs = await driver.findElement(By.css('#knowledge-currency__updatable-data-column div')).getText()
    driver.close()
    bot.sendMessage(chatId, kurs);
  }
  
  setInterval(asdfg, 1000*60*60)
asdfg()



