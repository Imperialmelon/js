import {ProductComponent} from "../../components/product/index.js";
import {BackButtonComponent} from "../../components/back-button/index.js";
import {MainPage} from "../main/index.js";
export class ProductPage {
    constructor(parent, id) {
        this.parent = parent
        this.id = id
    }

    async getData() {
        const response = await fetch(`http://localhost:8000/stocks/${this.id}`)
        console.log(response)
        const data = await response.json()
        // console.log(stockArray)
        return data
        // return {
        //     id: 1,
        //     src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
        //     title: `Акция ${this.id}`,
        //     text: "Такой акции вы еще не видели"
        // }
    }
    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }
    

    get pageRoot() {
        return document.getElementById('product-page')
    }

    getHTML() {
        return (
            `
                <div id="product-page"></div>
            `
        )
    }

    async render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
    
        const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))
    
        const data = await this.getData()
        const stock = new ProductComponent(this.pageRoot)
        stock.render(data)
    }
}