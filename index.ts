// Import stylesheets
import './style.css';

interface miaInterfaccia {f1: string, f2: number};
class miaClasse implements miaInterfaccia {
    f1: string;
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