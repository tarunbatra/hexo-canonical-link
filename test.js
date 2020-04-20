const test = require('ava');

let testFunc;

global.hexo = {
    extend: {
        helper: {
            register: (_, f) => {
                testFunc = f
            }
        }
    }
};
require('./index');

let config;
let page;
 test.beforeEach(() => {
    config = { url: 'https://base-url.com' };
    page = { canonical_path: 'canonical/PATH/' };
 });

test('Canonical url is set properly if the page has a canonical_url property', t => {
    page.canonical_url = 'https://canonical.com/URL/';
    t.is(testFunc(config, page), '<link rel="canonical" href="https://canonical.com/URL/"/>');
});

test('Canonical url is set to base_url appended with canonical_path if no canonical_url is provided', t => {
    console.log(config, page);
    t.is(testFunc(config, page), '<link rel="canonical" href="https://base-url.com/canonical/PATH/"/>');
});

test('Canonical url is tolerant of trailing slash in config.url', t => {
    config.url += '/';
    t.is(testFunc(config, page), '<link rel="canonical" href="https://base-url.com/canonical/PATH/"/>');
});