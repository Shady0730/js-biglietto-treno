console.log('Esercizio Biglietto treno')

//Chiedere all'utente età e km da percorrere
const km = prompt ('Quanti kilometri vuoi percorrere?')
console.log (km);


const eta = prompt ('Quanti anni hai?')
console.log (eta);

const prezzoTot = (0.21 * km) 
console.log (prezzoTot);

const scontoUnder = (prezzoTot * 20 / 100)
const scontoOver = (prezzoTot * 40 / 100)

if(eta < 18){
    console.log(prezzoTot - scontoUnder);
}
else if(eta > 65){
    console.log(prezzoTot - scontoOver)
 }
 else{
    console.log(prezzoTot);
 }