# Routes

The application uses Vite and React without a router. It has one URL route and uses anchor navigation for sections.

| URL | Entry | Layout |
| --- | --- | --- |
| `/` | `src/main.tsx` -> `src/App.tsx` | Inline `App` shell |

## Anchor sections

`#home`, `#about`, `#education`, `#experience`, `#courses`, `#projects`, `#skills`, `#certificates`, `#documents`, `#github`, and `#contact`.

## Full entry source

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

## Full Vite config

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
```
