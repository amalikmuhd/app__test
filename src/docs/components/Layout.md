## Layout Component

The `Layout` component is a wrapper component that provides a consistent layout structure for the content of a webpage. It includes a navbar at the top and a footer at the bottom, with the main content area in between.

### Props

- `children` (React nodes): The content to be rendered within the layout. This can include any valid React elements, components, or text.

### Example Usage

```jsx
import React from 'react';
import Layout from './Layout';

const App = () => {
  return <Layout>{/* Main content */}</Layout>;
};

export default App;
```

### Code Explanation

- Import the necessary dependencies: `Footer`, `Navbar`, and the CSS file for styling the layout.
- Define a functional component named `Layout` that takes in the `children` prop.
- Render the layout structure using JSX within the `return` statement.
  - The root element is a `div` with the CSS class `container`.
  - Inside the container, the `Navbar` component is rendered to display the navigation bar at the top.
  - The `children` prop is rendered, representing the main content of the webpage.
  - Finally, the `Footer` component is rendered to display the footer at the bottom.
- Export the `Layout` component as the default export.

### CSS

The styling for the layout is expected to be defined in a separate CSS file named `'../styles/Layout.css'`. The CSS file should contain styles for the class `container`. Please make sure the file path is correct and the styles are defined accordingly.

```css
/* '../styles/Layout.css' */

.container {
  /* Layout styles */
}
```

Ensure that the CSS file is imported in the appropriate location to apply the styles to the layout component.
