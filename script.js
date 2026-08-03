import demoVideo from './assets/demo_video_compressed.mp4';

const video = document.querySelector('.video-frame video');
if (video) video.src = demoVideo;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section-kicker, .method-card, .result-card, .real-grid, .takeaway, .resource-grid').forEach((element) => {
  element.classList.add('reveal');
  element.style.animationPlayState = 'paused';
  observer.observe(element);
});
