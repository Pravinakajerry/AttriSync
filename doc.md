# AttriSync Documentation

AttriSync is a groundbreaking JavaScript feature that enables real-time synchronization of content across multiple HTML elements on your webpage. With AttriSync, update the content once, and it automatically updates everywhere else.

## Table of Contents

1. [Features](#Features)
2. [Limitations](#Limitations)
3. [Getting Started](#Getting-Started)
4. [Use Cases](#Use-Cases)

## Features

**1. Synchronized Text**

AttriSync uses custom data attributes to link and synchronize text content across multiple HTML elements. Update the text in one location and see it automatically update everywhere else.

**2. Image Duplication**

With AttriSync, images can also be updated across your website from a single source. Change the source URL once, and all linked instances will be updated automatically.

**3. Link Management**

Managing links becomes much simpler with AttriSync. Updating the href attribute at the main source will automatically propagate the changes to all linked instances.

## Limitations

AttriSync is a powerful feature, but it does have some limitations:

1. The feature relies on JavaScript. If a user has JavaScript disabled in their browser, the feature will not function.

2. As of now, AttriSync supports text content, images, and links. Future updates may add support for other types of content.

3. AttriSync works on a per-page basis. Content synchronization across different pages is not currently supported.

## Getting Started

To use AttriSync, you need to add custom data attributes to your HTML elements and include the AttriSync script on your page.

Here's a basic example:

```html
<h2 data-c-text-main="blog-heading">This is the main blog heading.</h2>
<h2 data-c-text="blog-heading">This is a linked heading element for blog heading.</h2>
<p data-c-text-main="blog-content">This is the main blog content.</p>
<p data-c-text="blog-content">This is a linked text element for blog content.</p>
<a href="#" data-c-href-main="main-link">Main link</a>
<a href="#" data-c-href="main-link">Connected link</a>
<img data-c-img-main="blog-image" src="https://via.placeholder.com/150">
<img data-c-img="blog-image" src="">
```

## Use Cases

AttriSync can be used in a wide variety of scenarios:

1. **Blog Management** - Keep your blog headings, content, and call-to-actions consistent across your website.

2. **E-commerce Sites** - Keep product descriptions, images, and related links synchronized.

3. **Site-Wide Announcements** - Propagate the same announcement or message across multiple web pages.

4. **Documented Procedures** - Keep procedures or guidelines repeated on multiple pages updated and in sync.

and more : )

---

Remember, AttriSync is all about simplifying your web development process and making your website maintenance easier. Make the most out of this feature and enjoy a seamless web development experience.

---
