---
layout: posts
description: uno script in python che permette di calcolare le statistiche di una lista di repository.
published: true
ready: true
lang: it
title: pystat.py
ref: pystat.py
---

# {{ page.title }}
{:.class1}
{:.no_toc}
{{ page.description }}

## Formato

```json
{
  "type": "array",
  "items": {
    "type": "object"
  }
}

[
  "hashcode": "d19ce07cc1653a0029f4c6926d5159b0bbc6a628",
  "repository": "git@github.com:dexpota/type-do-get.git",
  "statistics": {

  }
]
```

## Roadmap

- aggiungere i filtri sui file nel conteggio delle righe
- aggiungere la capacità di determinare da quali moduli uno script python dipende

## Linguaggi

- python
- C/C++

## Statistiche <small style="color: #777;" style="margin-top: 0;"> | <a href="#{{title_ref}}"> ritorna </a></small>

- numero totale di linee
- numero di linee per file
- numero totale di file
- lista dei moduli dal quale il progetto dipende (python)
  - i moduli sono presi dal repository PyPi (https://pypi.python.org/pypi)

## Esempi di utilizzo <small style="color: #777;" style="margin-top: 0;"> | <a href="#{{title_ref}}"> ritorna </a></small>
