## 🚀 Getting Started with Vite + React + Tailwind CSS

### 📦 Install Dependencies

#### 🔷 CMD (Command Prompt)
```cmd
npm install && npm install tailwindcss @tailwindcss/vite && npm run dev
```

#### 🔶 PowerShell
```powershell
npm install; npm install tailwindcss @tailwindcss/vite; npm run dev
```

#### 🐧 Bash / Git Bash / WSL / macOS / Linux
```bash
npm install && npm install tailwindcss @tailwindcss/vite && npm run dev
```

### ⚙️ `vite.config.js`

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

### 🎨 `index.css` (or `App.css`)

```css
@import "tailwindcss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  width: 100%;
}
```
