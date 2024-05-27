$(document).ready(function() {
    const channels = [
        { name: 'Combate', img: 'https://inseries.com.br/wp-content/uploads/2023/12/canal-combate-logo.png', stream: 'https://brflu.walk-tv.com/5865/tracks-v1a1/mono.m3u8' },
        { name: 'Premiere', img: 'https://s3.glbimg.com/v1/AUTH_f486c675dfaf4c6e96c25f0c21f85eb5/prod/home-share-1b75cdaa.png', stream: 'https://brflu.walk-tv.com/5922/tracks-v1a1/mono.m3u8' },
        // Adicione mais canais conforme necessário
    ];

    channels.forEach(channel => {
        $('#channels').append(`
            <div class="col-md-3 mb-4">
                <div class="card">
                    <img src="${channel.img}" class="card-img-top" alt="Imagem do ${channel.name}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${channel.name}</h5>
                        <button class="btn btn-primary" onclick="playChannel('${channel.stream}')">Assistir</button>
                    </div>
                </div>
            </div>
        `);
    });

    // Inicializar o Video.js uma vez
    const player = videojs('video-player');

    // Pausar o vídeo quando o modal for fechado
    $('#videoModal').on('hidden.bs.modal', function () {
        player.pause();
        player.currentTime(0); // Reseta o vídeo para o início
    });
});

function playChannel(stream) {
    const player = videojs('video-player');
    player.src({ src: stream, type: 'application/x-mpegURL' });
    player.play();
    $('#videoModal').modal('show');
}