---
title: Blog
layout: home.njk
summary: Thoughts on tech, life, and anything else.
---

{% set allPosts = collections['blog-post'] %}

## Blog

{% for post in allPosts | reverse %}

### [{{post.data.title}}]({{post.page.url}})

{{post.data.summary | safe}}

{{ post.page.date.toLocaleDateString() }}

{% endfor %}
