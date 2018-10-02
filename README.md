Overview
===

This is boilerplate project for running Swagger UI with Webpack. It exists because:

* I wanted an easy way of slamming an API specification into a Swagger UI project
* Using NPM/Webpack means my dependencies can be kept up-to-date easily
* I like it

There's also a Redoc page - although this is CDN-based as I am lazy.

Usage
===

To use this project clone and cd into it then:

```bash
npm i
cp [your Swagger/OpenAPI spec as YAML] src/specs/swagger.yaml
npm run dev
```

:thumbsup:

Improvements
===

- [ ] Parameterise API specification document name

