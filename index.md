## Welcome to Yajana's Pages

I use the [website](https://github.com/YajanaRao/yajanarao.github.io) to maintain and preview the content for what I learn during the software development and sometime general stuff in Markdown files.

### Blogs

I have made notes of topics I found interesting and important. Most of them are related to software as I have a day job of software engineer.

#### Index

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
