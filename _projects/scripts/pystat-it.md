---
layout: posts
description: uno script in python per generare statistiche di pacchetti software.
published: true
ready: true
lang: it
title: pystat.py
ref: pystat.py
---

[top]: #

# {{ page.title }} <small>| {{ page.description }}</small>
{:.class1}
{:.no_toc}

{% include link_github.html buttons="watch star fork" user="dexpota" repository="type-do-get" watch_count=true %}

Questo script permette di calcolare le statistiche di un pacchetto applicativo,
e di ciascun modulo presente. Lo script è pensato per leggere in ingresso una
lista di *repository* **git** e per ciascuno di essi calcolarne le statistiche.

* TOC
{:toc}

## Scarica

## Cose da fare

- aggiungere i filtri sui file nel conteggio delle righe
- aggiungere la capacità di determinare da quali moduli uno script python dipende

[ritorna][top]

## Linguaggi & statistiche

I linguaggi supportati fin'ora sono: Python, C/C++, Java, CMake; ma loo script è
pensato per essere facilmente estendibile. Infatti in teoria è già possibile
calcolare per ogni file testuale il numero di righe. Di seguito sono riportati
i linguaggi con le statistiche supportate.

- Python
  - lista dei moduli dal quale il progetto dipende (python)
  - i moduli sono presi dal repository PyPi (https://pypi.python.org/pypi)
- C/C++
  - numero di linee per file
  - numero totale di linee

[ritorna][top]

## Esempi di utilizzo

[ritorna][top]

## Formato
{% gist 5ef2064b4bc4c09b77811e06cfebd0ff %}
[ritorna][top]
