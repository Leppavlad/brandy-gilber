export function fadeOut(element: HTMLElement, time: number) {
  const steps = 10;
  const interval = time / steps;

  let iteration = steps;

  let timer: number = setInterval(() => {
    element.style.opacity = `${--iteration / steps}`;
    if (iteration == 0) {
      element.style.visibility = "hidden";
      clearInterval(timer);
    }
  }, interval);
}

export function fadeIn(element: HTMLElement, time: number) {
  const steps = 10;
  const interval = time / steps;

  let iteration = 0;

  element.style.visibility = "visible";
  let timer: number = setInterval(() => {
    element.style.opacity = `${++iteration / steps}`;
    if (iteration == 10) {
      clearInterval(timer);
    }
  }, interval);
}