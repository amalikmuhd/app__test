## Footer Component

This component represents the footer section of a website. It displays four columns of information: Company, Learn, Individuals, and Support. Each column contains a heading and a list of items.

### Props

This component does not accept any props.

### Example Usage

```jsx
import React from 'react';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      {/* Other content */}
      <Footer />
    </div>
  );
};

export default App;
```

### Code Explanation

- Import the necessary dependencies: `React` and the CSS file for styling the footer.
- Define a functional component named `Footer`.
- Inside the component, declare four arrays (`column1Data`, `column2Data`, `column3Data`, `column4Data`) to hold the data for each column of the footer.
- Render the footer structure using JSX within the `return` statement.
  - The root element is a `footer` with the CSS class `footer`.
  - Inside the footer, there are four `div` elements representing each column.
  - Each column `div` contains an `h3` heading and a `ul` unordered list.
  - The `ul` is populated with `li` items using the `map` method on the corresponding data array. Each item is assigned a unique `key` based on its index.
- Export the `Footer` component as the default export.

### CSS

The styling for the footer is expected to be defined in a separate CSS file named `'../styles/Footer.css'`. The CSS file should contain styles for the classes `footer` and `footer-column`. Please make sure the file path is correct and the styles are defined accordingly.

```css
/* '../styles/Footer.css' */

.footer {
  /* Footer styles */
}

.footer-column {
  /* Column styles */
}
```

Ensure that the CSS file is imported in the appropriate location to apply the styles to the footer component.
