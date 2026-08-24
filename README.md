# QuickFill – Command Palette Autofill

A simple Chrome extension to autofill repetitive data using a command palette.

---

## Customize

Edit your data in:

```js
// content.js
const DATA = {
  l: "your-linkedin",
  g: "your-github",
  e: "your-email",
  p: "your-phone",
  n: "your-name"
};
```

---

## How to Use

1. Click any input field
2. Press `Ctrl + Shift + Space`
3. Type a shortcut (`n`, `e`, `l`, etc.)
4. Press Enter → value gets filled

---

##  Run Locally

1. Open Chrome → `chrome://extensions/`
2. Enable **Developer Mode**
3. Click **Load unpacked**
4. Select this folder

---

## Set Shortcut

1. Go to: `chrome://extensions/shortcuts`
2. Find **QuickFill – Open Autofill Palette**
3. Set it to: **Ctrl + Shift + Space**

---

## Notes

* Works best on standard input fields and textareas
* Some complex sites may require additional tweaks
* This extension is designed for personal productivity use


## 

That’s it.
