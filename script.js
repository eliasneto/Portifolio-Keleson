// Abre/fecha os detalhes de cada projeto
document.querySelectorAll(".project-head").forEach((head) => {
  head.addEventListener("click", () => {
    const project = head.closest(".project");
    const open = project.classList.toggle("open");
    head.setAttribute("aria-expanded", String(open));
  });
});

// Tema claro/escuro (lembra a escolha do visitante)
const root = document.documentElement;
try {
  const saved = localStorage.getItem("tema");
  if (saved) root.dataset.theme = saved;
} catch (e) {}

document.getElementById("themeToggle").addEventListener("click", () => {
  const atual = root.dataset.theme ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const novo = atual === "dark" ? "light" : "dark";
  root.dataset.theme = novo;
  try { localStorage.setItem("tema", novo); } catch (e) {}
});

document.getElementById("ano").textContent = new Date().getFullYear();
