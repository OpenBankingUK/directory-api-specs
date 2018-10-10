Overview
===

This repository contains draft API specifications for the Open Banking Directory. These include:

* Directory API: The goal is to bring it into line with existing Open Banking standards, with a view to publishing it to external consumers.
* Notifications API: Based on WebSockets, with each event wrapped as a [Security Event Token](https://tools.ietf.org/html/rfc8417).

Viewing
===

To view this spec in a browser clone the project, cd into it then:

```bash
npm i
npm run dev
```

Your browser should open at http://localhost:3000.

:thumbsup:

Improvements
===

* [ ] Convert the rewrite-urls.js script to a Webpack plugin
