//1
class Kibiras1 {
  constructor() {
    this.akmenuKiekis = 0;
  }
  prideti1Akmeni() {
    this.akmenuKiekis++;
  }

  pridetiDaugAkmenu(kiekis) {
    this.akmenuKiekis += kiekis;
  }

  kiekPririnktaAkmenu() {
    console.log(`Akmenų kibire yra ${this.akmenuKiekis}`);
  }
  ispiltiVisusAkmenis() {
    this.akmenuKiekis = 0;
  }
  perpiltiVisusAkmenis() {
    const akmenuKiekis = this.akmenuKiekis;
    this.akmenuKiekis = 0;
    return akmenuKiekis;
  }
}

const kibiras = new Kibiras1();
const kibiras2 = new Kibiras1();

kibiras.prideti1Akmeni();
kibiras.pridetiDaugAkmenu(10);
kibiras.kiekPririnktaAkmenu();
// kibiras.ispiltiVisusAkmenis();
kibiras.kiekPririnktaAkmenu();
console.log(kibiras.perpiltiVisusAkmenis());
kibiras.kiekPririnktaAkmenu();
//2

class Pinigine {
  constructor() {
    // this.popieriniaiPinigai = 0;
    // this.metaliniaiPinigai = 0;
    this.popieriniaiPinigai = [];
    this.metaliniaiPinigai = [];
  }
  ideti(kiekis) {
    if (kiekis <= 2) {
      // this.metaliniaiPinigai += kiekis;
      this.metaliniaiPinigai.push(kiekis);
    } else {
      // this.popieriniaiPinigai += kiekis;
      this.popieriniaiPinigai.push(kiekis);
    }
  }

  monetos() {
    const kiekis = this.metaliniaiPinigai.length;
    const suma = this.metaliniaiPinigai.reduce((sum, m) => sum + m, 0);
    return `Metaliniai pinigai: kiekis ${kiekis}, suma: ${suma} `;
  }

  banknotai() {
    const kiekis = this.popieriniaiPinigai.length;
    const suma = this.popieriniaiPinigai.reduce((sum, m) => sum + m, 0);
    return `Popieriniai pinigai:  kiekis ${kiekis}, suma: ${suma}`;
  }

  skaiciuoti() {
    console.log(
      `Iš viso piniginėje yra ${this.monetos()} ir ${this.banknotai()}`
    );
  }
}

const pinigine = new Pinigine();

pinigine.ideti(2);
pinigine.ideti(2);
pinigine.ideti(2);
pinigine.ideti(1);
pinigine.ideti(10);
pinigine.ideti(11);
pinigine.ideti(11);
pinigine.monetos();
pinigine.banknotai();

pinigine.skaiciuoti();

//3

class Troleibusas {
  constructor() {
    this.keleiviuSkaicius = 0;
  }

  ilipa(keleiviuSkaicius) {
    this.keleiviuSkaicius += keleiviuSkaicius;
  }

  islipa(keleiviuSkaicius) {
    if (this.keleiviuSkaicius >= keleiviuSkaicius) {
      this.keleiviuSkaicius -= keleiviuSkaicius;
    } else {
      console.log("Skaičius negali būti neigiamas");
    }
  }

  vaziuoja() {
    console.log(`Autobuse važiuoja ${this.keleiviuSkaicius} keleivių`);
  }
}

const troleibusas = new Troleibusas();

troleibusas.ilipa(10);
troleibusas.islipa(5);
troleibusas.islipa(4);
troleibusas.vaziuoja();

//8

class Stikline {
  constructor(turis) {
    this.turis = turis;
    this.kiekis = 0;
  }

  ipilti(kiekis) {
    if (this.kiekis + kiekis <= this.turis) {
      this.kiekis += kiekis;
    } else {
      this.kiekis = this.turis;
    }
  }

  ispilti() {
    const ispiltasKiekis = this.kiekis;
    this.kiekis = 0;
    return ispiltasKiekis;
  }

  stiklinejeYra() {
    console.log(`Stiklinėje yra ${this.kiekis}`);
  }
}

const stikline1 = new Stikline(200);
const stikline2 = new Stikline(150);
const stikline3 = new Stikline(100);

stikline1.ipilti(200);
stikline1.stiklinejeYra();

stikline2.ipilti(stikline1.ispilti());
stikline2.stiklinejeYra();

stikline3.ipilti(stikline2.ispilti());
console.log("-----------");
stikline1.stiklinejeYra();
stikline2.stiklinejeYra();
stikline3.stiklinejeYra();
