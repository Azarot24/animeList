function getData(){
    return fetch('https://api.jikan.moe/v3/genre/anime/1')
    .then(response => response.json())
    .then(data => data.anime)
}

export {getData};