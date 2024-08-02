---
pagination:
  data: collections
  size: 1
  alias: tag
permalink: /tagged/{{ tag }}/
layout: home.liquid
---

<h1>Tagged “{{ tag }}”</h1>

<ol>
{% assign taglist = collections[ tag ] %}
{% for post in taglist | reverse %}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ol>