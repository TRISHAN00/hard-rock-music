const searchSongsDisplay = () => {
    const searchSongs = document.querySelector('#search-song-box').value
    const url = `https://api.lyrics.ovh/suggest/${searchSongs}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySongs(data.data))
}

const displaySongs = songs => {
    const singleSong = document.getElementById('displaySongsWrap')

    songs.forEach(song => {
        const songItemDiv = document.createElement('div')
        songItemDiv.className = 'single-result row align-items-center my-3 p-3'
        songItemDiv.innerHTML = `
        <div class="col-md-9">
            <h3 class="lyrics-name">${song.title}</h3>
            <p class="author lead">Album by <span>${song.artist.name}</span></p>
        </div>
        <div class="col-md-3 text-md-right text-center">
            <button class="btn btn-success">Get Lyrics</button>
        </div>
        <audio controls>
            <source src="${song.preview}" type="audio/mpeg">
        </audio>
        `
        singleSong.appendChild(songItemDiv)
    })
}