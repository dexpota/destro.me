# destro.me

[![Deploy site to GitHub Pages](https://github.com/dexpota/destro.me/actions/workflows/pages.yml/badge.svg)](https://github.com/dexpota/destro.me/actions/workflows/pages.yml)

## Installazione e utilizzo

`gem install bundler jekyll`

`bundle install`
`bundle exec jekyll serve`

## Dettagli

### Organizzazione delle cartelle

- *_data*: tutti i file in questa cartella con estensione `.yml`, `.yaml`,
  `.json`, `.csv` o `.tsv` sono caricati e disponibili attraverso la variable
`site.data`;

### Organizzazione layout.

- `default.html` questo è il layout che definisce lo scheletro di ogni pagina,
  si compone dei file `head.html`, `header.html` e `footer.html`.

### Plugins

- `link_github.html`
	- `<buttons>` può contenere uno o più tra i seguenti valori: follow, watch, star, fork, issues, download;
	- `<user>`: utente del repository;
	- `<repository>`: nome del repository;
	- `<[follow|watch|star|fork|issues]_count>`: includi il numero di elementi;
	- `<[follow|watch|star|fork|issues|download]_large>`: utilizza la versione larga dell'icona;

```liquid
{% include link_github.html
	buttons="watch star fork"
	user="dexpota" dexpota
	repository="type-do-get"
	watch_count=true
%}
```

### Variabili YAML

Ogni post o pagine del sito web definisce le seguenti variabili.

* `lang` specifica la lingua del post o della pagina, i due valori utilizzati
sono `it` e `en`.
* `ref` è un riferimento univoco al post o alla pagina, viene utilizzato nella
gestione di più versioni in diverse lingue della stessa pagina.

## Deploy

Questo sito è pensato per essere pubblicato su **GitHub Pages** con deploy
automatico da GitHub Actions.

1. Imposta `Pages` nel repository su `GitHub Actions` come source.
2. Punta il dominio `destro.me` al sito pubblicato su GitHub Pages.
3. Se usi Cloudflare, lascia attivo il proxy come preferisci dopo aver verificato
   che il record DNS punti al target di GitHub Pages configurato nel repository.
