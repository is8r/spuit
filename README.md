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

```/Gemfile
gem 'spuit'
gem 'foreman'
```

```/app/assets/javascripts/packs/application.scss
@import "~spuit";
```

```Procfile
web: bundle exec rails s
webpacker: ./bin/webpack-dev-server
```

```
$ yarn add spuit
$ foreman start
```

---

## development

publish:

```
$ rake release & npm publish
```
