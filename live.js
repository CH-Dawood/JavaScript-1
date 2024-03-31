document.getElementById("simpleAlert").onclick = function () {
    alert("This is an ALert")
}
function printMyName() {

    let myName = document.getElementById("inputText").value
    if (myName === "") {
        alert("Please Enter your Name")
        return
    }
    document.getElementById("output").innerHTML = myName
}
// print all cities

var cities = ['Faisalabad', 'Lahore', 'Karachi', 'Islamabad', 'Burewala', 'Shakhupura', 'Kashmir']

function printAllCities() {

    document.getElementById("output").innerHTML = ""

    for (let i = 0; i < cities.length; i++) {
        // console.log(cities[i])
        let num = i + 1;
        document.getElementById("output").innerHTML += num + ') ' + cities[i] + '<br>'

    }

}

// add your city in list
function addCity() {
    let city = document.getElementById("inputText").value
    if (city === "") {
        alert('Please Enter Your City Name')
        return
    }
    cities.push(city)
    document.getElementById('output').innerHTML = '<span style="colour : green; font-size ; 20px;">"' + city + '<span> has been successfully added into list.'

}
function generatTable(){

    let number = document.getElementById("inputText").value
    if (number === "")
    alert('Please Enter A Number ')
return
}
// var limit = +prompt("Give A Number")

document.getElementById("output-btn").onclick = function (){
    document.getElementById("output").innerHTML = ""
}
document.getElementById("button-addon2").onclick = function (){
    document.getElementById("inputText").innerHTML = ""
}