function startTimer() {
    // Defina a data alvo para a festa de Halloween
    const targetDate = new Date('November 16, 2024 18:00:00').getTime();

    const timer = setInterval(function () {
      const now = new Date().getTime();
      const distance = targetDate - now;

      // Calcule os dias, horas, minutos e segundos
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Exiba o resultado no elemento com id="time"
      document.getElementById('time').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

      // Se o temporizador acabar
      if (distance < 0) {
        clearInterval(timer);
        document.getElementById('time').innerHTML = "Happy Halloween!";
      }
    }, 1000);
  }

  // Iniciar o timer quando a página carregar
  startTimer();