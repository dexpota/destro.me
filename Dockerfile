FROM ruby:3.3-slim AS build

WORKDIR /site

RUN apt-get update \
    && apt-get install --no-install-recommends -y build-essential \
    && rm -rf /var/lib/apt/lists/*

RUN gem install bundler --version 2.4.12

COPY Gemfile ./
RUN bundle install --jobs 4 --retry 3

COPY . ./
RUN bundle exec jekyll build --destination /out

FROM scratch AS artifact
COPY --from=build /out /
