import {ProductComponent} from "../../components/product/index.js";
import {BackButtonComponent} from "../../components/back-button/index.js";
import {MainPage} from "../main/index.js";
import {InfoPage} from "../info_page/index.js";

export class HSE_page {
    constructor(parent, id) {
        this.parent = parent
        this.id = id
    }

    getData() {
        return [
            {
                id: 1,
                src: "https://blog.coursera.org/wp-content/uploads/2020/11/CAMPUS_exterior1-1-2048x1365.jpg",
                title: "Дизайн. CGI и визуальные эффекты: визуальные эффекты",
                text: "Подготовка специалистов в области компьютерной графики по созданию визуального контента и управления им. "
            },
            {
                id: 2,
                src: "https://blog.coursera.org/wp-content/uploads/2020/11/CAMPUS_exterior1-1-2048x1365.jpg",
                title: "Дизайн. Коммуникационный дизайн: брендинг",
                text: "Подготовка дизайнеров в области разработки, специального и креативного проектирования фирменного стиля, бренда."
            },
            {
                id: 3,
                src: "https://blog.coursera.org/wp-content/uploads/2020/11/CAMPUS_exterior1-1-2048x1365.jpg",
                title: "Дизайн. Коммуникационный дизайн: медиа и дизайн",
                text: "Подготовка дизайнеров в области проектирования и выполнения медиа-решений «полного цикла»."
            },
            {
                id: 4,
                src: "https://blog.coursera.org/wp-content/uploads/2020/11/CAMPUS_exterior1-1-2048x1365.jpg",
                title: "Управление в креативных индустриях",
                text: "Подготовка специалистов объединяющих управленческие компетенции и экспертизу в области развития креативных индустрий."
            },
            {
                id: 5,
                src: "https://blog.coursera.org/wp-content/uploads/2020/11/CAMPUS_exterior1-1-2048x1365.jpg",
                title: "Мода. Дизайн одежды",
                text: "Подготовка специалистов в области дизайна одежды."
            },
            {
                id: 6,
                src: "https://blog.coursera.org/wp-content/uploads/2020/11/CAMPUS_exterior1-1-2048x1365.jpg",
                title: "Дизайн. Медиа и дизайн",
                text: "Подготовка специалистов по созданию современных высокотехнологичных медийных продуктов. "
            },
            {
                id: 7,
                src: "https://blog.coursera.org/wp-content/uploads/2020/11/CAMPUS_exterior1-1-2048x1365.jpg",
                title: "Дизайн. Гейм-дизайн: продюсирование игр",
                text: "Подготовка специалистов по разработке и сопровождению игр и бизнес-моделей игр на всех стадиях, поддержки после выхода релиза."
            },
            {
                id: 8,
                src: "https://blog.coursera.org/wp-content/uploads/2020/11/CAMPUS_exterior1-1-2048x1365.jpg",
                title: "Современное искусство. Саунд-арт и саунд-дизайн",
                text: "Подготовка специалистов в области звуковой подачи продукта, аудиобрендинга в рекламе, звука в искусстве и кино."
            },
        ]
    }

    get pageRoot() {
        return document.getElementById('product-page')
    }

    getHTML() {
        return (
            `
                <div id="product-page" class="page hse">Высшая школа экономики</div>
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
        const infoPage = new InfoPage(this.parent , cardId , 'hse')
        infoPage.render()
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        
        const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))
        const data = this.getData()
        data.forEach((item) => {
            const productCard = new ProductComponent(this.pageRoot)
            productCard.render(item)
            const btn = document.getElementById('click-card-'+item.id)
            btn.addEventListener("click", () => this.clickCard(item))
            
        })
        
    }
}