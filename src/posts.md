---
title: Posts
layout: home.liquid
summary: Thoughts on tech, life, and anything else.
---

{% assign allPosts = collections['post'] %}

## Posts

{% for post in allPosts | reverse %}

### [{% if post.data.tags | find: 'til' %}TIL: {% endif %}{{post.data.title}}]({{post.page.url}})

{{post.data.summary}}

{{ post.page.date | date }}

{% endfor %}
