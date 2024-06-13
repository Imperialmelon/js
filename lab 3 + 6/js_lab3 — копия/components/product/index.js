export class ProductComponent {
    constructor(parent) {
        this.parent = parent
    }

    getHTML(data) {
        return (

            
            `
                <div class="card mb-3" style="width: 900px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${data.src}" class="img-fluid" alt="картинка">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${data.title}</h5> 
                                <p class="card-text upd">${data.text}</p>
                                <button class="btn btn-primary" id="click-card-${data.id}" data-id="${data.id}"> меня</button>
                            </div>
                        </div>
                    </div>
                </div>
            `
        )
    }
    addListeners(data, listener) {
        document
            .getElementById(`click-card-${data.id}`)
            .addEventListener("click", listener)
    }

    render(data) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}