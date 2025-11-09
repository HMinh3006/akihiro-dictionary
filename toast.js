// toast.js
export function showToast(message, type = "info", duration = 3000) {
  const containerId = "toast-container";
  let container = document.getElementById(containerId);
  if (!container) {
    container = document.createElement("div");
    container.id = containerId;
    container.style.position = "fixed";
    container.style.top = "20px";
    container.style.right = "20px";
    container.style.zIndex = "9999";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  toast.style.padding = "12px 18px";
  toast.style.borderRadius = "6px";
  toast.style.color = "#fff";
  toast.style.marginBottom = "10px";
  toast.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
  toast.style.fontFamily = "sans-serif";
  toast.style.transition = "all 0.3s ease";

  switch (type) {
    case "success": toast.style.background = "#28a745"; break;
    case "error": toast.style.background = "#dc3545"; break;
    case "warning": toast.style.background = "#ffc107"; toast.style.color="#111"; break;
    default: toast.style.background = "#007bff";
  }

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 400);
  }, duration);
}
