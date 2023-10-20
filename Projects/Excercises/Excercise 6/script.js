console.log("Hello");

for (let step=0; step<1000; step++) {
let blocks = '<div class="block" style="width:100vw; border:2px solid black; height: 10px;">';
$("body").append(blocks);


}

console.log($(".block"));

let colorPalette=[100,60,92];

function getRandomInt(max) {
    return Math.floor(Math.random() *max);
}

$(".block").each(function() {
$(this).on("mouseenter",function () {
    $(this).css("background-color", "rgb("+getRandomInt(255)+"," +getRandomInt(255)+"," +getRandomInt(255)+",");

})

})