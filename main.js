document.addEventListener("DOMContentLoaded", function () {
    // Carrossel de vídeos (fundo)
    const bannerVideos = document.querySelectorAll(".banner-video");
    let currentVideoIndex = 0;

    // Função para mostrar o vídeo ativo
    function showBannerVideo(index) {
        bannerVideos.forEach((video, i) => {
            video.style.opacity = "0"; // Remove todos os vídeos
            if (i === index) {
                video.style.opacity = "1"; // Exibe o vídeo atual
            }
        });
    }

    // Função para alternar para o próximo vídeo
    function nextBannerVideo() {
        currentVideoIndex = (currentVideoIndex + 1) % bannerVideos.length; // Vai de 0 a 1
        showBannerVideo(currentVideoIndex);
    }

    // Exibe o primeiro vídeo
    showBannerVideo(currentVideoIndex);

    // Muda o vídeo automaticamente a cada 5 segundos
    setInterval(nextBannerVideo, 5000);
});
