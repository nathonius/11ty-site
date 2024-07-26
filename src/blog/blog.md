---
title: Projects
layout: home.njk
permalink: /blog/index.html
---

{% set allPosts = collections['blog-post'] %}

## Blog

{% for post in allPosts | reverse %}

### [{{post.data.title}}]({{post.page.url}})

{{post.data.summary | safe}}

{{ post.page.date.toLocaleDateString() }}

{% endfor %}
