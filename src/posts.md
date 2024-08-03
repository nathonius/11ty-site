---
title: Posts
layout: home.liquid
summary: Thoughts on tech, life, and anything else.
---

{% assign allPosts = collections['post'] | reverse %}

## Posts

{% for post in allPosts %}

### [{% if post.data.tags | includes: 'til' %}TIL: {% endif %}{{post.data.title}}]({{post.page.url}})

{{post.data.summary}}

{{ post.page.date | date }}

{% endfor %}
