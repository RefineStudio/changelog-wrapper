# Changelog Wrapper

A React component designed for displaying changelogs in web applications. It offers responsive design, theme support (light/dark), and flexible display modes (full page or modal dialog). The component integrates seamlessly with Tailwind CSS.

## Features

- Responsive Design: Adapts to various screen sizes.
- Theme Support: Compatible with light and dark themes.
- Display Modes: Can be rendered as a full page or a modal dialog.
- Date Formatting: Automatically formats dates for improved readability.
- Tag Support: Allows categorization of updates with custom tags.
- Image Support: Display images with changelog entries for better visual communication.
- Accessibility: Built with accessibility best practices.
- TypeScript: Provides full TypeScript support with type definitions.

## Installation

```bash
npm install changelog-wrapper
```

## Requirements

This package requires the following peer dependencies in your project:

- React: ^18.0.0 or ^19.0.0
- React DOM: ^18.0.0 or ^19.0.0
- Tailwind CSS: ^3.0.0 or ^4.0.0

### Required Tailwind CSS Configuration

Ensure your `tailwind.config.js` includes the following configuration to enable proper styling and theme switching:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/changelog-wrapper/dist/**/*.{js,mjs}",
  ],
  darkMode: "class", // Essential for theme switching
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## Usage

### Basic Implementation

```jsx
import React from "react";
import { Changelog } from "changelog-wrapper";

const entries = [
  {
    id: "1",
    title: "New Export Functionality",
    date: "2025-06-12",
    content:
      "We added the ability to export data in multiple formats, including CSV, JSON, and PDF.",
    tags: ["Feature", "Export"],
    image: "https://example.com/images/export-feature.jpg",
  },
  {
    id: "2",
    title: "Performance Improvements",
    date: "2025-05-28",
    content:
      "We optimized application loading, resulting in a 40% improvement in startup speed.",
    tags: ["Performance", "Optimization"],
    image: "https://example.com/images/performance-chart.png",
  },
];

function App() {
  return <Changelog entries={entries} theme="light" display="page" />;
}
```

### Modal Implementation

```jsx
import React, { useState } from "react";
import { Changelog } from "changelog-wrapper";

function App() {
  const [showChangelog, setShowChangelog] = useState(false);

  return (
    <div>
      <button onClick={() => setShowChangelog(true)}>View Changelog</button>

      {showChangelog && (
        <Changelog
          entries={entries}
          theme="dark"
          display="modal"
          isOpen={showChangelog}
          onClose={() => setShowChangelog(false)}
        />
      )}
    </div>
  );
}
```

### Dark Mode Integration

```jsx
import React, { useState } from "react";
import { Changelog } from "changelog-wrapper";

function App() {
  const [isDark, setIsDark] = useState(false);

  // Toggle dark mode on your app
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <Changelog
        entries={entries}
        theme={isDark ? "dark" : "light"}
        display="page"
      />
    </div>
  );
}
```

## API Reference

### Props

| Prop        | Type                | Default     | Description                                                               |
| ----------- | ------------------- | ----------- | ------------------------------------------------------------------------- |
| `entries`   | `ChangelogEntry[]`  | Required    | Array of changelog entries to display.                                    |
| `theme`     | `'light' \| 'dark'` | `'light'`   | Defines the visual theme of the component.                                |
| `display`   | `'page' \| 'modal'` | `'page'`    | Sets the display mode: full page or modal dialog.                         |
| `isOpen`    | `boolean`           | `true`      | Controls the visibility of the modal (only applicable for modal display). |
| `onClose`   | `() => void`        | `undefined` | Callback function invoked when the modal is closed.                       |
| `className` | `string`            | `undefined` | Additional CSS classes to apply to the component's wrapper.               |

### ChangelogEntry Interface

```typescript
interface ChangelogEntry {
  id: string; // Unique identifier for the changelog entry.
  title: string; // Title of the changelog entry.
  date: string; // Date in ISO format (YYYY-MM-DD) or any valid date string.
  content: string; // Main content or description of the changes.
  tags?: string[]; // Optional array of tags for categorization.
  image?: string; // Optional image URL to display with the changelog entry.
}
```

## Styling

The component utilizes Tailwind CSS classes and adapts to your application's theme. It is designed for seamless integration with existing Tailwind-based projects.

### Custom Styling

You can customize the component's appearance by:

1.  Using the `className` prop to add custom wrapper styles.
2.  Overriding Tailwind classes in your global CSS.
3.  Customizing your Tailwind configuration to modify colors and spacing.

## Date Formatting

Dates provided in ISO format (e.g., "2025-06-12") are automatically converted to a human-readable format (e.g., "June 12, 2025"). The component supports various date formats and will display the original string if parsing fails.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
