Documentation for `.dropdown-container`, `.dropdown-inner-container`, and `.dropdown-inner-container > p` CSS classes:

## `.dropdown-container` Class

The `.dropdown-container` class is used to style a container for a dropdown menu. It has the following properties:

- `padding: 20px;` - Adds 20 pixels of padding around the dropdown container.
- `background-color: rgba(0, 0, 0, 0.13);` - Sets the background color of the dropdown container to a semi-transparent black, specified by the RGBA value `(0, 0, 0, 0.13)`.
- `display: flex;` - Configures the dropdown container as a flex container, allowing its child elements to be arranged in a flexible layout.
- `justify-content: center;` - Centers the child elements horizontally within the dropdown container.
- `align-items: center;` - Centers the child elements vertically within the dropdown container.
- `position: absolute;` - Positions the dropdown container absolutely, relative to its closest positioned ancestor.
- `width: 100%;` - Sets the width of the dropdown container to 100% of its parent element.
- `height: 100%;` - Sets the height of the dropdown container to 100% of its parent element.

## `.dropdown-inner-container` Class

The `.dropdown-inner-container` class is used to style the inner container within the dropdown menu. It has the following properties:

- `padding: 20px;` - Adds 20 pixels of padding around the inner container.
- `width: 20%;` - Sets the width of the inner container to 20% of its parent element.
- `height: 60%;` - Sets the height of the inner container to 60% of its parent element.
- `background-color: #f5f8fe;` - Sets the background color of the inner container to a light blue, specified by the hexadecimal code `#f5f8fe`.
- `display: flex;` - Configures the inner container as a flex container, allowing its child elements to be arranged in a flexible layout.
- `border-radius: 10px;` - Rounds the corners of the inner container, creating a slightly rounded shape.
- `flex-direction: column;` - Sets the direction of the flex container to be vertical, arranging its child elements in a column layout.
- `overflow: scroll;` - Adds a scrollable behavior to the inner container if its content exceeds its dimensions.

## `.dropdown-inner-container > p` Class

The `.dropdown-inner-container > p` class is used to style the paragraphs within the inner container of the dropdown menu. It has the following properties:

- `font-size: 20px;` - Sets the font size of the paragraphs to 20 pixels.
- `margin-bottom: 0px;` - Sets the bottom margin of the paragraphs to 0 pixels, removing any extra space.
- `cursor: pointer;` - Changes the cursor to a pointer when hovering over the paragraphs, indicating they are clickable.

Example Usage:

```html
<div class="dropdown-container">
  <div class="dropdown-inner-container">
    <p>Option 1</p>
    <p>Option 2</p>
    <p>Option 3</p>
  </div>
</div>
```

In the above example, the classes are applied to create a dropdown menu with three options. The dropdown container has a semi-transparent background, and the inner container has a scrollable layout with rounded corners. Each option is displayed as a clickable paragraph with a specified font size.
