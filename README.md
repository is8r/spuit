Spuit
==============

A Sass Mixin Library from is8r to is8r


## npm

install:

```
$ npm install spuit
```

import:

``` styles.scss
@import "node_modules/spuit/spuit";
```

## rails

install:

```
$ rails new app_name --webpack
```

Gemfile

```
gem 'spuit'
gem 'foreman'
```

app/javascripts/packs/application.scss

```
@import "~spuit";
```

Procfile

```
web: bundle exec rails s
webpacker: ./bin/webpack-dev-server
```

app/views/layouts/application.html.erb

```
<%= stylesheet_pack_tag 'application' %>
```

```
$ bundle install
$ yarn add spuit
$ foreman start
$ open http://localhost:5000/
```

---

For Development

## local server

```
$ yarn install
$ yarn run dev
```

## deploy

```
$ yarn run deploy
```