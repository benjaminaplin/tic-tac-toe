# Flexbox Cheat Sheet

## Container Properties (Parent)

### Display
```css
.container {
  display: flex;        /* Creates a flexbox container */
  display: inline-flex; /* Creates an inline flexbox container */
}
```

### Flex Direction
```css
.container {
  flex-direction: row;            /* Default - items placed from left to right */
  flex-direction: row-reverse;    /* Items placed from right to left */
  flex-direction: column;         /* Items placed from top to bottom */
  flex-direction: column-reverse; /* Items placed from bottom to top */
}
```

### Flex Wrap
```css
.container {
  flex-wrap: nowrap;       /* Default - all items in one line */
  flex-wrap: wrap;         /* Items wrap to multiple lines if needed */
  flex-wrap: wrap-reverse; /* Items wrap to multiple lines in reverse */
}
```

### Flex Flow (Shorthand)
```css
.container {
  flex-flow: row nowrap;    /* Default */
  flex-flow: column wrap;   /* Example combination */
  /* Any valid combination of flex-direction and flex-wrap */
}
```

### Justify Content (Main Axis)
```css
.container {
  justify-content: flex-start;     /* Default - items at start of container */
  justify-content: flex-end;       /* Items at end of container */
  justify-content: center;         /* Items at center of container */
  justify-content: space-between;  /* Items with equal spacing between them */
  justify-content: space-around;   /* Items with equal spacing around them */
  justify-content: space-evenly;   /* Items with equal spacing between and around */
}
```

### Align Items (Cross Axis)
```css
.container {
  align-items: stretch;     /* Default - items stretch to fill container */
  align-items: flex-start;  /* Items aligned at start of cross axis */
  align-items: flex-end;    /* Items aligned at end of cross axis */
  align-items: center;      /* Items centered on cross axis */
  align-items: baseline;    /* Items aligned by their baselines */
}
```

### Align Content (Multiple Lines)
```css
.container {
  align-content: stretch;      /* Default - lines stretch to fill container */
  align-content: flex-start;   /* Lines packed at start of container */
  align-content: flex-end;     /* Lines packed at end of container */
  align-content: center;       /* Lines packed at center of container */
  align-content: space-between; /* Lines with space between them */
  align-content: space-around;  /* Lines with space around them */
  align-content: space-evenly;  /* Lines with equal space between and around */
}
```

### Gap (Spacing Between Items)
```css
.container {
  gap: 10px;               /* Equal gap horizontally and vertically */
  row-gap: 10px;           /* Gap between rows */
  column-gap: 20px;        /* Gap between columns */
  gap: 10px 20px;          /* Row gap, column gap */
}
```

## Item Properties (Children)

### Order
```css
.item {
  order: 0;     /* Default - items appear in source order */
  order: 1;     /* Item appears after default items */
  order: -1;    /* Item appears before default items */
}
```

### Flex Grow
```css
.item {
  flex-grow: 0;    /* Default - item doesn't grow */
  flex-grow: 1;    /* Item grows to fill available space */
  flex-grow: 2;    /* Item grows twice as much as flex-grow: 1 */
}
```

### Flex Shrink
```css
.item {
  flex-shrink: 1;    /* Default - item can shrink if needed */
  flex-shrink: 0;    /* Item cannot shrink */
  flex-shrink: 2;    /* Item shrinks twice as much as default */
}
```

### Flex Basis
```css
.item {
  flex-basis: auto;    /* Default - size based on content */
  flex-basis: 100px;   /* Initial size of 100px */
  flex-basis: 25%;     /* Initial size of 25% of container */
}
```

### Flex (Shorthand)
```css
.item {
  flex: 0 1 auto;    /* Default (flex-grow, flex-shrink, flex-basis) */
  flex: 1;           /* Same as flex: 1 1 0% - item can grow and shrink */
  flex: auto;        /* Same as flex: 1 1 auto */
  flex: none;        /* Same as flex: 0 0 auto - item cannot grow or shrink */
  flex: 1 0 100px;   /* Custom example */
}
```

### Align Self (Override Align Items)
```css
.item {
  align-self: auto;        /* Default - follows parent's align-items */
  align-self: flex-start;  /* Item aligned at start of cross axis */
  align-self: flex-end;    /* Item aligned at end of cross axis */
  align-self: center;      /* Item centered on cross axis */
  align-self: baseline;    /* Item aligned by its baseline */
  align-self: stretch;     /* Item stretches to fill container */
}
```

## Common Flexbox Patterns

### Centering an Element
```css
.container {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center;     /* Center vertically */
}
```

### Navigation Bar
```css
.navbar {
  display: flex;
  justify-content: space-between; /* Space items evenly */
}

/* For a responsive navbar */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
  }
}
```

### Card Layout
```css
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 0 300px; /* Grow, don't shrink, basis of 300px */
}
```

### Holy Grail Layout
```css
.holy-grail {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.holy-grail-header,
.holy-grail-footer {
  flex: 0 0 auto;
}

.holy-grail-body {
  display: flex;
  flex: 1 0 auto;
}

.holy-grail-content {
  flex: 1 0 auto;
}

.holy-grail-nav,
.holy-grail-ads {
  flex: 0 0 200px;
}

.holy-grail-nav {
  order: -1;
}
```

## Browser Support
Flexbox is supported in all modern browsers including:
- Chrome 29+
- Firefox 28+
- Safari 9+
- Edge 12+
- Opera 17+
- iOS Safari 9+
- Android Browser 4.4+
