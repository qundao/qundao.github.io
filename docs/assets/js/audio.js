document.addEventListener('DOMContentLoaded', function () {
  const playButtons = document.querySelectorAll('.play-button');

  playButtons.forEach(function (playButton) {
    playButton.addEventListener('click', function () {
      // not work in safari
      // const audio = this.nextElementSibling;
      // audio.play();

      // update
      const audioElement = this.nextElementSibling;
      if (audioElement) {
        const audioUrl = audioElement.querySelector("source").src;
        const audio = new Audio(audioUrl);
        audio.play();
      }
    });
  });
});
