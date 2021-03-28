let imagem_fixada = document.getElementById("icone").src;
function mudaFoto(src, li) {
  document.getElementById("icone").src = src;
  li.addEventListener("mouseout", () => {
    document.getElementById("icone").src = imagem_fixada;
  });
}

function calc_total(){
  let nValor = Number(document.getElementById('cQtd').value)

  document.getElementById('cTot').value = nValor * 1500
}