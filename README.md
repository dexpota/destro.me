# destro.me

[![Deploy site to GitHub Pages](https://github.com/dexpota/destro.me/actions/workflows/pages.yml/badge.svg)](https://github.com/dexpota/destro.me/actions/workflows/pages.yml)

## Installation and Usage

`gem install bundler jekyll`

`bundle install`
`bundle exec jekyll serve`

## Details

### Folder Structure

- *_data*: all files in this folder with the `.yml`, `.yaml`, `.json`, `.csv`,
  or `.tsv` extension are loaded and available through `site.data`;

### Layout Structure

- `default.html` is the layout that defines the skeleton of each page and is
  composed of `head.html`, `header.html`, and `footer.html`.

### Plugins

- `link_github.html`
  - `<buttons>` can contain one or more of the following values: follow, watch, star, fork, issues, download;
  - `<user>`: repository owner;
  - `<repository>`: repository name;
  - `<[follow|watch|star|fork|issues]_count>`: include the count;
  - `<[follow|watch|star|fork|issues|download]_large>`: use the large icon version;

```liquid
{% include link_github.html
	buttons="watch star fork"
	user="dexpota"
	repository="type-do-get"
	watch_count=true
%}
```

### YAML Variables

Each post or page defines the following variables.

* `lang` specifies the language of the post or page; the two supported values
  are `it` and `en`.
* `ref` is a unique reference for the post or page, used to manage multiple
  language versions of the same page.

## Deploy

This site is published on **GitHub Pages** with automatic deployment from
GitHub Actions.

1. Set the repository `Pages` source to `GitHub Actions`.
2. Point the `destro.me` domain to the site published on GitHub Pages.
3. If you use Cloudflare, verify the DNS record points to the GitHub Pages
   target configured in the repository, then enable the proxy if desired.
