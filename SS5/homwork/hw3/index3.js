//html template
const $template= document.querySelector(`template`)
// taoj shadow-dom
 class MangaBookBlock extends HTMLElement{
     constructor(){
         super();
         this.attachShadow({mode:`open`});
         this.shadowRoot.appendChild($mangaTemplate.content.cloneNode(true))
     }
     static get observedAtributes(){
         console.log(`observedAttributes`);
         return[`img`,`titlename`,`price`,`date`,`count`]
         // img,titlename,price date count laf lay trong div cuar html
     }
     // duoc goi khi componet duoc sinh ra
     connectedCallback(){
         console.log("i am alive");
     }
     // duoc goi khi thuoc tinh component thay doi
     attributeChangeCallback(attrName,oldvalue,newvalue){
         if(attrName==`image`){
             this.shadowRoot.querySelector(`.img`).src=newvalue;
         }
         if(attrName=="titlename"){
             this.shadowRoot.querySelector(`manga-title`).textContent=newvalue;
         }
         if(attrName=="price"){
             this.shadowRoot.querySelector(`manga-price`).textContent=newvalue;
         }
         if(attrName=="date"){
             this.shadowRoot.querySelector(`manga-date`).texContent=newvalue;
         }
         if(attrName="count"){
             this.shadowRoot.querySelector(`manga-count`).textContent=newvalue;
         }
     }
     // duoc goi khi component matas ddi
     disconnectedCallback(){
         console.log(`i am dead`)
     }
 }
 // tao custon-element
window.customElements.define(`manga-book-block`,MangaBookBlock)