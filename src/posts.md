---
title: Posts
layout: home.njk
summary: Thoughts on tech, life, and anything else.
---

{% set allPosts = collections['post'] %}

## Posts

{% for post in allPosts | reverse %}

### [{% if post.data.tags.includes('til') %}TIL: {% endif %}{{post.data.title}}]({{post.page.url}})

{{post.data.summary | safe}}

{{ post.page.date.toLocaleDateString() }}

{% endfor %}
