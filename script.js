const form = document.getElementById("medForm");
const lista = document.getElementById("lista");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const hora = document.getElementById("hora").value;
  const cor = document.getElementById("cor").value || "#ffffff";
  const imagemInput = document.getElementById("imagem");

  let imagemURL = null;
  if (imagemInput.files && imagemInput.files[0]) {
    imagemURL = URL.createObjectURL(imagemInput.files[0]);
  }

  const li = document.createElement("li");
  li.className = "remedio-card";
  li.style.borderLeft = `10px solid ${cor}`;

  if (imagemURL) {
    const img = document.createElement("img");
    img.src = imagemURL;
    img.alt = "Remédio";
    li.appendChild(img);
  }

  const info = document.createElement("div");
  info.innerHTML = `<strong>${nome}</strong><br/>Horário: ${hora}`;
  li.appendChild(info);

  lista.appendChild(li);

  form.reset();
});
