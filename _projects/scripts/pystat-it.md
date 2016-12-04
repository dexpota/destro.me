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
    "type": "object",
    "properties": {
        "hashcode": {
          "description": "last commit hash",
          "type": "string"
        },
        "repository": {
          "description": "repository url",
          "type": "string"
        },
        "statistics": {
          "type": "array"
          "items": {
            "anyOf": [
                { "$ref": "#/definitions/C++" },
                { "$ref": "#/definitions/C" },
                { "$ref": "#/definitions/Python" },
                { "$ref": "#/definitions/Java" }
            ]
          }
        }
    }
  },
  "definitions": {
    "C++": {},
    "C": {},
    "Python": {},
    "Java": {}
  }
}
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
