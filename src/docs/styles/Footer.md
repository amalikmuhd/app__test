Documentation for `.footer` and `.footer-column` CSS classes:

## `.footer` Class

The `.footer` class is used to style a footer element at the bottom of a webpage. It has the following properties:

- `background-color: transparent;` - Sets the background color of the footer to transparent.
- `display: flex;` - Configures the footer as a flex container, allowing its child elements to be arranged in a flexible layout.
- `justify-content: space-evenly;` - Distributes the child elements evenly within the footer, creating equal spacing between them.
- `width: 100%;` - Sets the width of the footer to 100% of its parent element.
- `margin: auto;` - Centers the footer horizontally within its parent element by applying automatic margins.
- `padding: 10px 20px;` - Adds padding of 10 pixels on the top and bottom, and 20 pixels on the left and right of the footer.
- `border-top: 1px solid #eceff1;` - Adds a top border to the footer with a width of 1 pixel and a solid line style. The color of the border is a light gray, specified by the hexadecimal code `#eceff1`.

## `.footer-column` Class

The `.footer-column` class is used to style the columns within the footer. It has the following properties:

- `justify-content: center;` - Centers the content of the column vertically.
- `align-items: center;` - Centers the content of the column horizontally.
- `h3` - Applies styles to the heading element (`h3`) within the column:
  - `font-size: 18px;` - Sets the font size of the heading to 18 pixels.
  - `margin-bottom: 10px;` - Adds a bottom margin of 10 pixels to the heading.
- `ul` - Applies styles to the unordered list (`ul`) within the column:
  - `list-style-type: none;` - Removes the default bullet points from the list.
  - `padding: 0px 0;` - Removes any padding from the list.
- `li` - Applies styles to the list items (`li`) within the column:
  - `margin-bottom: 5px;` - Adds a bottom margin of 5 pixels to each list item.
  - `padding: 5px 0;` - Adds padding of 5 pixels on the top and bottom of each list item.

## Responsive Styles

The provided CSS code includes responsive styles for screens with a maximum width of 768 pixels. These styles will be applied when the screen width is equal to or less than 768 pixels. The responsive styles modify the layout of the footer to accommodate smaller screens:

- `.footer`:
  - `flex-wrap: wrap;` - Wraps the footer columns onto a new line when the screen width is reduced.
- `.footer-column`:
  - `flex: 1 0 100%;` - Sets the flex basis of the column to 100%, causing each column to take up the full width on smaller screens.
  - `margin-right: 0;` - Removes the right margin on smaller screens.
  - `margin-left: 20px;` - Adds a left margin of 20 pixels to create spacing between columns on smaller screens.
  - `margin-bottom: 20px;` - Adds a bottom margin of 20 pixels to create spacing between rows of columns on smaller screens.

Note: Make sure to link the appropriate CSS file containing the `.footer` and `.footer-column` classes to your HTML file for the styles to be applied correctly.
