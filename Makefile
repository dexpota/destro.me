.PHONY: build

build:
	docker buildx build --output type=local,dest=_site .
