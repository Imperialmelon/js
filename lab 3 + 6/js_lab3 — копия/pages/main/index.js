import { ProductCardComponent } from "../../components/product-card/index.js";
import { ProductPage } from "../product/index.js";
import { HSE_page } from "../hse_page/index.js";
import { MSU_page } from "../msu_page/index.js";
import { BMSTU_page } from "../bmstu_page/index.js";
import { AddProductCardButton } from "../../components/create_button/index.js";
import { DeleteButton } from "../../components/delete_button/index.js";
import { Card2 } from "../../components/card2/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
        this.productCards = []; // Массив для хранения компонентов карточек продукта
        this.urls = [];
        this.cnt = 1
    }

    get pageRoot() {
        return document.getElementById('main-page')
    }

    addNewCard() {
        // if (this.productCards.length >0){
        //     let url_ = this.productCards[this.productCards.length-1].get_url()
        //     console.log(url_)
        //     // this.urls.push(url_) !!!!!!!!!!!!!!!!!!!
        //     console.log('urls=', this.urls)
        // }
        // else{
        //     this.cnt = 1
        //     this.urls = []
        // }
 
        const data = {
            id: this.productCards.length + 1, // Уникальный идентификатор для новой карточки
            // src: "https://example.com/new-product-image.jpg", // Источник изображения
            title: "Карточка", // Заголовок
            text: "Я кот", // Текст
        };
        console.log(data)

        const productCard_ = new Card2(this.pageRoot, this , false , data.id);
        productCard_.render(data, this.Drop_one_card.bind(this), this.check_me.bind(this));

        this.productCards.push(productCard_); // Добавление новой карточки в массив

    }

    check_me(e){
        console.log(e.target.dataset.id, ' ' , this.urls[e.target.dataset.id-1])
        console.log(this.urls)
    }
    
    getData() {
        return [
            {
                id: 1,
                src: "https://blog.coursera.org/wp-content/uploads/2020/11/CAMPUS_exterior1-1-2048x1365.jpg",
                title: "ВШЭ",
                text: "Смотреть факультеты"
            },
            {
                id: 2,
                src: "https://sleeplab.ru/wp-content/uploads/2023/03/moskovskij-universitet.jpg",
                title: "МГУ",
                text: "Смотреть факультеты"
            },
            {
                id: 3,
                src: "https://ichinese8.ru/wp-content/uploads/2020/11/2-1-1024x731.jpg",
                title: "МГТУ",
                text: "Смотреть факультеты"
            },
        ]
    }

    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap">
                </div>
            `
        );
    }

    addListeners() {
        document.getElementById("add-card-button").addEventListener("click", this.addNewCard.bind(this));
    }

    clickCard(e) {
        const cardId = e.target.dataset.id

        let productPage = 0;

        if(cardId == "1"){
            productPage = new HSE_page(this.parent, cardId)
        }
        if(cardId == 2){
            productPage = new MSU_page(this.parent, cardId)
        }
        if(cardId == 3){
            productPage = new BMSTU_page(this.parent, cardId)
        }

        productPage.render()
    }



    Drop_one_card(e){
        console.log('e=', e)
        // if(this.cnt == 1){
        //     console.log('abc')
        //     // console.log(this.productCards.length)
        //     let url_ = this.productCards[this.productCards.length-1].get_url()
        //     const tmp = this.urls.slice()
        //     // console.log('tmp=',tmp)
        //     this.urls.length = 0
     
        //     console.log(url_)
        //     // this.urls.push()
        //     tmp.push(url_)
        //     for(let i = 0 ; i < tmp.length; i++ ){
        //         this.urls.push(tmp[i])
        //         // console.log(this.urls)
        //     }
        //     this.urls.push(url_)
        //     // this.urls.push(url_)
        //     console.log(tmp)
        //     this.cnt = 0
        // }
        console.log(this.urls)

        // console.log('shrek')
        const card_id = e.target.dataset.id
        console.log('id=',card_id)
        // console.log('card-id=',card_id)
        // console.log('len:', this.productCards.length, this.urls.length)
        // console.log(this.urls[this.urls.length- 1],this.urls[this.urls.length- 2] )
        // if (this.urls[this.urls.length- 1] == this.urls[this.urls.length- 2]){
        //     console.log('if')
        //     this.urls.splice(card_id,1)
        // }
        // else{
        //     this.urls.splice(card_id-1,1)  
        // }
        // this.urls.splice(card_id-1,1) 
        // delete this.urls[card_id-1]
        // this.urls.length -=1
        this.productCards.splice(card_id-1,1)
        // this.del_(card_id)
        this.urls.splice(card_id-1,1)
        // if (this.urls[this.urls.length- 1] == this.urls[this.urls.length- 2]){
        //     console.log('if')
        //     this.urls.splice(card_id,1)
        // }
        // console.log(this.urls)
        // // delete this.productCards[card_id]
        // // delete this.urls[card_id]
        // console.log('new len:', this.productCards.length, this.urls.length)
        this.render()
        let len = this.productCards.length
        console.log('len=',len)
        for(let i = card_id ; i <= len - 1; i++){
            console.log( 'new_id=', this.productCards[i].id_)
            this.productCards[i].id_ -=1;
        }
        len = this.productCards.length
  
        for(let i = 0 ; i <= len - 1; i++){

            let j  = this.urls[i]
            console.log('j=',j)
            const productCard = new Card2(this.pageRoot, this,true, i + 1, j);

            const data = {
                id: i + 1, // Уникальный идентификатор для новой карточки
                src: `${j}`, // Источник изображения
                title: "Карточка", // Заголовок
                text: "Я кот", // Текст
            };

            productCard.render(data, this.Drop_one_card.bind(this), this.check_me.bind(this));
        }
        // console.log(this.urls)
    }

    // Добавление кнопки удаления карточек
    addButtonRemove() {

        // this.productCard.pop()
        let len = this.productCards.length
        this.productCards = []
        this.render()
        if (len - 1 >= 0){
            for(let i = 0 ; i <  len - 1; i++ ){
                console.log(len - 1)
                this.addNewCard()
            }
        }
        else{
            this.render()
        }

    }
    
    render() {
        this.parent.innerHTML = '';
        this.parent.innerHTML = "Дизайн"
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        
        const data = this.getData()
        // console.log(data)
        data.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
        })

        const addCardButton = new AddProductCardButton(this.pageRoot);
        addCardButton.addListeners(this.addNewCard.bind(this));
        addCardButton.render();
        
        // Добавить кнопку удаления карточек
        const del = new DeleteButton(this.pageRoot);
        del.addListeners(this.addButtonRemove.bind(this));
        del.render();
    }
}