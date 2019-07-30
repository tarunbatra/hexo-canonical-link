'use strict';

hexo.extend.helper.register('canonicalLink', (config, page) => {
    let canonical_url = page.canonical_url;
    if (!canonical_url) {
        var base_url = config.url;
        if (config.url.charAt(config.url.length - 1) !== '/') base_url += '/';
        canonical_url = (page.canonical_url || base_url + page.canonical_path).replace('index.html', '').toLowerCase()
    }
    return `<link rel="canonical" href="${canonical_url}"/>`;
});