const SpotifyPlayer = () => {
    return (<div className="spotify-player">
       <iframe
                src="https://open.spotify.com/embed/playlist/6Jehxo4XAdg1hEC8SWYJnz?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            >
            </iframe>
    </div>)
}

export default SpotifyPlayer;