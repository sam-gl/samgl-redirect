# samgl-redirect

A super simple HTTP redirect service.

### Running the application

This app has been designed for nodejs v18.16.0 but will likely work with nearby versions.

Install the dependencies normally with `npm install`.

Run locally with `npm run start` and run in production (which uses pm2) with `npm run start:prod`.

### How to add/change redirects

Specify demo redirects (i.e. URLs which show a demo of a product) in the demoRedirects const. The key of each item is used in the URL to redirect to the value if the URL contains the query string "demo". For example:

```js
const demoRedirects = {
  'sonicboom': 'https://demo.sam.gl/sonicboom',
  'hermes': 'https://hermes.example.com'
};
```

- `/?demo=sonicboom` redirects to `https://demo.sam.gl/sonicboom`
- `/?demo=hermes` redirects to `https://hermes.example.com`

The same can be done for code redirects (i.e. URLs which contain the source code of a product.) For example: 

```js
const codeRedirects = {
  'sonicboom': 'https://github.com/sam-gl/sonicboom',
  'hermes': 'https://github.com/sam-gl/hermes-react'
};
```

- `/?code=sonicboom` redirects to `https://github.com/sam-gl/sonicboom`
- `/?code=hermes` redirects to `https://github.com/sam-gl/hermes-react`