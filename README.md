# ERPNext Custom Theme

A custom ERPNext theme app inspired by modern design principles, compatible with Frappe/ERPNext v16.

## Inspiration

This theme is inspired by the ThemeRef design system featuring:
- **Fonts**: Plus Jakarta Sans (body) + Space Grotesk (headings)
- **Colors**: Primary (#0f172a), Accent (#0891b2), Accent Light (#22d3ee)
- **Styling**: Modern card-based layouts, smooth animations, gradient overlays

## Installation

1. Get the app into your bench:
   ```bash
   get-app https://github.com/your-org/erpnext_theme
   ```

2. Install on your site:
   ```bash
   bench --site site1 install-app erpnext_theme
   ```

3. Clear cache:
   ```bash
   bench --site site1 clear-cache
   ```

## Features

- Custom CSS theme with design system variables
- Web templates (base.html, index.html)
- Dark mode support (prefers-color-scheme)
- Responsive design
- Smooth animations
- SEO-optimized

## Usage

### Using Custom CSS

The theme CSS is automatically loaded via hooks.py:
```python
app_include_css = "/assets/erpnext_theme/css/theme.css"
```

### Using Custom Templates

Override templates in hooks.py:
```python
base_template = "templates/web/base.html"
```

### Customizing Colors

Modify CSS variables in `public/css/theme.css`:
```css
:root {
    --theme-primary: #0f172a;
    --theme-accent: #0891b2;
    /* ... */
}
```

## File Structure

```
erpnext_theme/
├── app.yml                    # App configuration
├── pyproject.toml            # Python package config
├── README.md
├── erpnext_theme/
│   ├── __init__.py
│   ├── hooks.py             # App hooks
│   ├── public/
│   │   ├── css/theme.css    # Main theme styles
│   │   ├── js/theme.js     # Theme JavaScript
│   │   └── images/
│   │       └── favicon.svg
│   └── templates/
│       └── web/
│           ├── base.html    # Base web template
│           └── index.html # Home page template
```

## Compatible Versions

- Frappe Framework v16+
- ERPNext v16+

## License

MIT