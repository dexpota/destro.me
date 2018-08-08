## Installazione e utilizzo

`gem install bundler jekyll`

`bundle install`
`bundle exec jekyll serve`

## Dettagli

### Organizzazione delle cartelle

- *_data*: tutti i file con estensione `.yml`, `.yaml`, `.json`, `.csv` o
  `.tsv` sono caricati e disponibili attraverso la variable `site.data`;

### Variabili YAML

Ogni post o pagine del sito web definisce le seguenti variabili.

* `lang` specifica la lingua del post o della pagina, i due valori utilizzati 
sono `it` e `en`.
* `ref` è un riferimento univoco al post o alla pagina, viene utilizzato nella 
gestione di più versioni in diverse lingue della stessa pagina.
