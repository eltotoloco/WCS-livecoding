const form = document.getElementById("shopping-cart");
const tShirt = {
    name: "T-Shirt fun",
    price: 19.99,
    quantity: 10,
    type: "t-shirt"
};
const jean = {
    name: "Jean",
    price: 19.99,
    quantity: 2,
    type: "jean"
};

const shoes = {
    name: "Basket",
    price: 49.99,
    quantity: 10,
    type: "shoes"
};

const catalog = [tShirt, jean, shoes];
const catalogHtml = document.getElementById("catalog");
for (let i = 0; i < catalog.length; i++) {
    if (catalog[i].quantity > 0) {
        let input = document.createElement("input");
        let label = document.createElement("label");
        label.style.backgroundColor = "red"
        input.type = "number";
        input.id = catalog[i].type;
        label.for = input.id;
        label.innerText = catalog[i].name;
        let div = document.createElement("div");
        div.append(label);
        div.append(input);
        catalogHtml.append(div);
    }
}
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const tShirtQuantity = document.getElementById("t-shirt-quantity").value;
    const jeanQuantity = document.getElementById("jean-quantity").value;
    const shoesQuantity = document.getElementById("shoes-quantity").value;
    const cart = [];
    console.log(tShirtQuantity, jeanQuantity, shoesQuantity);
});