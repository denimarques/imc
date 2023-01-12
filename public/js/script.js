import { Modal } from "http://localhost:63342/Imc/public/js/modal.js";
import { IMC, notNumber } from "http://localhost:63342/Imc/public/js/utils.js";
import { AlertError } from "http://localhost:63342/Imc/public/js/alert-error.js";

const form = document.querySelector("form");
const inputHeight = document.querySelector("#height");
const inputWeight = document.querySelector("#weight");

inputHeight.oninput = () => AlertError.close();
inputWeight.oninput = () => AlertError.close();

form.onsubmit = (e) => {
    e.preventDefault();

    const height = +inputHeight.value;
    const weight = +inputWeight.value;
    const alertInvalid = notNumber(height) || notNumber(weight);

    if (alertInvalid){
        AlertError.open();
        return
    }

    AlertError.close();

    const result = IMC(height, weight);
    displayResultMessage(result);
}

Modal.close.onclick = () => {
    Modal.toggleCard();
}

function displayResultMessage(result){
    Modal.toggleCard();
    Modal.message.innerText = result;
}

