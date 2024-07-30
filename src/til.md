---
title: Today I Learned
layout: home.njk
summary: Code snippets, small learnings, and any other quick thoughts I want to share.
aliases:
  - /bits/
---

{% set allTils = collections['til'] %}

## Today I Learned

Too small for a full blog post, these TILs are code snippets, small learnings, and any other quick thoughts I want to share.

{% for til in allTils | reverse %}

### [{{til.data.title}}]({{til.page.url}})

{{til.data.summary | safe}}

{{ til.page.date.toLocaleDateString() }}

{% endfor %}
