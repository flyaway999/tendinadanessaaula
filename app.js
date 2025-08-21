import {initializeApp} from "firebase/app";
import { getMessaging, onBackgroundMessage } from "firebase/messaging/sw";
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registrado com sucesso:', registration);
      })
      .catch(error => {
        console.log('Falha no registro do Service Worker:', error);
      });
  });
}
const firebaseConfig = {
  apiKey: "AIzaSyCcGgE5ckglZiCbV75y4zfW1ZgPll9TQl4",
  authDomain: "minha-pwa-dfad7.firebaseapp.com",
  projectId: "minha-pwa-dfad7",
  storageBucket: "minha-pwa-dfad7.appspot.com",
  messagingSenderId: "73230844599",
  appId: "1:73230844599:web:0e6750f6199ef022ef0332"
};

const app = initializeApp(firebaseConfig);
//firebase.initializeApp(firebaseConfig);
const messaging = getMessaging(app);

Notification.requestPermission().then(function(permission) {
  if (permission === 'granted') {
      console.log('Permissão concedida para exibir notificações');
  } else {
      console.error('Permissão negada para exibir notificações');
  }
});
function requestPushNotificationPermission() {
  messaging.getToken({ vapidKey: 'AIzaSyCcGgE5ckglZiCbV75y4zfW1ZgPll9TQl4' })  // Substitua pela sua chave pública VAPID
    .then((currentToken) => {
      if (currentToken) {
        console.log('Token de Push gerado:', currentToken);
        // Aqui, você pode enviar o token para seu back-end ou salvar em um banco de dados
      } else {
        console.log('Nenhum token disponível. Solicite permissão para notificações.');
      }
    })
    .catch((err) => {
      console.log('Erro ao gerar token:', err);
    });
}

// Monitorar quando uma mensagem de push é recebida enquanto o app está em primeiro plano

onMessage(messaging, (payload) => {
  console.log('Mensagem recebida enquanto o app está em execução:', payload);
});


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registrado com sucesso:', registration);
      })
      .catch(error => {
        console.log('Falha no registro do Service Worker:', error);
      });
  });
}
