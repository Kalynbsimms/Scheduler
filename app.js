// Display the current date on the page
$('#currentDay').html(moment().format('dddd, MMMM Do, YYYY'));



const currentTime = moment().format('h');
console.log(currentTime)

let hours = [9, 10, 11, 12, 1, 2, 3, 4, 5]
let currentIndex = hours.indexOf(parseInt(currentTime))


// Determines if times are in the past, present, or future
for (let i = 0; i < hours.length; i++) {
    if (i < currentIndex) {
        $(`.hour-${hours[i]}`).addClass('past')
    } else if (i > currentIndex) {
        $(`.hour-${hours[i]}`).addClass('future')
    } else {
        $(`.hour-${hours[i]}`).addClass('present')
    }
}


// $(document).ready(function () {

$(".saveBtn").click(function () {
    let value = $(this).siblings(".description").val()
    console.log(value)
    let time = $(this).parents().attr("id")
    console.log(time)

    localStorage.setItem(value)
    localStorage.setItem(time, value)
})



})

    // / Grabbing user input from local storage and retreving it when the page is refreshed after hitting save button
$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#1 .description").val(localStorage.getItem("1"))
$("#2 .description").val(localStorage.getItem("2"))
$("#3 .description").val(localStorage.getItem("3"))
$("#4 .description").val(localStorage.getItem("4"))
$("#5 .description").val(localStorage.getItem("5"))



