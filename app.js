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

    localStorage.setItem(time, value)
})


// This 

$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-10"))
$("#hour-11 .description").val(localStorage.getItem("hour-11"))
$("#hour-12 .description").val(localStorage.getItem("hour-12"))
$("#hour-1 .description").val(localStorage.getItem("hour-1"))
$("#hour-2 .description").val(localStorage.getItem("hour-2"))
$("#hour-3 .description").val(localStorage.getItem("hour-3"))
$("#hour-4 .description").val(localStorage.getItem("hour-4"))
$("#hour-5 .description").val(localStorage.getItem("hour-5"))



// $(selector).siblings(filter)
