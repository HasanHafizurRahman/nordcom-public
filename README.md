## About

This is a Nordcom marketplace project created with [Next.js](https://nextjs.org/).

## Package for design

- [Iconify](https://iconify.design/) [Iconsets](https://icon-sets.iconify.design) [React-Docs](https://github.com/iconify/iconify/tree/main/iconify-icon/react) - It's use for Icon.

- [Headlessui](https://headlessui.com/) [Documents](https://headlessui.com/react/menu) - We can handle menu, modal, Tabs, more components handle.

- [Swiper](https://swiperjs.com/) [Documents](https://swiperjs.com/get-started) [Demo](https://swiperjs.com/demos) - We can use for slider, gallery, and carousel manage.

# Nordcom Theme and Global Styling

The Nordcom theme and global styling provide a consistent and visually appealing design for your web application. This documentation outlines the key components of the theme, the colors used, the typography, and the global styling rules.

## Theme Configuration (tailwind.config.js)

The Nordcom theme extends the default Tailwind CSS configuration to provide a customized experience. Below are the main customizations:

### Container

The container class is extended to provide centered content with padding adjustments for various screen sizes.

### Colors

The Nordcom theme defines a set of colors to maintain a cohesive color palette throughout the application:

- `nordcomPrimary`: Main green color (#68D237)
- `nordcomSecondary`: Vibrant yellow color (#FFE923)
- `nordcomAccent`: Striking red color (#FF8154)
- `nordcomNeutral`: Neutral gray color (#ADADAD)

### Font Family

The Nordcom theme uses the "Work Sans" font as the default font for a clean and modern typography style.

### Border Radius

A consistent border radius of 8px is applied to elements, giving them a rounded and approachable appearance.

## Global Styling (global.css)

The global CSS styles define the base styling rules for various HTML elements to maintain a consistent visual hierarchy and typography across the application.

### Headings

- `h1`: Large headings with increased font size and line height.
- `h2`: Subheadings with a slightly smaller font size and a comfortable line height.
- `h3`, `h4`: Smaller headings for subsections.

### Paragraphs

- `p`: Standard paragraph text with a font size and line height suitable for reading.

### Lists

- `li`: List items, whether in ordered or unordered lists, have a consistent text style.

### Links

- `a`: Hyperlinks inherit the same font size and line height as paragraphs for consistency.

## Usage

To apply the Nordcom theme and global styling to your web application, follow these steps:

1. Ensure you have Tailwind CSS set up in your project.
2. Copy the theme configuration in your `tailwind.config.js` file.
3. Create a global CSS file (e.g., `global.css`) and copy the global styling rules.
4. Include the global CSS file in your application, either by importing it in your main entry point or linking it in your HTML file.

By utilizing the Nordcom theme and global styling, you can maintain a cohesive design across your application while benefiting from the Tailwind CSS utility-first approach.
