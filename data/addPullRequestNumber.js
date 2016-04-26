var b="data-pull-request-id";
var a=jQuery("["+b+"]");
a.prepend(function(i, h) {
    return "<td class='count-column-value'>#"+a[i].getAttribute(b)+"</td>";
});