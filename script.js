function mostrarMensagem() {
    const mensagens = [
      "EU te amo mais do que palavras podem dizer. 💖",
      "Quero estar com você hoje, amanhã e sempre. 💍",
      "Cada batida do meu coração chama por você. 💓",
      "Sou tão grato por ter você comigo. 🌹",
      "Com Amor, seu  'namorado', bb, totoso e seu margarina :) "
    ];
    const msg = mensagens[Math.floor(Math.random() * mensagens.length)];
    const mensagemFinal = document.getElementById("mensagemFinal");
    mensagemFinal.textContent = msg;
    mensagemFinal.style.display = 'block';
  }
  