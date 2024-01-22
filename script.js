let day = document.getElementById("day")
let month = document.getElementById("month")
let year = document.getElementById("year")

let btn = document.getElementById("btn")

let y = document.getElementById("y")
let m = document.getElementById("m")
let d = document.getElementById("d")

let date = new Date()

document.getElementById("form").addEventListener("submit",(e) =>{
    e.preventDefault()
    let curDate = date.getDate()
    let curMonth = date.getMonth() + 1
    let curYear = date.getFullYear()

    let ageYear = curYear - year.value;
    let ageMonth = curMonth - month.value;
    let ageDate = curDate - day.value;


    if(ageDate<0){
        ageYear -= ageYear
        ageMonth = 12 - ageMonth
        if(ageMonth%2 === 0){
            ageDate = 31 + ageDate
        } else{
            ageDate = 30 + ageDate
        }
    }

    if(ageMonth<0){
        ageMonth = 12 + ageMonth
        ageYear = ageYear - 1
    }


    y.innerHTML = ageYear
    m.innerHTML = ageMonth
    d.innerHTML = ageDate
})

function validation(element){
    isNaN(element.value) ? element.classList.add("invalid") : element.classList.remove("invalid");
    element.value === '' ? element.classList.add('empty') : element.classList.remove("empty");
    year.value > date.getFullYear() ? year.classList.add("validYearGt") : year.classList.remove("validYearGt")
}

day.addEventListener("input",() => validation(day))
month.addEventListener("input",() => validation(month))
year.addEventListener("input",() => validation(year))