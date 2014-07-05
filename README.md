##pretemplater

Because I wanted to define my own syntax, but still use simple templating from lodash.

```
<% loop items as item %>
    <% if item.name %>
        <%= item.name %>
    <% /if %>
<%  /loop %>
```

ends up being:

```
<% items.forEach(function(item) { %>
    <% if (item.name) %>
        <%= item %>
    <% } %>
<%  } %>
```

###usage

```
var pretemplater = require("pretemplater");

var readyForLodash = pretemplater("some string");
```

