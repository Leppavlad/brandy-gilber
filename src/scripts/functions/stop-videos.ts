export function pauseVideos() {
  const videos: NodeListOf<HTMLIFrameElement> = document.querySelectorAll(".youtube__video");

  if (videos.length > 0) {
    videos.forEach((video) => {
      video.contentWindow!.postMessage('{"event":"command", "func":"pauseVideo", "args":""}', '*');
    })
  }
}

export function playVideo(iframe: HTMLIFrameElement) {
  iframe.contentWindow!.postMessage('{"event":"command", "func":"playVideo", "args":""}', '*');
}