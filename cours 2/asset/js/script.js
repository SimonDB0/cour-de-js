        /// exercise 1 \\\\
        console.log( 'Exercice 1' ) 

const a = "bonjour" 
const b = 156.14
const c = {
    name : "Flo",
    age : 27
}
console.log("valeur a : ",a)
console.log("valeur b : ",b)
console.log("valeur c : ",c)

if(b > 100){
    console.error("b est plus grand que 100 : ", b)
}

console.warn("A est une chaine de caractère : ", a)
console.error("A est une chaine de caractère : ", a)

        /// exercise 2 \\\\
        console.log( 'Exercice 2' ) 

console.log("max de 3 nombres : ", Math.max(1,2,3))
// ma variable doit etre comprise entre 0 et 100
var d = 150 
d = Math.min(d , 100) // limite a 100
d = Math.max(d , 0) // au moin 0
console.log(d)

        /// exercise 3 \\\\
        console.log( 'Exercice 3' ) 


        const balise = (n) => {
            n = Math.min(n , 100)
            n = Math.max(n , 0)
           //console.log("balise", n )
            return Math.min(100,Math.max(0,n))
        }

        const tableau = [
            balise(5),
            balise(-20),
            balise(125),
            balise(48),
            balise(-39),
            balise(99),
            balise(100),
            balise(0)
        ]
        console.log(tableau)

        

        //nombre aléa entre 10 et 20 
        let note = Math.ceil(Math.random()*11)+9
        console.log("nombre aléa entre 10 et 20 : ",note)

        // automatiser le nombre aléa entre 2 var
        const random = (min,max) => {
            if(max===undefined){
                max = min 
                min = 0
            }
            return Math.ceil(Math.random()*(max-min+1))+(min-1)
             
        }
        console.log("nombre random automatisé entre 100 et 200: ", random (100,200))
        console.log("nombre r automatisé entre 0 et 200 avec le max: ", random (200))

        /// exercise 3 \\\\
        console.log( 'Exercice 3' ) 



