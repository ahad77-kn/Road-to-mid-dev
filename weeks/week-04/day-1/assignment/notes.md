# Notes

## What surprised me about typeof null?

The surprising thing is that:

typeof null

returns:

"object"

I expected it to return "null".

This is a historical behavior in JavaScript. Even though `null` is not actually an object, JavaScript still returns `"object"` when typeof is used on it.