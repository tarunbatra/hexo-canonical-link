hexo.extend.helper.register('canonicalLink', (page) => `<link rel="canonical" href="${page.canonical_url.replace('index.html', '').toLowerCase()} + "/>`);