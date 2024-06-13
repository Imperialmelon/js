import {BackButtonComponent} from "../../components/back-button/index.js";
import {MainPage} from "../main/index.js";
export class InfoPage{
    constructor(parent,card , type) {
        this.type = type;
        this.parent = parent;
        this.card = card;
    }

    get pageRoot() {
        return document.getElementById('about_page')
    }
    getHTML() {
        if(this.type == 'hse'){
            if(this.card == 1 ){
                return (
                    `
                    <div id="about_page" style="margin-left: 10px;">
                    <div id="hse1">
                        <h1><b>Дизайн. CGI и визуальные эффекты: визуальные эффекты</b></h1>
                        <p>
                        Декан факультета: декан 1
                        </p>
                        <p>
                        Бюджетных мест: 0
                        </p>
                        Платных мест мест: 20
                        <p>
                        
                    </div>
                    </div>
                    `
                )
            }
            else if (this.card == 2){
                return (
                    `
                    <div id="about_page" style="margin-left: 10px;">
                    <div id="hse2">
                        <h1><b>Дизайн. Коммуникационный дизайн: брендинг</b></h1>
                        <p>
                        Декан факультета: декан 2
                        </p>
                        <p>
                        Бюджетных мест: 10
                        </p>
                        Платных мест мест: 20
                        <p>
                    </div>
                    </div>
                    `
                )
            }
            else if (this.card == 3){
                return (
                    `
                    <div id="about_page" style="margin-left: 10px;">
                    <div id="hse2">
                        <h1><b>Дизайн. Коммуникационный дизайн: медиа и дизайн</b></h1>
                        <p>
                        Декан факультета: декан 3
                        </p>
                        <p>
                        Бюджетных мест: 15
                        </p>
                        Платных мест мест: 30
                        <p>
                    </div>
                    </div>
                    `
                )
            }
            else if (this.card == 4){
                return (
                    `
                    <div id="about_page" style="margin-left: 10px;">
                    <div id="hse2">
                        <h1><b>Управление в креативных индустриях</b></h1>
                        <p>
                        Декан факультета: декан 4
                        </p>
                        <p>
                        Бюджетных мест: 15
                        </p>
                        Платных мест мест: 30
                        <p>
                    </div>
                    </div>
                    `
                )
            }
            else if (this.card == 5){
                return (
                    `
                    <div id="about_page" style="margin-left: 10px;">
                    <div id="hse2">
                        <h1><b>Мода. Дизайн одежды</b></h1>
                        <p>
                        Декан факультета: декан 5
                        </p>
                        <p>
                        Бюджетных мест: 0
                        </p>
                        Платных мест мест: 30
                        <p>
                    </div>
                    </div>
                    `
                )
            }
            else if (this.card == 6){
                return (
                    `
                    <div id="about_page" style="margin-left: 10px;">
                    <div id="hse2">
                        <h1><b>Дизайн. Медиа и дизайн</b></h1>
                        <p>
                        Декан факультета: декан 6
                        </p>
                        <p>
                        Бюджетных мест: 0
                        </p>
                        Платных мест мест: 5
                        <p>
                    </div>
                    </div>
                    `
                )
            }
            else if (this.card == 7){
                return (
                    `
                    <div id="about_page" style="margin-left: 10px;">
                    <div id="hse2">
                        <h1><b>Дизайн. Гейм-дизайн: продюсирование игр</b></h1>
                        <p>
                        Декан факультета: декан 7
                        </p>
                        <p>
                        Бюджетных мест: 0
                        </p>
                        Платных мест мест: 8
                        <p>
                    </div>
                    </div>
                    `
                )
            }
            else{
                return (
                    `
                    <div id="about_page" style="margin-left: 10px;">
                    <div id="hse2">
                        <h1><b>Современное искусство. Саунд-арт и саунд-дизайн</b></h1>
                        <p>
                        Декан факультета: декан 8
                        </p>
                        <p>
                        Бюджетных мест: 0
                        </p>
                        Платных мест мест: 8
                        <p>
                    </div>
                    </div>
                    `
                )
            }
        }
        else if(this.type == 'msu'){
            return (
                `
                <div id="about_page" style="margin-left: 10px;">
                <div id="hse2">
                    <h1><b>Графический дизайн</b></h1>
                    <p>
                    Декан факультета: декан
                    </p>
                    <p>
                    Бюджетных мест: 50
                    </p>
                    Платных мест мест: 70
                    <p>
                </div>
                </div>
                `
            )
        }
        else if(this.type == 'bmstu'){
            return (
                `
                <div id="about_page" style="margin-left: 10px;">
                <div id="hse2">
                    <h1><b>МТ9 Промышленный дизайн</b></h1>
                    <p>
                    Декан факультета: декан
                    </p>
                    <p>
                    Бюджетных мест: 50
                    </p>
                    Платных мест мест: 70
                    <p>
                </div>
                </div>
                `
            )
        }
    }
    clickBack() {
        this.parent.innerHTML = ''
        const mainPage = new MainPage(this.parent, this.card)
        mainPage.render()
    }
    

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))
    }

}