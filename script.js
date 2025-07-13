fetch('songs.json')
  .then(response => response.json())
  .then(songs => {
    const selector = document.getElementById('songSelector');
    const audio = document.getElementById('audioPlayer');
    const info = document.getElementById('songInfo');

    songs.forEach((song, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${song.title} — ${song.artist}`;
      selector.appendChild(option);
    });

    selector.addEventListener('change', () => {
      const song = songs[selector.value];
      audio.src = song.file;
      info.textContent = `${song.title} by ${song.artist}`;
      audio.play();
    });

    selector.dispatchEvent(new Event('change'));
  });
