// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBaXkVM88qtPCCqF6PsplCOJtJLq0jUN-M",
  authDomain: "bloodhalloween-4247c.firebaseapp.com",
  projectId: "bloodhalloween-4247c",
  storageBucket: "bloodhalloween-4247c.firebasestorage.app",
  messagingSenderId: "941821691107",
  appId: "1:941821691107:web:cc930037e6108890fb71d6",
  measurementId: "G-4MZSHSSPWQ"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Variável para armazenar a lista de convidados
let confirmedGuests = [];

// Função para carregar e exibir os convidados confirmados
function loadConfirmedGuests() {
  const confirmedContainer = document.getElementById("convidados-list");

  // Limpa o conteúdo da div antes de adicionar novos convidados
  confirmedContainer.innerHTML = "";

  db.collection("confirmados").get().then((querySnapshot) => {
      confirmedGuests = []; // Limpa a lista de convidados
      querySnapshot.forEach((doc) => {
          const guest = doc.data();
          confirmedGuests.push(guest.name); // Armazena o nome do convidado na lista
      });

      // Organiza os nomes em ordem alfabética
      confirmedGuests.sort((a, b) => a.localeCompare(b));

      // Adiciona os convidados ao DOM
      confirmedGuests.forEach(name => {
          const guestElement = document.createElement("div");
          guestElement.classList.add("guest-item");
          guestElement.innerHTML = `
              <span class="pumpkin-emoji">🩸</span>
              <span class="guest-name">${name} <span style="margin-left: 5px;"></span></span>
          `;
          confirmedContainer.appendChild(guestElement);
      });
  }).catch((error) => {
      console.error("Erro ao carregar os convidados confirmados:", error);
  });
}

// Carregar os convidados ao carregar a página
window.addEventListener("DOMContentLoaded", loadConfirmedGuests);
