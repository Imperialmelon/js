
export class Card2 {
    constructor(parent,   main, flag, id_, url_ = 0) {
        this.parent = parent;
        this.url_ = url_
        this.url2 = 0
        this.main = main
        this.flag = flag
        this.id_ = id_;
    }

    // async func(){
    //             const resp = await fetch("https://api.thecatapi.com/v1/images/search");
    //     console.log(resp)
    //     const dt = await resp.json()
    //     console.log(dt)
    //     const image = dt[0].url
    // }
       async getHTML(data) {
        return fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => response.json())
        .then(im => {
            const dt = im[0].url;
            this.url2 = dt

            // console.log(this.url2)
            // console.log(dt)
                return (
            `
                <div class="card" style="width: 300px;">
                    <img class="card-img-top" src="${dt}" alt="картинка">
                    <div class="card-body">
                        <h5 class="card-title">${data.title}</h5>
                        <p class="card-text">${data.text}</p>
                        <button class="btn btn-primary" id="click2-card-${data.id}" data-id="${data.id}">Дропни меня</button>
                        <button class="btn btn-primary" id="check-card-${data.id}" data-id="${data.id}">check</button>
                    </div>
                </div>
                `
        )
        })

 
        
        // const resp = await fetch("https://api.thecatapi.com/v1/images/search");
        // console.log(resp)
        // const dt = await resp.json()
        // console.log(dt)
        // const image = dt[0].url

        // console.log(image)
  
        // return (
        //     `
        //         <div class="card" style="width: 300px;">
        //             <img class="card-img-top" src="${image}" alt="картинка">
        //             <div class="card-body">
        //                 <h5 class="card-title">${data.title}</h5>
        //                 <p class="card-text">${data.text}</p>
        //                 <button class="btn btn-primary" id="click-card-${data.id}" data-id="${data.id}">Нажми на меня</button>
        //             </div>
        //         </div>
        //         `
        // )
    
    }
    get_url(){
        return this.url2
    }

    get_old_html(data){
        
                return (
            `
                <div class="card" style="width: 300px;">
                    <img class="card-img-top" src="${data.src}" alt="картинка">
                    <div class="card-body">
                        <h5 class="card-title">${data.title}</h5>
                        <p class="card-text">${data.text}</p>
                        <button class="btn btn-primary" id="click2-card-${data.id}" data-id="${data.id}">Дропни меня</button>
                        <button class="btn btn-primary" id="check-card-${data.id}" data-id="${data.id}">check</button>
                    </div>
                </div>
                `
        )
    }
                

    addListeners(data, listener) {
    

        document
            .getElementById(`click2-card-${data.id}`)
            .addEventListener("click", listener)
 

        // console.log(document.getElementById(`click2-card-${data.id}`))    
        // console.log(document.addEventListener("click", listener))
    }
    addListeners2(data, listener) {
    

        document
            .getElementById(`check-card-${data.id}`)
            .addEventListener("click", listener)
 

        // console.log(document.getElementById(`click2-card-${data.id}`))    
        // console.log(document.addEventListener("click", listener))
    }
    
    async render(data, listener1, listener2) {
        console.log(data.id)
        if (this.url_ == 0){
            console.log('url_ = 0')
            const html = await this.getHTML(data)
            this.parent.insertAdjacentHTML('beforeend', html)
            this.addListeners(data, listener1)
            this.addListeners2(data, listener2)
        }
        else{
            console.log('url_ != 0')
            const html =  this.get_old_html(data)
            
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(data, listener1)
        this.addListeners2(data, listener2)
        }

        if(this.flag == false){
            console.log('flagged')
            this.main.urls.push(this.url2)
            this.flag = true
        }
        console.log(this.main.urls)
        // this.parent.insertAdjacentHTML('beforeend', html)
        // this.addListeners(data, listener)
    }


}