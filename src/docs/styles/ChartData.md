Documentation for `.chart-data-container` CSS class:

The `.chart-data-container` class is used to style a container element that displays chart data. It has the following properties:

- `width: 70%;` - Sets the width of the container to 70% of its parent element.
- `background-color: transparent;` - Sets the background color of the container to transparent, allowing the underlying content to show through.
- `height: auto;` - Automatically adjusts the height of the container based on its content.
- `border-right: 1px solid #dedfe2;` - Adds a right border to the container with a width of 1 pixel and a solid line style. The color of the border is a light gray, specified by the hexadecimal code `#dedfe2`.
- `display: flex;` - Configures the container as a flex container, allowing its child elements to be arranged in a flexible layout.
- `align-items: center;` - Aligns the child elements vertically within the container's flexbox layout, centering them along the vertical axis.

Example Usage:

```html
<div class="chart-data-container">
  <!-- Content goes here -->
</div>
```

In the above example, the `.chart-data-container` class is applied to a `<div>` element to create a container for chart data. You can replace the `<!-- Content goes here -->` comment with the actual content you want to display within the container.

Note: Make sure to link the appropriate CSS file containing the `.chart-data-container` class to your HTML file for the styles to be applied correctly.
