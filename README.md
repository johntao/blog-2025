# Lynx-Compatible Personal Blog

A minimalist personal blog built with pure HTML, designed to be fully compatible with the Lynx text-based browser.

## Features

- **Lynx-Compatible**: Works perfectly in Lynx and all text-based browsers
- **Pure HTML**: No CSS, no JavaScript, just semantic HTML
- **Static Hosting**: Can be hosted on any static web server
- **Clean URLs**: No query parameters, all navigation via clean file paths
- **Ergonomic Navigation**:
  - Breadcrumb trails on every page
  - Skip-to-content links for accessibility
  - Consistent navigation menus
  - Previous/next post navigation
- **Easy Bookmarking**: Each page has a permanent, meaningful URL
- **Tag System**: Posts organized by topics/tags
- **Fast**: Each page is only a few kilobytes
- **Privacy-Respecting**: No tracking, no cookies, no analytics

## Site Structure

```
/
├── index.html              # Homepage with recent posts
├── about.html              # About page
├── archive.html            # Chronological archive of all posts
├── posts/
│   ├── index.html         # All posts list
│   ├── 2025-01-10-first-post.html
│   ├── 2025-01-15-why-html-only.html
│   └── 2025-01-20-getting-started-with-lynx.html
└── tags/
    ├── index.html         # Tag index
    ├── tech.html          # Posts tagged "tech"
    ├── minimalism.html    # Posts tagged "minimalism"
    ├── web.html           # Posts tagged "web"
    ├── personal.html      # Posts tagged "personal"
    └── meta.html          # Posts tagged "meta"
```

## Usage

### Viewing Locally with Lynx

```bash
lynx index.html
```

### Serving Locally

You can serve this blog locally with any static web server:

**Using Python:**
```bash
python3 -m http.server 8000
```

**Using PHP:**
```bash
php -S localhost:8000
```

**Using Node.js (http-server):**
```bash
npx http-server -p 8000
```

Then visit: `http://localhost:8000`

### Deploying

This blog can be deployed to any static hosting service:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Any traditional web host
- Or even served from a Raspberry Pi

Simply upload all files to your web server's document root.

## Adding New Posts

1. Create a new HTML file in `posts/` with the naming convention: `YYYY-MM-DD-post-title.html`
2. Use one of the existing posts as a template
3. Update the following files to include your new post:
   - `index.html` (add to recent posts if it's one of the newest)
   - `archive.html` (add to chronological list)
   - `posts/index.html` (add to all posts list)
   - Relevant tag pages in `tags/`
4. Update "next post" and "previous post" navigation in adjacent posts

## Design Principles

1. **Accessibility First**: Works with any browser, including screen readers
2. **Universal Compatibility**: Uses only standard HTML elements
3. **Performance**: Minimal file size, instant loading
4. **Privacy**: No tracking or data collection
5. **Longevity**: Pure HTML will work for decades
6. **Keyboard Navigation**: All content accessible via keyboard
7. **Clear Hierarchy**: Proper heading structure and breadcrumbs

## Navigation Features

- **Breadcrumbs**: Every page shows your location in the site hierarchy
- **Skip to Content**: Accessibility feature to jump past navigation
- **Footer Links**: Quick access to all major sections
- **Post Navigation**: Previous/Next links on blog posts
- **Tag Filtering**: Browse posts by topic

## Testing in Lynx

To verify Lynx compatibility:

```bash
# View homepage
lynx -dump index.html

# Browse interactively
lynx index.html

# Test a specific post
lynx posts/2025-01-10-first-post.html
```

## License

This blog structure is public domain. Feel free to use it for your own blog!

## Philosophy

This blog embraces web minimalism. In an era of bloated websites and privacy-invasive tracking, pure HTML represents a return to the core principles of the web: universal access to information.

No build tools. No frameworks. No dependencies. Just HTML.
