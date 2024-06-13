export class DeleteButton {
    constructor(parent) {
      this.parent = parent;
      this.element = document.createElement("button");
      this.element.classList.add("btn", "btn-danger");
      this.element.textContent = "Удалить карточку";
    }
  
    addListeners(listener) {
      this.element.addEventListener("click", listener);
    }
  
    render() {
      this.parent.appendChild(this.element);
    }
  }