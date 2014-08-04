function generate() {
    var restaurant = ['Chaping','Yummy Bites','China First','Meixin','Laogutai','Tofu House','Home'];
    var index = parseInt(6*Math.random());
    var name = restaurant[index];
    document.getElementById("center").textContent = name;
}