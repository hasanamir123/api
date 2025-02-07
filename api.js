if (window.location.hostname !== "websim.ai") {
  window.location.href = "https://example.com";
}

  var script1 = document.createElement('script');
  script1.src = 'https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js';
  document.head.appendChild(script1);

  var script2 = document.createElement('script');
  script2.src = 'https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js';
  document.head.appendChild(script2);

  var script3 = document.createElement('script');
  script3.src = 'https://www.gstatic.com/firebasejs/8.10.1/firebase-database.js';
  document.head.appendChild(script3);

  var script4 = document.createElement('script');
  script4.src = 'https://www.gstatic.com/firebasejs/8.10.1/firebase-storage.js';
  document.head.appendChild(script4);

  var script5 = document.createElement('script');
  script5.src = 'https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js';
  document.head.appendChild(script5);

  script5.onload = function() {
    firebase.initializeApp({
      apiKey: "AIzaSyB5bGsB3EmQOLeiut50ggGBkb7SrPnYFmk",
      authDomain: "mtrgm3.firebaseapp.com",
      databaseURL: "https://mtrgm3-default-rtdb.firebaseio.com",
      projectId: "mtrgm3",
      storageBucket: "mtrgm3.appspot.com",
      messagingSenderId: "240177695731",
      appId: "1:240177695731:web:c9b8e64e6349cf66946086"
    });
  };
