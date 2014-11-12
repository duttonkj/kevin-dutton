# kevindutton.com

New portfolio site using webpack & react

## Development server

``` text
npm run dev-server
http://localhost:2992/
```

The configuration is `webpack-dev-server.config.js`.

Static HTML is served from `config/dev-server-public`.

It automatically recompiles and refreshes the page when files are changed.


## Hot Module Replacement development server

``` text
npm run hot-dev-server
http://localhost:2992/
```

The configuration is `webpack-hot-dev-server.config.js`.

Static HTML is served from `config/dev-server-public`.

It automatically recompiles when files are changed. When a hot-replacement-enabled file is changed (i. e. stylesheets or React components) the module is hot-replaced. If Hot Replacement is not possible the page is refreshed.

Hot Module Replacement has a performance impact on compilation.


## Production compilation and server

``` text
npm run build
npm start
http://localhost:8080/
```

The configuration is `webpack-production.config.js`.

The server is at `lib/server.js`

The production setting builds two configurations: one for the client (`build/public`) and one for the serverside prerendering (`build/prerender`).

> WIP: Serverside data fetching and embedding data into served HTML.
