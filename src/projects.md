---
title: Projects
layout: home.liquid
summary: All the projects worked on by Nathan Smith.
---
# Projects

These are some projects I have created or worked on. Some are more maintained than others, but everything is open source and freely licensed, so please feel free to steal.

## Obsidian Plugins

I maintain the following plugins for [Obsidian](https://obsidian.md/).

{% assign allProjects = collections.project | projectStatusSort %}

{% for project in allProjects %}
{% if project.data.tags | includes: "obsidian" %}
### {{project.data.title}}

{{project.data.summary}}

**Project Status:** {{project.data['project-status']}}

- [View on GitHub]({{project.data['github-link']}})
- [Install in Obsidian]({{project.data['project-link']}})

{% endif %}
{% endfor %}

## Foundry VTT Modules

I am the author of the following modules for [Foundry VTT](https://foundryvtt.com/).

{% for project in allProjects %}
{% if project.data.tags | includes: "foundryvtt" %}
### {{project.data.title}}

{{project.data.summary}}

**Project Status:** {{project.data['project-status']}}

- [View on GitHub]({{project.data['github-link']}})
- [Install in Foundry]({{project.data['project-link']}})

{% endif %}
{% endfor %}

## Other Projects

{% for project in allProjects %}
{% if project.data.tags.length == 1 %}
### {{project.data.title}}

{{project.data.summary}}

**Project Status:** {{project.data['project-status']}}

- [View on GitHub]({{project.data['github-link']}})
{% if project.data['project-link'] %}- [Project Page]({{project.data['project-link']}}){% endif %}

{% endif %}
{% endfor %}