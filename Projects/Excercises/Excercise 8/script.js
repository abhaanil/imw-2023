let actors = [
    {
    "decription":"A very famous Bollywood actor",
    "photo": "amitabh.jpg",
    "name": "Amitabh Bachhan"
}

    {
    "decription":"A not so famous but a good-looking Bollywood actor",
    "photo": "john.jpg",
    "name": "John Abraham"
}

{
    "decription":"A Bollywood actor that could actually act",
    "photo": "irfan.jpg",
    "name": "Irfan Khan"
}
];

console.log(actor.name);

//jquery shorthand for making sure document is fully loaded

$(function () {

    fetch("actors.json")
    $("main").append(`
    <div>
    <img src="images/${actor.photo}" width=50%>
    <h2>${actor.name}</h2>
    <p>${actor.description} </p>
    <div>
    `);
    
})