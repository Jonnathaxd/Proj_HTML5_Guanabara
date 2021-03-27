let imagem_fixada = './_imagens/glass-oculos-preto-peq.png'
function mudaFoto(src, li){

    document.getElementById('icone').src = src
    li.addEventListener('mouseout', ()=>{
        document.getElementById('icone').src = imagem_fixada
    })
        
    
}


