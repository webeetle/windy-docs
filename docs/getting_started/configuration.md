---
sidebar_position: 2
title: Configuration
---

# Configuration

Windy uses a default theme under the hood to provide you a concise, but still flexible styling experience. This is the default customization:

```json
{
  "badge": {
    "color": "gray",
    "rounded": "full",
    "size": "sm",
    "shadow": "sm",
    "pointer": false
  },
  "button": {
    "layout": "contained",
    "color": "indigo",
    "size": "md",
    "shadow": "md",
    "gradient": true,
    "rounded": "md"
  },
  "dropdown": {
    "size": "md",
    "color": "indigo",
    "layout": "contained",
    "shadow": "md",
    "rounded": "md",
    "caret": true,
    "gradient": true
  },
  "checkbox": {
    "color": "indigo",
    "shadow": true,
    "rounded": true,
    "gradient": true
  },
  "input": {
    "fullWidth": false,
    "color": "gray",
    "shadow": "md",
    "rounded": "md",
    "size": "md"
  },
  "radio": {
    "color": "indigo",
    "shadow": true,
    "gradient": true
  },

  "select": {
    "color": "gray",
    "rounded": "md",
    "shadow": "md"
  },
  "modal": {
    "showCloseButton": true,
    "color": "white",
    "size": "md",
    "rounded": "md"
  },
  "panel": { "layout": "default" }
}
```

You can edit and pass it to the WindyProvider component that is enclosing your root components, using the prop theme.

```jsx
import { WindyProvider } from "@webeetle/windy";
import myTheme from "./myTheme.js";
ReactDOM.render(
  <WindyProvider theme={myTheme}>
    <App />
  </WindyProvider>,
  document.getElementById("root")
);
```

after added `WindyProvider` you are ready to code!
