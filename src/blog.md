---
title: Blog
layout: home.liquid
summary: Thoughts on tech, life, and anything else.
---

{% assign allPosts = collections['blog-post'] %}

## Blog

{% for post in allPosts | reverse %}

### [{{post.data.title}}]({{post.page.url}})

{{post.data.summary}}

{{ post.page.date | date }}

{% endfor %}
