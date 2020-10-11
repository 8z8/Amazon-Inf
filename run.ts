import 'testcafe';
import { Selector, Role } from 'testcafe';
import * as Def from './def'

fixture `Runner`
    .page `https://www.amazon.co.jp/dp/B011UEHYWQ/ref=dsvrt_myd_asin_block`

const QuantitySelect = Selector('#quantity')
const QuantityOption = QuantitySelect.find('option')
const MailInput      = Selector('#ap_email')
const PasswdInput    = Selector('#ap_password')

const AmazonCoJpAccUser = Role('https://www.amazon.co.jp', async t => {
    await t
	.navigateTo('https://www.amazon.co.jp')
	.wait(50)
	.click('#nav-link-accountList')
	.wait(50)
        .typeText(MailInput, Def.mail)
	.expect(MailInput.value).eql(Def.mail)
	.wait(50)
	.click('#continue')
	.wait(50)
	.typeText(PasswdInput, Def.passwd)
	.wait(50)
	.expect(PasswdInput.value).eql(Def.passwd)
	.wait(50)
	.click('#signInSubmit')
	.wait(60000)
});

test('BuyBuy', async t => {
    await t
	.useRole(AmazonCoJpAccUser)
	while (true) {
	await t
	    .click(QuantitySelect)
	    .click(QuantityOption.withText('2'))
	    .expect(QuantitySelect.value).eql('2')
	    .wait(500)
	    .click('#add-to-cart-button')
	    .wait(500)
	    .click('#hlb-ptc-btn-native')
	    .wait(500)
	    .click('#address-book-entry-0 > div.ship-to-this-address.a-button.a-button-primary.a-button-span12.a-spacing-medium > span > a')
	    .wait(5000)
	    .click('#address-book-entry-0 > div.ship-to-this-address.a-button.a-button-primary.a-button-span12.a-spacing-medium > span > a')
	    .wait(500)
	    .click('#placeYourOrder > span > input')
	    .navigateTo('https://www.amazon.co.jp/dp/B011UEHYWQ/ref=dsvrt_myd_asin_block')
	    .wait(2000)
	}
});