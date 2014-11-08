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


1.  .gitignoreに下記を追加

	```
	/app/assets/stylesheets/vendor/spuit/.git/
	/app/assets/stylesheets/vendor/spuit/.gitignore
	```
2.  リポジトリをクローン

	```
	$ cd /app/assets/stylesheets/vendor/spuit
	$ git clone git@github.com:is8r/spuit.git
	```
3.	Edit: /app/assets/stylesheets/application.css.scss
	
	```
	@import 'styles.sass';
	```
4.	4.it: /app/assets/stylesheets/styles.sass
	
	```
	@import "vendor/spuit/addons/reset"
	@import "vendor/spuit/all"
	```
	
	