# Overview of the Learn CSS Layout tutorial
### [http://learnlayout.com](http://learnlayout.com)

A few things to keep in mind:

- Width is everything. Height is an artifact of container and content.
- Gotta know your pixels. This is a MUST.
- Learning to eyeball pixels makes you much more efficicient in building layout.

---

### 1/19: Introduction

*"Having no layout whatsover is almost ok if all you want is one big column of content."*

---

### 2/19: `block`, `inline`, and other `display` settings

`display` property

- `block`
- `inline`
- `none` (removes an element) vs. `visibility: hidden;` (only conceals an element, leaving it in place)
- [Many others are explained in the MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/display)

---

### 3/19: Do you want to center all the things?

`margin: 0px auto;`

*"Setting the `width` of a block element will prevent it from stretching out to the left/right edges of its container. Then, you can set the left and right margins to `auto` to horizontally center that element within its container. The element will take up the width you specify, then the remaining space will be split evenly between the two margins."*

It's all about the container (parent). As it often is with CSS layout.

---

### 4/19: `max-width` gets us some basic responsive design

*"Using `max-width` instead of `width` will improve the browser's handling of small windows. This is important when making a site usable on mobile."*

This is our first exposure to setting a ***breakpoint***, where the behavior of CSS changes depending upon the width of the browser window. In this age of so many devices, like small phones and big phones and phablets and tablets and small laptops and big laptops and a huge variety of desktop monitor sizes and TVs, and the ability to instantly (or carelessly) change the window width by rotating the device 90&deg;, responsive design lets us customize the user experience to our desired specificity, regardless of device or orientation.

---

### 5/19: The box model has a width problem...

*"An element's border and padding will stretch out the element beyond the specified width. This page in the tutorial shows an example where two elements with the same width value end up different sizes in the result."*

*"For generations, the solution to this problem has been extra math. CSS authors have always just written a smaller width value than what they wanted, subtracting out the padding and border. Thankfully, you don't have to do that anymore..."*

---

### 6/19: ...solved by `box-sizing` with `border-box`

*"When you set `box-sizing: border-box;` on an element, the padding and border of that element no longer increase its width."*

This page also introduces the `-webkit` and `-moz` prefixes to account for browser quirks that are artifacts of proprietary design. The more you explore the boundaries of fresh and new CSS ideas, the more you'll see these prefixes.

---

### 7/19:  `position` is complicated... very complicated

 `position: relative;` lets you move/offset an element from the position it would occupy in normal flow

 `position: fixed;` is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled.

 `position: absolute;` is a monster.

 `absolute` is the trickiest position value. `absolute behaves like fixed except relative to the nearest positioned ancestor instead of relative to the viewport. If an absolutely-positioned element has no positioned ancestors, it uses the document body, and still moves along with page scrolling. Remember, a "positioned" element is one whose position is anything except static.

---

### 8/19: `position` example

*"This example works because the container is taller than the nav. If it wasn't, the nav would overflow outside of its container."*

We can show this by simply increasing the size of the nav to include more \<li> items. See the example in our class repo. Why does this happen? How do we fix it? We'll see in later examples.

---

### 9/19: `float`

*"Float is intended for wrapping text around images."*

Can you use it for other purposes? Like making text flow around other elements/content? For making elements move around one another? Well, yes, but the farther you move from the intended use case of text flowing around images, the more likely there is to be a better solution for what you are trying to achieve.

Note this declaration on the `img`: `margin: 0 0 1em 1em;` We need to unpack some of what is going on here.

---

### 10/19: `clear`

*"The clear property is important for controlling the behavior of floats."*



---

### 11/19: The `clearfix` hack

---

### 12/19: `float` layout example

---

### 13/19: Percent `width`

---

### 14/19: Media queries

---

### 15/19: `inline-block`

---

### 16/19: `inline-block` layout

---

### 17/19: `column`

---

### 18/19: `flexbox`

---

### 19/19: CSS frameworks
