function remove(element){
    console.log(element.innerText);
    element.remove()
}

function change(element){
    element.innerText = 'Logout'
}


var count = 0;
var likes = 0;
var totalCount1 = document.getElementById("btnTop1");
var totalCount2 = document.getElementById("btnTop2");

function like(){
    count++;
    totalCount1.innerText = count;
    alert('Ninja was liked')
}

function gustar(){
    likes++;
    totalCount2.innerText = likes;
    alert('Ninja was liked')
}

// Another option for several buttons
/*
let total = 0; (in HTML create "p class= total">0</p>)
const totalP = document.querySelectorAll('.total')

const allTotals = [0,0,0,0]

console.log(allTotals)
allTotals[1] = 5;

console.log(allTotals)
(in HTML create "button onclick"handleAddOne(0)"> user one">0</button>)
function handleAddOne(index){
    console.log(index)
    allTotals[index] = allTotals[index] + 1
    totalP[index].innerText = allTotals[index]
}
*/