.PHONY: build serve

build:
	docker buildx build --output type=local,dest=_site .

serve:
	docker buildx build --load --target development --tag destro.me:dev .
	docker run --rm \
		--publish 4000:4000 \
		--publish 35729:35729 \
		--volume "$(CURDIR):/site" \
		destro.me:dev
