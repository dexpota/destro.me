---
layout: posts
description: uno script in python per analizzare le dipendenze di un modulo C/C++ e produrne una rappresentazione grafica.
published: true
ready: false
lang: it
ref: depy.py
---

# depy.py

## Esempio di utilizzo

```bash
python depy.py -i/usr/local/Cellar/qt/4.8.7/include/ /usr/local/Cellar/qt/4.8.7/include/QtGui/QApplication
```

[![qt4_qapplication](/assets/posts/depy/qt4_qapplication_thumbnail.png)](/assets/posts/depy/qt4_qapplication.png)

```bash
python depy.py -a -i/usr/local/Cellar/qt/4.8.7/include/ /usr/local/Cellar/qt/4.8.7/include/QtGui/QApplication
```

[![qt4_qapplication](/assets/posts/depy/qt4_qapplication_all_thumbnail.png)](/assets/posts/depy/qt4_qapplication_all.png)

```bash
python depy.py -a -l -i/usr/local/Cellar/qt/4.8.7/include/ /usr/local/Cellar/qt/4.8.7/include/QtGui/QApplication
```

[![qt4_qapplication](/assets/posts/depy/qt4_qapplication_legend.png)](/assets/posts/depy/qt4_qapplication_legend.png)
