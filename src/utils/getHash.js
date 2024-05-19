
const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';


 export default getHash;

//location.hash trae un fragmento del URL a partir de donde se encuntre el #, En este caso traeria #/2
//slice(1) elimina el # y nos quedaria /2
//toLocaleLowerCase() convierte a minusculas
//split('/') divide el string en un array, en este caso quedaria ['','2']''
//split('/')[1] nos trae el segundo elemento del array, en este caso 2
