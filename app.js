const horas = document.querySelector('#horas');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');
const dia = document.querySelector('#dia');
const mes = document.querySelector('#mes');
const ano = document.querySelector('#ano');
const mensagem = document.querySelector('#saudacao');
const corpo = document.querySelector('body');


// Chama a função para atualizar o relógio a cada segundo
setInterval(atualizarRelogio, 1000);


function atualizarRelogio(){
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let day = now.getDate();
    let mounth = now.getMonth() + 1;
    let year = now.getFullYear();

    // Corrigir o erro de digitação 'toSting' para 'toString'
    h = h < 10 ? '0' + h : h.toString();
    m = m < 10 ? '0' + m : m.toString();
    s = s < 10 ? '0' + s : s.toString();
    day = day < 10 ? '0' + day : day.toString();
    mounth = mounth < 10 ? '0' + mounth : mounth.toString();
  
    if(h>= 5 && h <12){
        mensagem.textContent = 'Bom dia!'
        corpo.className = 'dia';
    }else if(h >= 13 && h < 18){
        mensagem.textContent = 'Boa tarde!';
        corpo.className = 'dia';
    }
    else{
        mensagem.textContent = 'Boa noite!';
        corpo.className = 'noite';
    }
    
    // Atualizando o conteúdo no HTML
    horas.textContent = h;
    minutos.textContent = m;
    segundos.textContent = s;
    dia.textContent = day;
    mes.textContent = mounth;
    ano.textContent = year;
}



