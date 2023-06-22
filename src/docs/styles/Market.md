Documentation for `.market-container`, `.market-top-container`, `.market-top-container-icon`, and `.market-content-container` CSS classes:

## `.market-container` Class

The `.market-container` class is used to style a container element for a market section. It has the following properties:

- `display: block;` - Configures the container to be displayed as a block-level element, taking up the full width of its parent element.

## `.market-top-container` Class

The `.market-top-container` class is used to style a container element for the top section of a market. It has the following properties:

- `display: flex;` - Configures the container as a flex container, allowing its child elements to be arranged in a flexible layout.
- `justify-content: space-between;` - Distributes the child elements evenly within the container, creating equal spacing between them.
- `align-items: center;` - Centers the child elements vertically within the container.
- `padding: 0 20px 0 0;` - Adds padding of 0 pixels on the top, 20 pixels on the right, 0 pixels on the bottom, and 0 pixels on the left of the container.
- `border-bottom: 1px solid #eceff1;` - Adds a bottom border to the container with a width of 1 pixel and a solid line style. The color of the border is a light gray, specified by the hexadecimal code `#eceff1`.

## `.market-top-container-icon` Class

The `.market-top-container-icon` class is used to style an icon container within the top section of a market. It has the following properties:

- `display: flex;` - Configures the container as a flex container, allowing its child elements to be arranged in a flexible layout.
- `align-items: center;` - Centers the child elements vertically within the container.
- `justify-content: center;` - Centers the child elements horizontally within the container.
- `width: 40px;` - Sets the width of the container to 40 pixels.
- `height: 40px;` - Sets the height of the container to 40 pixels.
- `border-radius: 50%;` - Rounds the corners of the container, creating a circular shape.
- `background-color: #eceff1;` - Sets the background color of the container to a light gray, specified by the hexadecimal code `#eceff1`.

## `.market-content-container` Class

The `.market-content-container` class is used to style a container element for the content section of a market. It has the following properties:

- `display: flex;` - Configures the container as a flex container, allowing its child elements to be arranged in a flexible layout.
- `justify-content: space-around;` - Distributes the child elements evenly within the container, creating equal spacing between them.
- `flex-direction: column;` - Sets the direction of the flex container to be vertical, arranging its child elements in a column layout.
- `height: 100px;` - Sets the height of the container to 100 pixels.
- `width: 100%;` - Sets the width of the container to 100% of its parent element.
- `padding: 20px 0;` - Adds padding of 20 pixels on the top and bottom of the container.

Example Usage:

```html
<div class="market-container">
  <div class="market-top-container">
    <!-- Top section content goes here -->
  </div>
  <div class="market-content-container">
    <!-- Content section content goes here -->
  </div>
</div>
```

In the above example, the classes are applied
