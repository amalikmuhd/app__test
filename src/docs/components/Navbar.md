## Navbar Component

This component represents the navigation bar or header section of a website. It consists of a logo, menu items, and buttons for signing in and getting started.

### Props

This component does not accept any props.

### Example Usage

```jsx
import React from 'react';
import Navbar from './Navbar';

const App = () => {
  return (
    <div>
      {/* Other content */}
      <Navbar />
      {/* More content */}
    </div>
  );
};

export default App;
```

### Code Explanation

- Import the necessary dependencies: `React` and the CSS file for styling the navbar.
- Define a functional component named `Navbar`.
- Render the navbar structure using JSX within the `return` statement.
  - The root element is a `nav` with the CSS class `navbar`.
  - Inside the navbar, there is a `div` element with the CSS class `inner-navbar-container` to contain the content.
  - The `div` contains a `span` element with the CSS class `logo-name` to display the logo or brand name.
  - Next, there is a `ul` element with the CSS class `menu-list` to represent the menu items.
  - Inside the `ul`, there are several `li` elements with the CSS class `menu-item`, each representing a menu item.
  - Following the menu items, there is another `div` element to contain the sign-in button and the get-started button.
  - The `div` contains two `button` elements with the CSS classes `signin-button` and `get-started-button`, respectively.
- Export the `Navbar` component as the default export.

### CSS

The styling for the navbar is expected to be defined in a separate CSS file named `'../styles/Navbar.css'`. The CSS file should contain styles for the classes `navbar`, `inner-navbar-container`, `logo-name`, `menu-list`, `menu-item`, `signin-button`, and `get-started-button`. Please make sure the file path is correct and the styles are defined accordingly.

```css
/* '../styles/Navbar.css' */

.navbar {
  /* Navbar styles */
}

.inner-navbar-container {
  /* Container styles */
}

.logo-name {
  /* Logo name styles */
}

.menu-list {
  /* Menu list styles */
}

.menu-item {
  /* Menu item styles */
}

.signin-button {
  /* Sign-in button styles */
}

.get-started-button {
  /* Get-started button styles */
}
```

Ensure that the CSS file is imported in the appropriate location to apply the styles to the navbar component.
