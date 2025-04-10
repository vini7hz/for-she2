function mostrarMensagem() {
    const mensagens = [
      "Te amo mais do que palavras podem dizer. 💖",
      "Você ilumina minha vida como o sol num dia lindo. ☀️",
      "Quero estar com você hoje, amanhã e sempre. 💍",
      "Cada batida do meu coração chama por você. 💓",
      "Sou tão grato(a) por ter você comigo. 🌹"
    ];
    const msg = mensagens[Math.floor(Math.random() * mensagens.length)];
    const mensagemFinal = document.getElementById("mensagemFinal");
    mensagemFinal.textContent = msg;
    mensagemFinal.style.display = 'block';
  }
  