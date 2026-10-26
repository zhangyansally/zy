import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'

const page = readFileSync(new URL('../src/pages/login/index.vue', import.meta.url), 'utf8')

assert.match(page, /天团1号/, 'renders the brand title')
assert.match(page, /运动正品 · 现货秒发 · 省钱省心/, 'renders the brand tagline')
assert.match(page, /本机号码一键登录/, 'renders the primary one-tap login button')
assert.match(page, /我已阅读并同意/, 'renders the agreement text')
assert.match(page, /用户协议/, 'renders the user agreement link text')
assert.match(page, /隐私政策/, 'renders the privacy policy link text')
assert.match(page, /遇到问题？请联系客服/, 'renders the customer service entry')
assert.match(page, /\.login-content\s*\{[\s\S]*?padding:\s*102rpx 34rpx 0;/, 'aligns one-tap login content with the phone login primary button')
assert.match(page, /\.service-entry,\s*\.phone-service-row\s*\{[\s\S]*?position:\s*absolute;[\s\S]*?bottom:\s*calc\(72rpx \+ env\(safe-area-inset-bottom\)\);/, 'pins both customer service entries to the page bottom')
assert.match(page, /f0fb44032cdf4a3bbd340892db8977d0_mergeImage\.png/, 'uses the exported high-fidelity hero artwork')
assert.match(page, /SketchPngec6659883916a0c21d80a83238361b1399fe8238a52e502e78983a6fc68d4ffa/, 'uses the exported brand logo artwork')
assert.doesNotMatch(page, /status-time|status-signal|status-wifi|status-battery/, 'does not draw the system status bar')
assert.doesNotMatch(page, /SketchPng4f6aec4d7d2ea8c80efed03f056e18255f7ec373803953e0e83bd0ae89fa06ce/, 'does not draw the system menu capsule')
assert.match(page, /toggleAgreement/, 'exposes agreement toggle behavior')
assert.match(page, /handleLogin/, 'exposes login click behavior')
assert.doesNotMatch(page, /AppLogos|InputEntry|AppFooter/, 'removes the starter template components')
