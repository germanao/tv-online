// src/scripts/main.js

$(document).ready(function() {
    const channels = [
        { name: 'Combate', img: 'https://inseries.com.br/wp-content/uploads/2023/12/canal-combate-logo.png', stream: 'https://brflu.walk-tv.com/5865/tracks-v1a1/mono.m3u8' },
        { name: 'Premiere', img: 'https://s3.glbimg.com/v1/AUTH_f486c675dfaf4c6e96c25f0c21f85eb5/prod/home-share-1b75cdaa.png', stream: 'https://brflu.walk-tv.com/5922/tracks-v1a1/mono.m3u8' },
        { name: 'ESPN', img: 'https://lncimg.lance.com.br/cdn-cgi/image/width=1024,height=768,quality=75,fit=pad/uploads/2022/12/21/63a350ff5e2df.png', stream: 'https://brflu.walk-tv.com/5912/tracks-v1a1/mono.m3u8' },
        
        { name: 'FIFA Plus', img: 'https://tvpnlogopeu.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/ITBD1000002HF_20230809T053511SQUARE.png_20230809053512.png', stream: 'https://fac26563.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/TEctYnJfRklGQVBsdXNfSExT/playlist.m3u8' },
        { name: 'TNT', img: 'https://i0.wp.com/assets.b9.com.br/wp-content/uploads/2016/02/tntlogo1.png?fit=1060%2C596&ssl=1', stream: 'https://cdn-3.nxplay.com.br/TNT_TK/index.m3u8' },
        { name: 'TC Premium', img: 'https://s2-globo-play.glbimg.com/BjX8DOLKdpOgNuD7Z8szHZaU42U=/0x1080/https://s2-globo-play.glbimg.com/RTnf6rdQF2eS0lScVyt01huZjDI=/https://i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2022/o/z/OKyHcrRdysj5Jw8IKnCQ/tc-premim-1920x1080.jpg', stream: 'https://brflu.walk-tv.com/5879/tracks-v1a1/mono.m3u8' },
        { name: 'Globo SP', img: 'https://s3.glbimg.com/v1/AUTH_b58693ed41d04a39826739159bf600a0/photos/logo_redes.png', stream: 'https://cdn-3.nxplay.com.br/GLOBO_SP_TK/index.m3u8' },
        { name: 'Globo SP', img: '', stream: 'https://mts1.iptv-playoutcenter.de/mts/mts-web/playlist.m3u8' },
        


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

    // Definir a função playChannel globalmente
    window.playChannel = function(stream) {
        player.src({ src: stream, type: 'application/x-mpegURL' });
        player.play();
        $('#videoModal').modal('show');
    };
});
