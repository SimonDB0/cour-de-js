var exer = 1

/// exercise 1 \\\\
console.log( 'Exercice 1' ) 
var a = 2 
var b = "10,53€"
b = b.replace(',','.')
b = parseFloat(b)
console.log('a+b ' + a+b)
console.log('b*2 ' + b*2)


/// exercise 2 \\\\
console.log( 'Exercice 2') 
 
var prix = 17.48
const tva = 0.21
var total = prix*(1+tva)

console.log( total.toFixed(2) + ' €') 


/// exercise 3 \\\\
console.log( 'Exercice 3') 
let name = "Moule"
let firstname = "Flo"
let price = "$250,25"
// $1 = 0,92€ 
price = price.replace('$','')
price = price.replace(',','.')
price = parseFloat(price) * 0.92
 

// document.write("Bonjour " + firstname + " " + name + "<br/>")
document.write(" <h3> Exercice 3 </h3>")
document.write(`
<h2> Bonjour ${firstname} ${name} ha oui oui </h2>
<p> vous nous devez ${price.toFixed(2)} €</p>
`)
console.log( 'text dans la page html')


/// exercise 4 \\\\
console.log( 'Exercice 4') 
let distance = 24.6662591
// var km = math.floor(distance) //24
// var km = math.ceil(distance) //25
// var km = math.round(distance) //24
document.write(" <h3> Exercice 4 </h3>")
document.write(Math.floor(distance)+ "<br />")
document.write(Math.ceil(distance)+ "<br />")
document.write(Math.round(distance)+ "<br />")

