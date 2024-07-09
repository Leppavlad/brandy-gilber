function playVideo(iframe) {
  iframe.contentWindow.postMessage('{"event":"command", "func":"playVideo", "args":""}', '*');
}

function pauseVideos() {
  const videos = document.querySelectorAll(".youtube__video");

  if (videos.length > 0) {
    videos.forEach((video) => {
      video.contentWindow.postMessage('{"event":"command", "func":"pauseVideo", "args":""}', '*');
    })
  }
}

// youtube preview links
const videoBlocks = document.querySelectorAll(".slide__video-container");
const videoTimers = [];

videoBlocks.forEach((videoblock) => {
  const link = videoblock.getAttribute("data-link");
  const iframe = videoblock.querySelector("iframe");
  const button = videoblock.querySelector(".youtube__preview-button");

  button.addEventListener("click", () => {
    iframe.src = link;
    button.remove();

    const timer1 = setTimeout(() => {
      playVideo(iframe);
    }, 1000);
    const timer2 = setTimeout(() => {
      playVideo(iframe);
    }, 2000);

    videoTimers.push(timer1);
    videoTimers.push(timer2);
  })
})

// pause on slide
const btnPrev = document.querySelector("[aria-label='Previous slide']");
const btnNext = document.querySelector("[aria-label='Next slide']")
btnPrev.addEventListener("click", pauseVideos)
btnNext.addEventListener("click", pauseVideos)