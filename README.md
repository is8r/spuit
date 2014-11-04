Spuit
==============

A Sass Mixin Library from is8r to is8r

## Gulp(作成中)

spuit自体はこれでアップデートしていく予定。

```
$ git clone git@github.com:is8r/spuit-gulp-template.git
```

## Rails

gemにはしないけどGit submoduleかpublic以下にgulpで書出して使う。
scaffoldとかした時にviewを.scaffoldで囲うだけでそこそこ見栄えを整えてくれる機能も。

1.  ```$ cd /app/assets/stylesheets/vendor/spuit```
2.  ```$ git clone git@github.com:is8r/spuit.git```
3.	Edit: /app/assets/stylesheets/application.scss
	
	```
	@import 'styles.sass';
	```
	
4.	Edit: /app/assets/stylesheets/styles.sass
	
	```
	@import "vendor/spuit/addons/reset"
	@import "vendor/spuit/all"
	```
	