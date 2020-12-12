//html template
const $template = document.getElementById("meme-container-template")
// tạo shadow-dom
console.log($template)

class Meme extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }
// duoc goi khi component dwoc sinh ra
    connectedCallback() {
        console.log("vwa cos 1 cai meme duoc tao")
    }
// duoc goi khi thuoc tinh cua component thay doi
    attributeChangedCallback(name, oldValue, newValue) { }

// duoc goii khi component matas di
    disconnectedCallback() {
        console.log("vwaf cos 1 cai meme bi xoa di")
    }
}
// tạo custom-element
window.customElements.define("meme-container", Meme);