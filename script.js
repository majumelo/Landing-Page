// --- MENU MOBILE ---
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// validaçao
const form = document.getElementById("form-contato");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  
  form.querySelectorAll(".erro").forEach((el) => el.remove());
  form.querySelectorAll("input, textarea").forEach((el) => {
    el.style.border = "1px solid var(--border-color)"; // reset borda
  });

  let valido = true;

  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const mensagem = document.getElementById("mensagem");

  if (nome.value.trim() === "") {
    mostrarErro(nome, "Por favor, preencha seu nome.");
    valido = false;
  }

  if (email.value.trim() === "") {
    mostrarErro(email, "Por favor, insira seu e-mail.");
    valido = false;
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      mostrarErro(email, "Por favor, insira um e-mail válido.");
      valido = false;
    }
  }

  if (mensagem.value.trim() === "") {
    mostrarErro(mensagem, "Por favor, escreva sua mensagem.");
    valido = false;
  }

  if (valido) {
    form.reset();
    const sucesso = document.createElement("p");
    sucesso.textContent = "Mensagem enviada com sucesso!";
    sucesso.style.color = "green";
    sucesso.style.fontWeight = "600";
    form.appendChild(sucesso);

    setTimeout(() => sucesso.remove(), 4000);
  }
});

function mostrarErro(campo, mensagem) {
  const span = document.createElement("span");
  span.classList.add("erro");
  span.style.color = "red";
  span.style.fontSize = "0.9rem";
  span.textContent = mensagem;
  campo.style.border = "2px solid red";
  campo.insertAdjacentElement("afterend", span);
}

// Seleciona o botão
const backToTopButton = document.getElementById('voltar-topo');

// Mostra/oculta o botão baseado na rolagem
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Aparece após rolar 300px
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Função para voltar ao topo
backToTopButton.addEventListener('click', (e) => {
    e.preventDefault(); // Evita comportamento padrão do link
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});