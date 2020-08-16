## Welcome to Yajana's Pages

I use the [website](https://github.com/YajanaRao/yajanarao.github.io) to maintain and preview the content for what I learn during the software development and sometime general stuff in Markdown files.

### Blogs

I have made notes of topics I found interesting and important. Most of them are related to software as I have a day job of software engineer.

<div>
{% for category in site.categories %}
    {% capture category_name %}{{ category | first }}{% endcapture %}
    <h2 id="#{{ category_name | slugize }}" name="{{ category_name | | capitalize }}">{{ category_name | capitalize }}</h2>
    <ul>
    {% for post in site.categories[category_name] %}
      <li><a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a></li>
    {% endfor %}
    </ul>

{% endfor %}

</div>
