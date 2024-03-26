console.log('Esercizio Biglietto treno')

//Chiedere all'utente età e km da percorrere
const km = prompt ('Quanti kilometri vuoi percorrere?')
console.log (km);


const eta = prompt ('Quanti anni hai?')
console.log (eta);

//Calcolare il prezzo totale
const prezzoTot = (0.21 * km) 

//Calcolare gli sconti
const scontoUnder = (prezzoTot * 20 / 100)
const scontoOver = (prezzoTot * 40 / 100)
const prezzoUnder = (prezzoTot - scontoUnder)
const prezzoOver = (prezzoTot - scontoOver)

//SE si ha meno di 18 anni si avrà uno sconto del 20%
if(eta < 18){
    console.log('Il prezzo del biglietto è', prezzoUnder.toFixed(2));
}
//ALTRIMENTI SE si ha più di 65 anni si avrà uno sconto del 40%
else if(eta > 65){
    console.log('Il prezzo del biglietto è', prezzoOver.toFixed(2));
 }
 //ALTRIMENTI il prezzo rimarrà quello totale
 else{
    console.log('Il prezzo del biglietto è', prezzoTot);
 }

