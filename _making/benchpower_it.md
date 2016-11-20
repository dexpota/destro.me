---
layout: posts
title: benchpower
description: un semplice alimentatore da banco per dare vita ai tuoi progetti elettronici.
preview: /assets/atx_case_preview.jpg
gallery:
  - /assets/atx_case_preview.jpg
  - /assets/atx_case_preview.jpg
  - /assets/atx_case_preview.jpg
  - /assets/atx_case_preview.jpg
  - /assets/atx_case_preview.jpg
tools:
  - dispositivo 1
  - dispositivo 2
  - dispositivo 3
  - laser cutter
materials:
  - materiale 1
  - materiale 2
  - materiale 3
ready: false
lang: it
ref: making_benchtop
slug: alimentatore_da_banco
---


# {{ page.title }}
{:.class1}
{:.no_toc}
{{ page.description }}

{% include link_github.html buttons="watch star fork" user="dexpota" repository="benchpower" watch_count=true %}

## {{site.t[page.lang].toc}}
{:.no_toc}
* TOC
{:toc}

{% assign title_ref = page.title | downcase | replace: ' ', '-' %}

## {{site.t[page.lang].license}}
{% include cc_license.html %}

## {{site.t[page.lang].making.tools}} e {{site.t[page.lang].making.materials}}
<small style="color: #777;" style="margin-top: 0;"> <a href="#{{title_ref}}"> ritorna </a> </small>

{% include build_list.html list=page.materials %}

Lorem ipsum dolor sit amet, ne ubique iudicabit voluptatibus eum, omnium prodesset at cum. No vim inani tacimates consectetuer. An has maiorum scaevola, an per labores assentior. Ea mea veri autem. Esse autem at nam, id modo malis iudico has.

## Tittolo 2
<small style="color: #777;" style="margin-top: 0;"> <a href="#{{title_ref}}"> ritorna </a> </small>

Eruditi feugait nostrum vis te, in quem civibus sea. Definiebas persequeris te vis, ut eam facete qualisque similique. No mei animal blandit, ex qui simul deterruisset. Vis cu ancillae indoctum partiendo, lorem luptatum ius id.

![alt text](/assets/atx_case_preview.jpg "Logo Title Text 1"){:class="center-block img-responsive"}

### Sottotitolo 1
<small style="color: #777;" style="margin-top: 0;"> <a href="#{{title_ref}}"> ritorna </a> </small>

Ea libris referrentur eam, putant meliore sed an, civibus inciderint delicatissimi mel ex. Ut sit feugait electram rationibus, et eam idque ullum, et vel labitur consequuntur. Id eum mazim vivendo corpora. Duo at mutat percipit, qui tantas definiebas ea, virtute epicurei pericula vel ad. Et has latine iuvaret, nam impetus civibus salutandi ei. Ut qui apeirian accusata eloquentiam, usu purto partem an, id stet fugit mel.

### Sottotitolo 2
<small style="color: #777;" style="margin-top: 0;"> <a href="#{{title_ref}}"> ritorna </a> </small>

Sea ea quodsi vivendo voluptua. Qui ferri aperiam utroque in, his ea eros principes, eam nobis laoreet petentium et. In sonet nobis eos, ex mea etiam offendit. Eleifend iracundia similique ad vim, vim error vocibus partiendo et.

Nibh accumsan gubergren at qui, blandit euripidis est ut. Nec ex audiam iisque expetendis, ius an legere liberavisse signiferumque. Mea illud iuvaret ex. Aeque vocent vituperata ea nec. An graece utamur usu.

## {{site.t[page.lang].making.gallery}}
<small style="color: #777;" style="margin-top: 0;"> <a href="#{{title_ref}}"> ritorna </a> </small>
{% include build_gallery.html gallery=page.gallery %}
