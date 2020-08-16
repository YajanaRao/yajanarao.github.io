## Welcome to Yajana's Pages

I use the [website](https://github.com/YajanaRao/yajanarao.github.io) to maintain and preview the content for what I learn during the software development and sometime general stuff in Markdown files.

### Blogs

I have made notes of topics I found interesting and important. Most of them are related to software as I have a day job of software engineer.

#### Index

<!-- <ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul> -->
<ul>
{% for category in site.categories %}
    {% capture category_name %}{{ category | first }}{% endcapture %}
    <li id="#{{ category_name | slugize }}">
    <a name="{{ category_name | slugize }}">{{ category_name }}</a>
    </li>
    {% for post in site.categories[category_name] %}
    <ul class="archive-item">
      <li><a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a></li>
    </ul>
    {% endfor %}

{% endfor %}

</ul>
