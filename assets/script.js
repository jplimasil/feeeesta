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

  document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".blood-drops-container");

  function createBloodDrop() {
    const drop = document.createElement("div");
    drop.classList.add("blood-drop");

    // Define posição aleatória para cada gota
    drop.style.left = `${Math.random() * 100}vw`;
    drop.style.animationDuration = `${2 + Math.random() * 4}s`; // Duração aleatória da animação
    drop.style.animationDelay = `${Math.random() * 5}s`; // Atraso aleatório para a animação

    container.appendChild(drop);

    // Remove a gota após a animação
    drop.addEventListener("animationend", () => {
      drop.remove();
    });
  }

  // Gera gotas de sangue continuamente
  setInterval(createBloodDrop, 500); // Intervalo para criação de novas gotas
});
