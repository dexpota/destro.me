---
layout: posts
lang: it
published: false
ref: bulge-to-arc
title: Conversione di una polyline curva in un arco
description: In questo articolo vedremo come convertire una polyline curva in un arco.
---

# {{ page.title }}

Una delle funzionalità del mio progetto **fabtools** è quella di poter visualizzare
un file vettoriale (**dxf**) all'interno di una semplice finestra. Per ora il
progetto prevede la sola visualizzazione del file senza possibilità di interagire in
alcun modo (zoom, pan, ...). Data che non è necessario interagire con il disegno
ho deciso di utilizzare la libreria **matplotlib** per il rendering.

Un file **dxf** è costituito da una serie di **entità**. Per la lettura del file
ho utilizzato la libreria **ezdxf**, questa liberia consente di iterare facilmente
tra le entità del file. Una tra le prime in cui mi sono imbattuto è la **LWPOLYLINE**,
questa è costituita da due punti, un valore di spessore iniziale, uno finale e il *bulge*.
Questo valore indica che in realtà tra i punti p0 e p1 non è presente una retta ma bensì
un'arco.

Prima di poter disegnare una polyline in cui il valore di bulge non è 0 bisogna
calcolare l'arco che passa per i due punti, dato che matplotlib non permette di
disegnare un arco con un bulge.
