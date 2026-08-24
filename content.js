if (!document.getElementById("quickfill-overlay")) {

// ---- Your data ----
const DATA = {
  l: "https://www.linkedin.com/in",
  g: "https://github.com/id",
  e: "yourmail@gmail.com",
  p: "+91 9999999999",
  n: "Full Name"
  // can add any more details 
};

// ---- Capture the element BEFORE opening palette ----
const targetElement = document.activeElement;

// ---- Create overlay ----
const overlay = document.createElement("div");
overlay.id = "quickfill-overlay";

overlay.style = `
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999999;
  background: #1e1e1e;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
`;

// ---- Input ----
const input = document.createElement("input");
input.placeholder = "Type shortcut (l, g, e...)";
input.style = `
  padding: 10px;
  width: 300px;
  border: none;
  outline: none;
  font-size: 14px;
  color: white;
  background: transparent;
`;

overlay.appendChild(input);
document.body.appendChild(overlay);
input.focus();

// ---- Handle Enter ----
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const val = DATA[input.value.trim()];

    if (!val) {
      setTimeout(() => overlay.remove(), 100);
      return;
    }

    if (targetElement) {
      targetElement.focus();

      if ("value" in targetElement) {
        targetElement.value = val;
        targetElement.dispatchEvent(new Event("input", { bubbles: true }));
      } else if (targetElement.isContentEditable) {
        document.execCommand("insertText", false, val);
      }
    }

    setTimeout(() => overlay.remove(), 100);
  }

  if (e.key === "Escape") {
    setTimeout(() => overlay.remove(), 100);
  }
});
}