## How to Use

インストール:

```
$ hugo new site xxx && cd xxx
$ git submodule add git@github.com:is8r/hugo-bootstrap.git themes/hugo-bootstrap
```

config.tomlの例:

```
baseURL = "http://example.org/"
languageCode = "ja"
title = "Test"
theme = "hugo-bootstrap"
copyright = "copyright"

[params]
description = "description"
keywords = "keywords"
googleAnalyticsId = ""
fbAppId = ""

[permalinks]
post = "/:year/:month/:title/"

[taxonomies]
tag = "tags"
category = "categories"
```

あと、packege.jsonに追加しておくと便利:

```
{
  "scripts": {
    "hugo": "open http://localhost:1313/ && hugo server -D --watch",
    "dev": "cd ./themes/hugo-bootstrap && npm install && npm run dev"
  }
}
```

サイト内検索 `HugoSearch.js` を使用するには `.json` ファイルが必要なので、json書き出し用に `/content/search.adoc` として下記の内容が記載されたファイルを追加する必要があります:

```
---
date: "2018-01-01"
type: "json"
url: "search.json"
---
```

# webpack4

watch:

```
$ npm run dev
```

build:

```
$ npm run build
```
