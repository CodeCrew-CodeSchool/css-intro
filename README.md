# CSS Week

## Monday

- Layout

    Using layout.html and layout.js, we designed a page that has a spatially designed layout. Each element, instead of being based on content and floating left/right, is given a percentage of the page to occupy.

    Layout.js is only used to color the divs on the layout.html page. Do not edit/worry too much about the javascript.

- Animations Intro

    keyframes

        from & to - useful for 2 state animation, a start and finish
            from sets the beginning
            to sets the end
        percentages - thinking of your animation more as a video that you're editing, you can add styles that control what the target should be doing at certain parts of the animation. In the example, the emoji starts at 0, halfway through its animation it is across the page. 100% aka at the end of the animation, it should be back where it started at 0

## Tuesday

- [Selectors](https://codeschoolcourses.slack.com/archives/C06ELJ3SV1A/p1707838519276469)

    - Elementname/Tagname/Type Selectors
    - Class Selector
    - ID Selector
    - Attribute Selector
    - Pseudo-class Selector
    - Pseudo-Element Selector

## Wednesday

- Box Model
    - content
    - padding
    - border
    - margin
    - ++ block vs inline - new line vs same line
    - ++ alternative model - no margin or padding

- Flex

    Control the layout of child elements either horizontally or vertically

- Grid

    Control the layout of child elements both horizontally and vertically


## Layout Examples

The folders in this repo contain a collection of the various ways of setting up page layouts we've discussed this week.

[semantic](https://codecrew-codeschool.github.io/css-intro/semantic/layout.html) 
- using semantic elements and the float style for sidebars, we can arrange content on our page based on our content.

[div](https://codecrew-codeschool.github.io/css-intro/div/layout.html) 
- irrespective of content, we can generate a layout using div elements and give them a percentage of the page they can take up.

[grid](https://codecrew-codeschool.github.io/css-intro/grid/layout.html) 
- going all in, we can use semantic elements where applicable, and style our page with a specific grid layout to properly space elements