export class AddProductCardButton {
    constructor(parent) {
        this.parent = parent;
        this.element = document.createElement("button");
        this.element.classList.add("btn", "btn-primary");
        this.element.textContent = "Добавить карточку";
    }

    addListeners(listener) {
        this.element.addEventListener("click", listener);
    }

    render() {
        this.parent.appendChild(this.element);
    }
}