---
path: '/blog/rss-feed-shenanigans'
type: 'post'
title: 'RSS Feed Shenanigans'
date: '2018-02-10'
tags: ['bugs', 'debugging', 'annoying', 'gatsbyjs', 'rss']
---

## The Goal:
I wanted to set up an RSS feed for my blog, doesn't sound like much does it? 

But of course it couldn't be that simple. Oh no. 

At first I looked into putting together an rss.xml by hand, but then I found (to my immense relief) that
Gatsby already has a plugin to do that automatically at build time. ([gatsby-plugin-feed](https://www.gatsbyjs.org/packages/gatsby-plugin-feed/)). 

"Oh great!" (I thought to myself) "That will be so much easier!"

<em>Yup. I jinxed myself.</em>

## The Obstacle:

The official docs made it seem incredibly simple, but after adding the plugin and
running ```gatsby build``` I got a (very, very) helpful error:

```bash
  error gatsby-node.js returned an error


  Error:
```
(That's the whole error message, I didn't cut it off by accident)

And a warning: 

```bash
  warning GraphQL query in component "/home/crowsveldt/Documents/code/CrowsVeldt.github.io/src/templates/post.js" will not be run!
  Queries are only executed for Page or Layout components. Instead of a query,
  co-locate a GraphQL fragment and compose that fragment into the query (or other
  fragment) of the top-level page or layout that renders this component. For more
  info on fragments and composition see: http://graphql.org/learn/queries/#fragments
```
I've run into this error/warning combo before, it seems to be a generic response to something being wrong with a query. Not particularly helpful in this case.

I checked the docs again (with a great wailing and gnashing of teet) This time looking more carefully at the example they
give for a user customised config, and I saw that ```gatsby-plugin-feed``` seemed to
be expecting each markdownRemark node to have a ``` field { slug } ``` attached to
it. Looking into the source code for ```gatsby-plugin-feed``` on GitHub confirmed this
assumption. 

So I broadened my search. I checked
[Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/), and [Bound Action Creators](https://www.gatsbyjs.org/docs/bound-action-creators/) in particular. I found some hints toward what I needed, but not enough for me to connect the dots... until I did some googling and found this: [Create slugs for markdown files](https://www.gatsbyjs.org/docs/migrating-from-v0-to-v1/#create-slugs-for-markdown-files).

Now things were starting to come together! Still, The style of the example given didn't seem to match the that of the tutorials and documentation I had followed so far, and it looked pretty gnarly. I guessed that it was out-of-date, and decided to keep looking in the hopes of finding something more in line with what I was used to. 

After some more poking around (and some more teeth grinding,
I need to work on keeping my cool) it finally occurred to me to search the GatsbyJS
issues page on GitHub where I found [this little bundle of joy](https://github.com/gatsbyjs/gatsby/pull/3873)!

Checking the associated commit got me the exact solution to my problem:

```javascript
+// In your gatsby-node.js
+const { createFilePath } = require('gatsby-source-filesystem')
+
+// ...
+
+exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
+  const { createNodeField } = boundActionCreators
+
+  if (node.internal.type === `MarkdownRemark`) {
+    const value = createFilePath({ node, getNode })
+    createNodeField({
+      name: `slug`,
+      node,
+      value,
+    })
+  }
+}
``` 

I liked it, I tried it, and it worked! (confetti falls from the sky, people spontaneously bursting into song and dance)


The pull request is currently still waiting for someone with write access to merge it. Hopefully that won't take too long. 

Thanks for reading! Constructive criticism is welcome.

## One last bit of fun:

I typed the solution into my ```gatsby-node.js``` file, I avoid using copy/paste since that has caused me much unneccessary grief in the past, but in this case I caused myself ~30 minutes of uneccessary grief by typing
```markdownRemark``` instead of ```MarkdownRemark```(!) So, yeah. That was fun.