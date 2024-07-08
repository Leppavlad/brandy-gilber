function jumpPosition(item: HTMLElement, time: number = 50, distance: number = 20) {
  let interval: number;
  let increaseFlag = true;

  const initialTransform = 0;
  let currentTransform: number = initialTransform + 1;

  interval = setInterval(() => {
    if (increaseFlag) {
      if (currentTransform < distance) {
        currentTransform += 1;
        item.style.transform = `translateY(${currentTransform}px)`;
        if (currentTransform == distance) {
          increaseFlag = false;
        }
      }
    } else {
      if (currentTransform > initialTransform) {
        currentTransform -= 1;
        item.style.transform = `translateY(${currentTransform}px`;
        if (currentTransform == initialTransform) {
          clearInterval(interval);
        }
      }
    }
  }, time)
}

export default function jumpTwice(item: HTMLDivElement, firstTime: number, secondTime: number, distance: number) {
  setTimeout(() => {
    jumpPosition(item, 8, distance);
    setTimeout(() => {
      jumpPosition(item, 8, distance);
      setTimeout
    }, secondTime)
  }, firstTime)
}