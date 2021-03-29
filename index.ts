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
X.f1 = "Hello";
X.f2=1/3;
console.log(X)