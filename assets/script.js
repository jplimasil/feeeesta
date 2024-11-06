function startTimer() {
  // Defina a data alvo para a festa de Halloween
  const targetDate = new Date("November 16, 2024 18:00:00").getTime();

  const timer = setInterval(function () {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calcule os dias, horas, minutos e segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Exiba o resultado no elemento com id="time"
    document.getElementById(
      "time"
    ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Se o temporizador acabar
    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("time").innerHTML = "Happy Halloween!";
    }
  }, 1000);
}

// Iniciar o timer quando a página carregar
startTimer();

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("blood-container");

  // Função para criar uma gota de sangue
  function createBloodDrop() {
    const drop = document.createElement("div");
    drop.classList.add("blood-drop");

    // Define uma posição e características aleatórias para a gota
    drop.style.left = `${Math.random() * 100}vw`;
    drop.style.animationDuration = `${2 + Math.random() * 4}s`; // Tempo de queda aleatório
    drop.style.animationDelay = `${Math.random() * 5}s`; // Atraso antes de cair

    container.appendChild(drop);

    // Remove a gota após o fim da animação para limpar o DOM
    drop.addEventListener("animationend", () => {
      drop.remove();
    });
  }

  // Função para controlar a quantidade de gotas
  function startBloodRain(interval = 400) {
    return setInterval(createBloodDrop, interval); // Define o intervalo de criação
  }

  // Ajuste a quantidade de gotas alterando o valor do intervalo
  const rainInterval = startBloodRain(400); // Ajuste o intervalo para mais ou menos gotas

  // Para parar a animação em algum ponto, você pode usar clearInterval(rainInterval);
});

document.addEventListener("DOMContentLoaded", () => {
  const fogContainer = document.querySelector(".fog-container");

  // Função para criar uma nova camada de neblina
  function createFogLayer(opacity, duration) {
    const fogLayer = document.createElement("div");
    fogLayer.classList.add("fog-layer");
    fogLayer.style.opacity = opacity;
    fogLayer.style.animationDuration = duration;
    fogContainer.appendChild(fogLayer);
  }

  // Criando duas camadas de neblina
  createFogLayer(0.1, "60s");
  createFogLayer(0.2, "90s");
});
