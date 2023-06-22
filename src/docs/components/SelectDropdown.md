## SelectDropdown Component

The `SelectDropdown` component represents a dropdown menu used for selecting options. It includes a list of items that can be clicked to trigger a corresponding action. It also supports displaying a loader while data is being loaded.

### Props

- `setShowDropdown` (function): A function to control the visibility of the dropdown menu. When called with `false`, the dropdown menu will be hidden.
- `handleClick` (function): A function that handles the click event when an item is selected from the dropdown menu. It receives the selected item as an argument.
- `tickers` (array): An array of items to be displayed as options in the dropdown menu.
- `loading` (boolean): A boolean value indicating whether the data is currently being loaded. If `true`, a loader will be displayed; otherwise, the list of options will be rendered.

### Example Usage

```jsx
import React from 'react';
import SelectDropdown from './SelectDropdown';

const App = () => {
  const setShowDropdown = (show) => {
    // Set the visibility of the dropdown menu
  };

  const handleClick = (selectedItem) => {
    // Handle the selection of an item from the dropdown menu
  };

  const tickers = ['Option 1', 'Option 2', 'Option 3'];

  const loading = false;

  return (
    <div>
      {/* Other content */}
      <SelectDropdown
        setShowDropdown={setShowDropdown}
        handleClick={handleClick}
        tickers={tickers}
        loading={loading}
      />
      {/* More content */}
    </div>
  );
};

export default App;
```

### Code Explanation

- Import the necessary dependencies: `Loader` component, and the CSS file for styling the `SelectDropdown` component.
- Define a functional component named `SelectDropdown` that takes in the props: `setShowDropdown`, `handleClick`, `tickers`, and `loading`.
- Render the dropdown menu structure using JSX within the `return` statement.
  - The root element is a `div` with the CSS class `dropdown-container`. This element captures click events to close the dropdown menu.
  - Inside the container, there is another `div` with the CSS class `dropdown-inner-container` to contain the dropdown content.
  - If `loading` is `true`, the `Loader` component is rendered to display a loading indicator.
  - If `loading` is `false`, the `tickers` array is mapped using the `map` method to render each option.
  - Each option is wrapped in a `div` element with a unique `key` based on its index and a `value` attribute set to the ticker value.
  - The `onClick` event handler is attached to each option `div` to trigger the `handleClick` function when clicked, passing the ticker value as an argument.
  - Inside each option `div`, a `p` element is used to display the ticker value in uppercase.
- Export the `SelectDropdown` component as the default export.

### CSS

The styling for the `SelectDropdown` component is expected to be defined in a separate CSS file named `'../styles/SelectDropdown.css'`. The CSS file should contain styles for the classes `dropdown-container` and `dropdown-inner-container`. Please make sure the file path is correct and the styles are defined accordingly.

```css
/* '../styles/SelectDropdown.css' */

.dropdown-container {
  /* Dropdown container styles */
}

.dropdown-inner-container {
  /* Dropdown inner container styles */
}
```

Ensure that the CSS file is imported in the appropriate location to apply the styles to the `SelectDropdown` component.
