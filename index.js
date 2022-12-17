const  TelegramBot  =  require ( 'node-telegram-bot-api' ) ;
const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');


const token = '5542460569:AAHXfmOs3hsKbwR5ZyRjwfEQBJOay-2J-TQ'

const  bot  =  new  TelegramBot ( token ,  { polling : true } ) ;


  const asdfg = async () => {
    const chatId = 505344184;

    const options = new chrome.Options()

    let driver = new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeOptions(options)
    .build();
    
    await driver.get('https://www.finam.ru/quote/mosbirzha-valyutnyj-rynok/usdrubtod-usd-rub/');
    const kursusd = await driver.findElement(By.css('#finfin-local-plugin-quote-item-review-price-container')).getText()
    bot.sendMessage(chatId, 'USD: ' + kursusd);

    await driver.get('https://www.finam.ru/quote/mosbirzha-valyutnyj-rynok/eurrubtod-eur-rub/');
    const kurseur = await driver.findElement(By.css('#finfin-local-plugin-quote-item-review-price-container')).getText()
    bot.sendMessage(chatId, 'EURO: ' + kurseur);

    // await driver.get('https://www.bybit.com/fiat/trade/express/home');
    // await driver.findElement(By.css('#express__select-wrap .by-popover__el')).click()
    // await driver.findElement(By.css('.express-center-select__search-input .by-input__inner')).sendKeys('RUB')
    // await driver.findElement(By.css('.express-center-select__list-wrapper')).click()
    // const kursbybit = await driver.findElement(By.css('.express-create-modal__transfer-icon')).getText()
    // console.log(kursbybit);
    driver.close()
  }
  
  setInterval(asdfg, 2000*60*60)
asdfg()



