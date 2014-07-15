function generate() {
    var restaurant = ['Chaping','Yummy Bites','China First','Meixin','Laogutaicai','Tofu House'];
    var index = parseInt(5*Math.random());
    var name = restaurant[index];
    document.getElementById("center").textContent = name;
}