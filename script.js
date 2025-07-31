function openLetter() {
  document.querySelector('.envelope').style.display = 'none';
  document.getElementById('letter').classList.remove('hidden');

  const audio = document.getElementById('bg-music');
  if (audio) {
    audio.play().catch(error => {
      console.warn("Autoplay blocked or error playing audio:", error);
    });
  }
}
