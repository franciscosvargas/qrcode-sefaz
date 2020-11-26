
const puppeteer = require('puppeteer');

const FetchData = async (url) => {

  try {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto(url);

    page.click('button[name="j_id_19:j_id_1g"]')
    await page.waitForFunction('document.getElementById("j_id_19:j_id_3y:j_id_41")')
    
    const result = await page.evaluate(() => {
      const result = {}

      result.cnpj = document.getElementById('j_id_19:j_id_3y:cnpj').textContent
      result.value = document.getElementById('j_id_19:j_id_3y:valor').textContent
      result.cpf = document.getElementById('j_id_19:j_id_3y:cpf').textContent
      result.date = document.getElementById('j_id_19:j_id_3y:data_emissao').textContent

      return result
    })

    browser.close()

    return { status: true, data: result}
  } catch (error) {
    return { status: false, error: error.message || error}
  }
}

module.exports = FetchData