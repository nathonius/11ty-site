---
title: Today I Learned
layout: base.11ty.tsx
summary: Code snippets, small learnings, and any other quick thoughts I want to share.
aliases:
  - /bits/
---

{% assign allTils = collections['til'] %}

# Today I Learned

Too small for a full blog post, these TILs are code snippets, small learnings, and any other quick thoughts I want to share.

{% for til in allTils | reverse %}

## [{{til.data.title}}]({{til.page.url}})

{{til.data.summary}}

{{ til.page.date | date }}

{% endfor %}
