// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use

//  https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyB4qRZej4pl6a3Yqr3MTaZ6DEd7D5kB5pM",

  authDomain: "classement-liga-89c55.firebaseapp.com",

  projectId: "classement-liga-89c55",

  storageBucket: "classement-liga-89c55.appspot.com",

  messagingSenderId: "761200384180",

  appId: "1:761200384180:web:94e13ac152ecb9028f5fe1"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const btn = document.getElementById('btn');
btn.addEventListner("click", (e) => {
  let equipe= document.getElementById('equipe').value;
  let journee = document.getElementById('journee').value;
  let victoire = document.getElementById('victoire').value;
  let nulle = document.getElementById('nulle').value;
  let defaite = document.getElementById('defaite').value;
  let butMarque = document.getElementById('but-marque').value;
  let butEncaisse = document.getElementById('but-encaisse').value;
  let difference = document.getElementById('difference').value;
  let totalPoints = document.getElementById('total').value;
  // console.log('hello');
})

 addDoc(collection(db, "liga"), {
  equipe:equipe,
  journee:journee,
  victoire:victoire,
  nulle:nulle,
  defaite:defaite,
  butMarque:butMarque,
  butEncaisse:butEncaisse,
  difference:difference,
  totalPoints:totalPoints,
});
alert('Equipe ajoute');



let tab = [];
function enregistrer() {
  
  console.log('hello');

  let Equipe = {
    equipe: equipe.value,
    journee: journee.value,
    victoire: victoire.value,
    nulle: nulle.value,
    defaite: defaite.value,
    butMarque: butMarque.value,
    butEncaisse: butEncaisse.value,
    difference: difference.value,
    totalPoints: totalPoints.value,
  };

  console.log(Equipe);
  
  tab.push(Equipe);
  equipe.value= '';
  journee.value = '';
  victoire.value = '';
  nulle.value = '';
  defaite.value = '';
  butMarque.value = '';
  butEncaisse.value = '';
  difference.value = '';
  totalPoints.value = '';
}

// function table(){
//     let tableau=`<table>
//     <thead>
//     <tr>
//     <th scope="col">N</th>
//     <th scope="col">Equipes</th>
//     <th scope="col">J</th>
//     <th scope="col">V</th>
//     <th scope="col">N</th>
//     <th scope="col">D</th>
//     <th scope="col">bm</th>
//     <th scope="col">be</th>
//     <th scope="col">+/-</th>
//     <th scope="col">Pts</th>
//     </tr>
//     </thead>
//     <tbody>`;
//     for (let i = 0; i < tab.length; i++){
//         tableau= tableau+`<tr>
//         <td>${tab[i+1]}</td>
//         <td>${tab[i].equipe}</td>
//         <td>${tab[i].journee}</td>
//         <td>${tab[i].victoire}</td>
//         <td>${tab[i].nulle}</td>
//         <td>${tab[i].defaite}</td>
//         <td>${tab[i].butMarque}</td>
//         <td>${tab[i].butEncaisse}</td>
//         <td>${tab[i].difference}</td>
//         <td>${tab[i].totalPoints}</td>
//         </tr>`
//     }
//     `</tbody>
//     </table>`
//     document.getElementById('table').innerHTML=tableau;
// }

// table();

// const tbody= document.getElementById("tbody");
// const afficheTable=(element)=>{
//    element.map((items) =>{
// tbody.innerHTML+=`<tr>
// <td>${items +1}</td>
// <td>${items.equipe}</td>
// <td>${items.journee}</td>
// <td>${items.victoire}</td>
// <td>${items.nulle}</td>
// <td>${items.defaite}</td>
// <td>${items.butMarque}</td>
// <td>${items.butEncaisse}</td>
// <td>${items.difference}</td>
// <td>${items.totalPoints}</td>
// </tr>`
// })

// }
// afficheTable(tab);
// console.log(tab);