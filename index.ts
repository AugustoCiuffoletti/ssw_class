// Import stylesheets
import './style.css';

class miaClasse {
    f1: string; // f1 e f2 sono le proprieta' degli oggetti della classe miaClasse
    f2: number;
    constructor() {
        this.f1="",
        this.f2=0
    }
};
var X = new miaClasse() ;
var a = "Hallo";
X.f1 = a;
X.f2 = a;
console.log(X)