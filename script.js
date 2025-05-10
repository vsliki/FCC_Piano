document.addEventListener("DOMContentLoaded", () => {
    const keys = document.querySelectorAll(".white-key, .black-key");
  
    function playSound(note) {
      const fileSafeNote = note.replace("#", "sharp");
      const path = `sounds/${fileSafeNote}.mp3`;
      console.log("Lecture de :", path);
      const audio = new Audio(path);
      audio.play();
    }
  
    keys.forEach(key => {
      key.addEventListener("click", () => {
        const note = key.dataset.note;
        console.log("Note cliquée :", note);
        playSound(note);
      });
    });
  });
  
