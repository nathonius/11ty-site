---
title: Bits
layout: home.njk
summary: Code snippets, TILs, and any other quick thoughts I want to share.
aliases:
  - /til
---

{% set allBits = collections['bit'] %}

## Bits

Too small for a full blog post, these are code snippets, TILs, and any other quick thoughts I want to share.

{% for bit in allBits | reverse %}

### [{{bit.data.title}}]({{bit.page.url}})

{{bit.data.summary | safe}}

{{ bit.page.date.toLocaleDateString() }}

{% endfor %}
