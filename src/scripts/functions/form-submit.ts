
import { fadeIn, fadeOut } from "./vanish-htmlElement";

const formCard = document.querySelector(".order__card")!;
const submitCard = document.querySelector(".order__sent");

const form = document.getElementById("order-form")! as HTMLFormElement;

export function submitForm(formData: FormData) {
  fadeOut(<HTMLElement>formCard, 500);
  fadeIn(<HTMLElement>submitCard, 500);

  for (var [key, value] of formData.entries()) {
    console.log(key, value);
  }

  form.reset();

  setTimeout(() => {
    fadeIn(<HTMLElement>formCard, 500);
    fadeOut(<HTMLElement>submitCard, 500);
  }, 3500)
}