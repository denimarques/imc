export const AlertError = {
    el : document.querySelector("#invalid"),
    open(){
        this.el.classList.remove("hidden");
    },
    close(){
        this.el.classList.add("hidden");
    }
}