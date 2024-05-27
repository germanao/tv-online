document.addEventListener('DOMContentLoaded', function() {
    const liveVideo = document.getElementById('live-video');

    // URL do stream do Anime TV
    const streamUrl = "http://45.95.66.9:80/movie/Formigatv/offilinetv2301/344233.mp4";

    // Inicializar o Video.js para o vídeo
    const player = videojs('live-video', {
        html5: {
            hls: {
                overrideNative: true
            }
        }
    });

    // Carregar o stream no player
    player.src({
        src: streamUrl,
        type: 'application/x-mpegURL'
    });

    // Iniciar a reprodução
    player.ready(function() {
        player.play();
    });
});