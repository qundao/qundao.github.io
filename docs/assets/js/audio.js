document.addEventListener('DOMContentLoaded', function () {
  const playButtons = document.querySelectorAll('.play-button');

  playButtons.forEach(function (playButton) {
    playButton.addEventListener('click', function () {
      var audio = this.nextElementSibling;
      audio.play();
    });
  });
});
