import {ProductComponent} from "../../components/product/index.js";
import {BackButtonComponent} from "../../components/back-button/index.js";
import {MainPage} from "../main/index.js";
import {InfoPage} from "../info_page/index.js";


export class BMSTU_page {
    constructor(parent, id) {
        this.parent = parent
        this.id = id
    }

    getData() {
        return {
            id: 1,
            src: "https://ichinese8.ru/wp-content/uploads/2020/11/2-1-1024x731.jpg",
            title: `МТ9 Промышленный дизайн`,
            text: "Кафедра «Промышленный дизайн» МГТУ им. Н.Э. Баумана осуществляет подготовку бакалавров по направлению «Дизайн» и магистров по направлению «Дизайн» (магистерская программа «Промышленный дизайн»)."
        }
    }

    get pageRoot() {
        return document.getElementById('product-page')
    }

    getHTML() {
        return (
            `
                <div id="product-page" class="page bmstu">Московский Государственный Технический Университет имени Баумана</div>
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
        const infoPage = new InfoPage(this.parent , cardId , 'bmstu')
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