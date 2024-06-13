import {ProductComponent} from "../../components/product/index.js";
import {BackButtonComponent} from "../../components/back-button/index.js";
import {MainPage} from "../main/index.js";
import {InfoPage} from "../info_page/index.js";


export class MSU_page {
    constructor(parent, id) {
        this.parent = parent
        this.id = id
    }

    getData() {
        return {
            id: 1,
            src: "https://sleeplab.ru/wp-content/uploads/2023/03/moskovskij-universitet.jpg",
            title: `Графический дизайн`,
            text: "Подготовка специалистов в области графического дизайна, проектной деятельности в учреждениях культуры."
        }
    }

    get pageRoot() {
        return document.getElementById('product-page')
    }

    getHTML() {
        return (
            `
                <div id="product-page" class="page msu">Московский Государственный Университет имени Ломоносва</div>
            `
        )
    }

    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }

    clickCard(e) {
        const cardId = e.id
        let productPage = 0;
        const infoPage = new InfoPage(this.parent , cardId , 'msu')
        infoPage.render()
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))
        const data = this.getData()
        const stock = new ProductComponent(this.pageRoot)
        stock.render(data)
        const btn = document.getElementById('click-card-'+data.id)
        btn.addEventListener("click", () => this.clickCard(data))
    }
}