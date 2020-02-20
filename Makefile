# hotwo:
# $ make up

up:
	cd site;\
	open http://localhost:1313 \
	&& hugo server -D --watch

dev:
	cd site/themes/spuit;\
	yarn install \
	&& yarn run dev
