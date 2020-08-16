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

<div id="archives">
{% for category in site.categories %}
  <div class="archive-group">
    {% capture category_name %}{{ category | first }}{% endcapture %}
    <div id="#{{ category_name | slugize }}"></div>
    <p></p>

    <h3 class="category-head">{{ category_name }}</h3>
    <a name="{{ category_name | slugize }}"></a>
    {% for post in site.categories[category_name] %}
    <article class="archive-item">
      <h4><a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a></h4>
    </article>
    {% endfor %}

  </div>
{% endfor %}
</div>
