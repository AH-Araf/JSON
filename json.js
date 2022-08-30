const user = {id: 1, name: 'Araf Hussain', job: 'student'};
//JavaScript Object Notation (JSON)
const a = JSON.stringify(user);
/*
console.log(user); //{ id: 1, name: 'Gorib Aamir', job: 'actor' }
console.log(a); //{"id":1,"name":"Gorib Aamir","job":"actor"}
*/

const shop = {
    owner: 'Alia',
    address: {
        street: 'kochukhet voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj)