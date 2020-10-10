import 'testcafe';
import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `https://www.amazon.co.jp/dp/B011UEHYWQ/ref=dsvrt_myd_asin_block`;

test('My first test', async t => {
    await t
	.click('#add-to-cart-button')
	.wait(5000)
});