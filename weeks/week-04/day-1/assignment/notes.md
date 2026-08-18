# Notes

## What surprised me about typeof null?


the weired thing i found is that "typeof null" says "oject".
i thought it would say null because the value is "null".
but it is java script it says object instead of null and as null is not an object.

This is a historical behavior in JavaScript. Even though `null` is not actually an object, JavaScript still returns `"object"` when typeof is used on it.

## what i learned 
- learned that const is used when value doesnot have to change and let is used when a value can be changed.
- learned that how to use if/else ,swithch .