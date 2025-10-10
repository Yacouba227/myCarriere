// Script simple pour le menu mobile
    function toggleMenu(){
      const nav = document.querySelector('nav');
      if(!nav) return;
      if(nav.style.display === 'flex') nav.style.display = '';
      else nav.style.display = 'flex';
    }

    // Formulaire : ici on simule envoi (remplace par fetch si tu as un backend)
    function handleSubmit(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const feedback = document.getElementById('formFeedback');

      if(!name || !email || !message){
        feedback.textContent = 'Merci de remplir tous les champs.';
        return;
      }

      // Exemple : ouvrir le client mail (fallback simple)
      const subject = encodeURIComponent('Contact depuis le portfolio — ' + name);
      const body = encodeURIComponent(message + '\n\n--\n' + name + ' — ' + email);
      window.location.href = 'mailto:halidouyacouba999@gmail.com?subject=' + subject + '&body=' + body;
      //feedback.textContent = "Le message va s'ouvrir dans votre client mail. (ou configure une API pour l'envoyer directement)";
    }

    // Insérer l'année courante
    document.getElementById('year').textContent = new Date().getFullYear();