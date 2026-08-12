# How This Layout Changes Without Media Queries

1. I used CSS Grid to make the cards responsive without writing any media queries.

`auto-fit` tells the browser to fit as many columns available space.

`minmax()` is to control the size of each column.

For example, on a large screen several cards can fit in one row. As I make the browser smaller, the number of columns decreases automatically until there is only one card per row on a phone.

The `min()` part is important because a 280px minimum could be too wide on a small screen and cause horizontal scrolling. `min(280px, 100%)` makes sure the column cannot be wider than the available space.

So the layout changes automatically because Grid checks how much space is available and decides how many columns can fit. No media queries are needed.