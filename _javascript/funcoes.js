window.onload = () => {
  
  if (localStorage.getItem("modo") == null) {
    localStorage.setItem("modo", "claro");
  }
  if (localStorage.getItem("modo") == "escuro") {
    document.getElementById("modo").href = "./_css/night_style.css";
  } else {
    document.getElementById("modo").href = "./_css/estilo.css";
  }
};
let imagem_fixada = document.getElementById("icone").src;
  function mudaFoto(src, li) {
    document.getElementById("icone").src = src;
    li.addEventListener("mouseout", () => {
      document.getElementById("icone").src = imagem_fixada;
    });
  }

function calc_total() {
  let nValor = Number(document.getElementById("cQtd").value);

  document.getElementById("cTot").value = nValor * 1500;
}

function modo() {
  if (localStorage.getItem("modo") == "claro") {
    document.getElementById("modo").href = "./_css/night_style.css";
    localStorage.setItem("modo", "escuro");
    document.getElementById('button_alter').innerText = 'Modo Normal'
  } else {
    document.getElementById("modo").href = "./_css/estilo.css";
    localStorage.setItem("modo", "claro");
    document.getElementById('button_alter').innerText = 'Modo Noturno'
  }
}
