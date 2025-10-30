// Media list – relative to assets/ folder
const media = [
    { type: 'vid', src: 'assets/videos/vid1.mp4' },
    { type: 'img', src: 'assets/images/image2.jpg' },
    { type: 'img', src: 'assets/images/image3.jpg' },
    { type: 'img', src: 'assets/images/vid2.mp4' },
    { type: 'img', src: 'assets/images/image4.jpg' },
    { type: 'img', src: 'assets/images/image5.jpg' },
    { type: 'img', src: 'assets/images/image6.jpg' },
    { type: 'img', src: 'assets/images/image7.jpg' },
    { type: 'img', src: 'assets/videos/vid3.mp4' },
    { type: 'img', src: 'assets/images/image8.jpg' },
    { type: 'img', src: 'assets/images/image9.jpg' },
    { type: 'img', src: 'assets/images/image10.jpg' },
    { type: 'img', src: 'assets/videos/vid4.mp4' },
    { type: 'img', src: 'assets/images/image11.jpg' },
    { type: 'img', src: 'assets/images/image12.jpg' },
    { type: 'img', src: 'assets/images/image13.jpg' },
    { type: 'img', src: 'assets/images/image14.jpg' },
    { type: 'img', src: 'assets/videos/vid5.mp4' },
    { type: 'img', src: 'assets/images/image15.jpg' },
    { type: 'img', src: 'assets/images/image16.jpg' },
    { type: 'img', src: 'assets/images/image17.jpg' },
    { type: 'img', src: 'assets/images/image18.jpg' },
    { type: 'img', src: 'assets/images/image19.jpg' },
    { type: 'img', src: 'assets/videos/vid6.mp4' },
    { type: 'img', src: 'assets/images/image20.jpg' },
    { type: 'img', src: 'assets/images/image21.jpg' },
    { type: 'img', src: 'assets/images/image22.jpg' },
    { type: 'img', src: 'assets/images/image23.jpg' },
    { type: 'img', src: 'assets/images/image24.jpg' },
    { type: 'img', src: 'assets/images/image25.jpg' },
    { type: 'img', src: 'assets/videos/vid7.mp4' },
    { type: 'img', src: 'assets/images/image26.jpg' },
    { type: 'img', src: 'assets/images/image27.jpg' },
    { type: 'img', src: 'assets/images/image28.jpg' },
    { type: 'img', src: 'assets/images/image29.jpg' },
    { type: 'img', src: 'assets/images/image30.jpg' },
    { type: 'img', src: 'assets/videos/vid8.mp4' },
    { type: 'img', src: 'assets/images/image31.jpg' },
    { type: 'img', src: 'assets/images/image32.jpg' },
    { type: 'img', src: 'assets/images/image33.jpg' },
    { type: 'img', src: 'assets/images/image34.jpg' },
    { type: 'img', src: 'assets/images/image35.jpg' },
    { type: 'img', src: 'assets/images/image36.jpg' },
    { type: 'img', src: 'assets/videos/vid9.mp4' },
    { type: 'img', src: 'assets/images/image37.jpg' },
    { type: 'img', src: 'assets/images/image38.jpg' },
    { type: 'img', src: 'assets/images/image39.jpg' },
    { type: 'img', src: 'assets/images/image40.jpg' },
    { type: 'img', src: 'assets/videos/vid10.mp4' },
    { type: 'img', src: 'assets/images/image41.jpg' },
    { type: 'img', src: 'assets/images/image42.jpg' },
    { type: 'img', src: 'assets/images/image43.jpg' },
    { type: 'img', src: 'assets/images/image44.jpg' },
    { type: 'img', src: 'assets/images/image45.jpg' },
    { type: 'img', src: 'assets/images/image46.jpg' },
    { type: 'img', src: 'assets/images/image47.jpg' },
    { type: 'img', src: 'assets/images/image48.jpg' },
    { type: 'img', src: 'assets/videos/vid11.mp4' },
    { type: 'img', src: 'assets/images/image49.jpg' },
    { type: 'img', src: 'assets/images/image50.jpg' },
    { type: 'img', src: 'assets/images/image51.jpg' },
    { type: 'img', src: 'assets/images/image52.jpg' },
    { type: 'img', src: 'assets/images/image53.jpg' },
    { type: 'img', src: 'assets/images/image54.jpg' },
    { type: 'img', src: 'assets/images/image55.jpg' },
    { type: 'img', src: 'assets/videos/vid7.mp4' },
    { type: 'img', src: 'assets/images/image56.jpg' },
    { type: 'img', src: 'assets/images/image57.jpg' },
    { type: 'img', src: 'assets/images/image58.jpg' },
    { type: 'img', src: 'assets/images/image59.jpg' },
    { type: 'img', src: 'assets/images/image60.jpg' },


    
];

// ----------  BUILD SLIDESHOW  ----------
const slideshow = document.getElementById('slideshow');
media.forEach((m, i) => {
    const slide = document.createElement('div');
    slide.className = 'slide';
    if (i === 0) slide.classList.add('active');

    const el = m.type === 'vid'
        ? Object.assign(document.createElement('video'), { muted: true, loop: true, src: m.src })
        : Object.assign(document.createElement('img'), { src: m.src, alt: 'Kumju Memory' });

    slide.appendChild(el);
    slideshow.appendChild(slide);
});

const slides = slideshow.querySelectorAll('.slide');
let current = 0;
const SLIDE_DURATION = 5000; // 5 s

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

function startSlideshow() {
    const firstVid = slides[0].querySelector('video');
    if (firstVid) firstVid.play();
    setInterval(nextSlide, SLIDE_DURATION);
}

// ----------  FLOATING HEARTS  ----------
function createHeart() {
    const h = document.createElement('div');
    h.className = 'heart';
    h.style.left = Math.random() * 100 + '%';
    h.style.animationDelay = Math.random() * 5 + 's';
    h.style.animationDuration = (20 + Math.random() * 10) + 's';
    document.getElementById('hearts').appendChild(h);
    setTimeout(() => h.remove(), 35000);
}
setInterval(createHeart, 800);

// ----------  MUSIC BUTTON & AUTOPLAY CONTROL  ----------
const bgMusic = document.getElementById('bgMusic');
bgMusic.loop = true;
bgMusic.volume = 0; // start silent

window.addEventListener('load', async () => {
  try {
    await bgMusic.play(); // autoplay silently allowed

    // faster fade-in
    let vol = 0;
    const fade = setInterval(() => {
      if (vol < 0.4) {
        vol += 0.04; // increase volume faster
        bgMusic.volume = vol;
      } else {
        clearInterval(fade);
      }
    }, 200); // every 0.2 seconds
  } catch (err) {
    console.warn('Autoplay blocked:', err);

    // fallback: play on first user interaction
    document.body.addEventListener('click', () => {
      bgMusic.volume = 0.3;
      bgMusic.play();
    }, { once: true });
  }
});


// ----------  START  ----------
startSlideshow();