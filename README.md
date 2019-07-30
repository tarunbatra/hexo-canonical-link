# hexo-canonical-link
Hexo plugin to add canonical links for pages

## Installation
```sh
npm install --save hexo-canonical-link
```

## Usage in ejs

```ejs
<%- canonicalLink(config, page) %>
```

By default, the url of the page will be set as canonical link. To override this, provide `canonical_url` in the front matter of the page.

## License
MIT
