export const Modal = {
    close: document.querySelector("#close"),
    message : document.querySelector(".message"),
    modalSuccess : document.querySelector("#modal-success"),

    toggleCard() {
        this.modalSuccess.classList.toggle('hidden');
    }
}