function jumpOpacity(item: HTMLElement, time: number = 50) {
  let interval: number;
  let increaseFlag = true;

  const initialOpacity = +item.style.opacity * 10;
  let currentOpacity: number = initialOpacity + 1;

  interval = setInterval(() => {
    if (increaseFlag) {
      if (currentOpacity < 10) {
        currentOpacity += 1;
        item.style.opacity = `${currentOpacity / 10}`;
        if (currentOpacity == 10) {
          increaseFlag = false;
        }
      }
    } else {
      if (currentOpacity > initialOpacity) {
        currentOpacity -= 1;
        item.style.opacity = `${currentOpacity / 10}`;
        if (currentOpacity == initialOpacity) {
          clearInterval(interval);
        }
      }
    }
  }, time)
}

export default function (item: HTMLDivElement, time: number) {
  setTimeout(() => {
    jumpOpacity(item, 25);
  }, time)
}