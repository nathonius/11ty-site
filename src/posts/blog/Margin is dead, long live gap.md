---
title: Margin is dead, long live gap
summary: The introduction of the CSS gap property has made spacing elements on the page easier than ever.
date: 
update_date: 
permalink: /posts/blog/margin-is-dead-long-live-gap/
draft: true
tags:
  - css
---
If [the best new CSS function](The%20best%20new%20CSS%20function.md) is `color-mix`, then the best CSS property added in the last ten years is `gap`.

# Margin hacks begone

Creating non-linear HTML layouts was difficult for most of CSS's life; HTML was originally only intended to represent documents and CSS was just a way to lay out the document. We have a "margin" property today because we had margins on printed documents. Even the way [flow layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flow_layout) and its positioning modes work comes from documents: paragraphs are blocks, items within a paragraph are inline. Even the "float" property calls to mind positioning an image within a typed report.

When fledgling web designers wanted to break outside of the strict, linear bounds of flow layout, they reached for the only tool they had. Layouts built on an HTML table were a workable, but inelegant solution. They were tricky to maintain, and certainly weren't responsive by today's standards. The advent of [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout) changed everything. For the first time, HTML and CSS were breaking free from their roots as a method of displaying documents and moving towards a way to build an interactive application, especially one that worked at different screen sizes without having to deploy a separate, mobile version of a site.

But even with flexbox, it took the often underutilized, sometimes overlooked [grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout) to truly move the web past using outdated layout methods with the introduction of the `row-gap` and `column-gap` properties.
