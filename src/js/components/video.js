const video = document.querySelector('[data-video="video"]'),
      videoBtn = document.querySelector('[data-video="btn"]'),
      videoBlock = document.querySelector('.video-block');

addEvent(videoBtn, 'click', playVideo);
addEvent(video, 'play', playVideo);
addEvent(video, 'pause', pauseVideo);

function toggleVideo(action) {
  videoBtn.classList[action]('video-block__btn-play--active');
  videoBlock.classList[action]('video-block--active');
}

function playVideo() {
  toggleVideo('add');
  video.play();
  video.controls = true;
}

function pauseVideo() {
  toggleVideo('remove');
  video.pause();
  video.controls = false;
}

function addEvent(el, ev, func) {
  el.addEventListener(ev, func);
}
