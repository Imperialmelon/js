export class Del_one_button {
    constructor(parent, main) {
        this.parent = parent;
        this.main = main
    }

    addListeners(listener) {
        document
            .getElementById("del_one-button")
            .addEventListener("click", listener)
    }

    getHTML() {
        return (
            `
                <button id="del_one-button" class="btn btn-primary back" type="button" >Дропни меня</button>
            `
        )
    }

    render(listener) {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(listener)
    }
}