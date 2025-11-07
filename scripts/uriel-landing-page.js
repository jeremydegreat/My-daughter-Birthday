document.addEventListener('DOMContentLoaded', () => {
    /* ----------  MEDIA LIST ---------- */
    const media = [
        { type: 'img', src: 'assets/images/image1.jpg' },
        { type: 'vid', src: 'assets/videos/vid1.mp4' },
        { type: 'img', src: 'assets/images/image2.jpg' },
        { type: 'img', src: 'assets/images/image3.jpg' },
        { type: 'vid', src: 'assets/videos/vid2.mp4' },
        { type: 'img', src: 'assets/images/image4.jpg' },
        { type: 'img', src: 'assets/images/image5.jpg' },
        { type: 'img', src: 'assets/images/image6.jpg' },
        { type: 'img', src: 'assets/images/image7.jpg' },
        { type: 'vid', src: 'assets/videos/vid3.mp4' },
        { type: 'img', src: 'assets/images/image8.jpg' },
        { type: 'img', src: 'assets/images/image9.jpg' },
        { type: 'img', src: 'assets/images/image10.jpg' },
        { type: 'vid', src: 'assets/videos/vid4.mp4' },
        { type: 'img', src: 'assets/images/image11.jpg' },
        { type: 'img', src: 'assets/images/image12.jpg' },
        { type: 'img', src: 'assets/images/image13.jpg' },
        { type: 'img', src: 'assets/images/image14.jpg' },
        { type: 'vid', src: 'assets/videos/vid5.mp4' },
        { type: 'img', src: 'assets/images/image15.jpg' },
        { type: 'img', src: 'assets/images/image16.jpg' },
        { type: 'img', src: 'assets/images/image17.jpg' },
        { type: 'img', src: 'assets/images/image18.jpg' },
        { type: 'img', src: 'assets/images/image19.jpg' },
        { type: 'vid', src: 'assets/videos/vid6.mp4' },
        { type: 'img', src: 'assets/images/image20.jpg' },
        { type: 'img', src: 'assets/images/image21.jpg' },
        { type: 'img', src: 'assets/images/image22.jpg' },
        { type: 'img', src: 'assets/images/image23.jpg' },
        { type: 'img', src: 'assets/images/image24.jpg' },
        { type: 'img', src: 'assets/images/image25.jpg' },
        { type: 'vid', src: 'assets/videos/vid7.mp4' },
        { type: 'img', src: 'assets/images/image26.jpg' },
        { type: 'img', src: 'assets/images/image27.jpg' },
        { type: 'img', src: 'assets/images/image28.jpg' },
        { type: 'img', src: 'assets/images/image29.jpg' },
        { type: 'img', src: 'assets/images/image30.jpg' },
        { type: 'vid', src: 'assets/videos/vid8.mp4' },
        { type: 'img', src: 'assets/images/image31.jpg' },
        { type: 'img', src: 'assets/images/image32.jpg' },
        { type: 'img', src: 'assets/images/image33.jpg' },
        { type: 'img', src: 'assets/images/image34.jpg' },
        { type: 'img', src: 'assets/images/image35.jpg' },
        { type: 'img', src: 'assets/images/image36.jpg' },
        { type: 'vid', src: 'assets/videos/vid9.mp4' },
        { type: 'img', src: 'assets/images/image37.jpg' },
        { type: 'img', src: 'assets/images/image38.jpg' },
        { type: 'img', src: 'assets/images/image39.jpg' },
        { type: 'img', src: 'assets/images/image40.jpg' },
        { type: 'vid', src: 'assets/videos/vid10.mp4' },
        { type: 'img', src: 'assets/images/image41.jpg' },
        { type: 'img', src: 'assets/images/image42.jpg' },
        { type: 'img', src: 'assets/images/image43.jpg' },
        { type: 'img', src: 'assets/images/image44.jpg' },
        { type: 'img', src: 'assets/images/image45.jpg' },
        { type: 'img', src: 'assets/images/image46.jpg' },
        { type: 'img', src: 'assets/images/image47.jpg' },
        { type: 'img', src: 'assets/images/image48.jpg' },
        { type: 'vid', src: 'assets/videos/vid11.mp4' },
        { type: 'img', src: 'assets/images/image49.jpg' },
        { type: 'img', src: 'assets/images/image50.jpg' },
        { type: 'img', src: 'assets/images/image51.jpg' },
        { type: 'img', src: 'assets/images/image52.jpg' },
        { type: 'img', src: 'assets/images/image53.jpg' },
        { type: 'img', src: 'assets/images/image54.jpg' },
        { type: 'img', src: 'assets/images/image55.jpg' },
        { type: 'vid', src: 'assets/videos/vid12.mp4' },
        { type: 'img', src: 'assets/images/image56.jpg' },
        { type: 'img', src: 'assets/images/image57.jpg' },
        { type: 'img', src: 'assets/images/image58.jpg' },
        { type: 'img', src: 'assets/images/image59.jpg' },
        { type: 'img', src: 'assets/images/image60.jpg' },
        { type: 'img', src: 'assets/images/image61.jpg' },
        { type: 'img', src: 'assets/images/image62.jpg' },
        { type: 'img', src: 'assets/images/image63.jpg' },
        { type: 'img', src: 'assets/images/image64.jpg' },
        { type: 'img', src: 'assets/images/image65.jpg' },
        { type: 'img', src: 'assets/images/image66.jpg' },
        { type: 'img', src: 'assets/images/image67.jpg' },
        { type: 'img', src: 'assets/images/image68.jpg' },
        { type: 'img', src: 'assets/images/image69.jpg' },
        { type: 'img', src: 'assets/images/image70.jpg' },
        { type: 'vid', src: 'assets/videos/vid13.mp4' },
        { type: 'img', src: 'assets/images/image71.jpg' },
        { type: 'img', src: 'assets/images/image72.jpg' },
        { type: 'img', src: 'assets/images/image73.jpg' },
        { type: 'img', src: 'assets/images/image74.jpg' },
        { type: 'img', src: 'assets/images/image75.jpg' },
        { type: 'img', src: 'assets/images/image76.jpg' },
        { type: 'img', src: 'assets/images/image77.jpg' },
        { type: 'img', src: 'assets/images/image78.jpg' },
        { type: 'img', src: 'assets/images/image79.jpg' },
        { type: 'img', src: 'assets/images/image80.jpg' },
        { type: 'vid', src: 'assets/videos/vid14.mp4' },
        { type: 'img', src: 'assets/images/image81.jpg' },
        { type: 'img', src: 'assets/images/image82.jpg' },
        { type: 'img', src: 'assets/images/image83.jpg' },
        { type: 'img', src: 'assets/images/image84.jpg' },
        { type: 'img', src: 'assets/images/image85.jpg' },
        { type: 'img', src: 'assets/images/image86.jpg' },
        { type: 'vid', src: 'assets/videos/vid15.mp4' },
        { type: 'img', src: 'assets/images/image87.jpg' },
        { type: 'img', src: 'assets/images/image88.jpg' },
        { type: 'img', src: 'assets/images/image89.jpg' },
        { type: 'img', src: 'assets/images/image90.jpg' },
        { type: 'img', src: 'assets/images/image91.jpg' },
        { type: 'img', src: 'assets/images/image92.jpg' },
        { type: 'img', src: 'assets/images/image93.jpg' },
        { type: 'vid', src: 'assets/videos/vid16.mp4' },
        { type: 'img', src: 'assets/images/image94.jpg' },
        { type: 'img', src: 'assets/images/image95.jpg' },
        { type: 'img', src: 'assets/images/image96.jpg' },
];

    /* ----------  SLIDESHOW ---------- */
    const slideshow = document.getElementById('slideshow');
    if (!slideshow) return;

    // Create slides
    media.forEach((m, i) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        if (i === 0) slide.classList.add('active');

        const el = m.type === 'vid'
            ? Object.assign(document.createElement('video'), {
                muted: true,
                loop: true,
                src: m.src
            })
            : Object.assign(document.createElement('img'), {
                src: m.src,
                alt: 'Uriel memory'
            });

        slide.appendChild(el);
        slideshow.appendChild(slide);
    });

    const slides = slideshow.querySelectorAll('.slide');
    let current = 0;
    const DURATION = 5000;

    function nextSlide() {
        slides[current].classList.remove('active');
        const vid = slides[current].querySelector('video');
        if (vid) {
            vid.pause();
            vid.currentTime = 0;
        }
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
        const nextVid = slides[current].querySelector('video');
        if (nextVid) nextVid.play();
    }

    /* ----------  LOVE SPARKLE ON HOVER ---------- */
    const sparkles = document.getElementById('sparkles');
    if (sparkles) {
        document.body.addEventListener('mousemove', e => {
            if (Math.random() > .92) { // throttle
                const s = document.createElement('div');
                s.className = 'sparkle';
                s.style.left = e.clientX + 'px';
                s.style.top = e.clientY + 'px';
                s.style.setProperty('--tx', (Math.random() - 0.5) * 80 + 'px');
                s.style.setProperty('--ty', (Math.random() - 0.5) * 80 + 'px');
                sparkles.appendChild(s);
                setTimeout(() => s.remove(), 1200);
            }
        });
    }

    /* ----------  MUSIC ---------- */
    const bgMusic = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicBtn');

    if (bgMusic && musicBtn) {
        bgMusic.volume = 0.3;
        musicBtn.onclick = () => {
            if (bgMusic.paused) bgMusic.play();
            else bgMusic.pause();
        };

        // Handle autoplay
        window.addEventListener('load', async () => {
            try {
                await bgMusic.play();
            } catch {
                document.body.addEventListener('click', () => bgMusic.play(), { once: true });
            }
        });
    }

    // Start slideshow
    const firstVid = slides[0].querySelector('video');
    if (firstVid) firstVid.play();
    setInterval(nextSlide, DURATION);
});