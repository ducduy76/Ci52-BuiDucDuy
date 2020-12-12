import Contact from "./Contact.js";
export default class Contacts {
    lists = [];
    constructor(lists = []) {
        this.lists = lists;
    }
    addContact(name, numberPhone, address = "", email = "") {
        if (name.trim() === "" || numberPhone.length != 10 || Number(numberPhone) == NaN) {
            return "du lieu dau vao khong dung"
        }
        let contact = new Contact(name, numberPhone, address, email)
        this.lists.push(contact)
    }

    editContact(numberPhone, contact) {
        let index = this.lists.findIndex(function (contact) { return contact.numberPhone === numberPhone; })
        /*
        contact={
        name:"hanh";
        numberPhone:"1322424"
        }
        */
        if (index != -1) {
            if ("name" in contact) {
                this.lists[index].sName = contact.name;
            }
            if ("numberPhone" in contact) {
                this.lists[index].sNumberphone = contact.numberPhone;
            }
            if ("email" in contact) {
                this.lists[index].sEmail = contact.email
            }
        }
    }

    deleteContact(numberPhone) {
        let contactsFilter = this.lists.filter(function (contact) {
            return contact.numberPhone != numberPhone
        })
        this.lists = contactsFilter
    }
    showContact() {
        console.log()
    }
    search(name) {
        let contactsFilter = this.lists.filter(function (contact) {
            return contact.name.indexOf(name) != -1;
        })
        console.log(contactFilter)
    }

    search(keyword) {
        let contactsFilter = this.lists.filter(function (contact) {
            return contact.numberPhone.indexOf(keyword) != -1 || contact.numberPhone.indexOf(keyword) != 1;
        })
        console.log(contactFilter)
    }
}