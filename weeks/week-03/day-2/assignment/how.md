# How This Layout Changes Without Media Queries

The card layout changes automatically because CSS Grid uses auto-fit and minmax().

auto-fit tells Grid to fit as many columns as possible into the available space.

minmax(min(280px, 100%), 1fr) tells each column that it normally wants to be at least 280px wide, but it can become 100% wide when the container is too narrow.

At a wide desktop size, several cards can fit in one row.

As the browser becomes narrower, there is no longer enough space for as many 280px columns, so Grid automatically moves cards onto new rows.

Eventually, on a phone, only one card fits per row.

The min() prevents the 280px minimum from being larger than the available screen width, which prevents horizontal scrolling on a 320px phone.

No media queries are needed because Grid calculates the number of columns from the available space.