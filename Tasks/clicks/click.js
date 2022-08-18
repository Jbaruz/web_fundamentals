var count = 0;
var totalCount = document.getElementById("totalCount");

function example(element){
    // console.log(element.innerText)
    // element.innerText = 'Button was clicked'
    count++;
    console.log(count)
    totalCount.innerText = count;
}