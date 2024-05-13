//1
class Kibiras1 {
  static visiAkmenys = 0;
  constructor() {
    this.akmenuKiekis = 0;
  }
  prideti1Akmeni() {
    this.akmenuKiekis++;
    Kibiras1.visiAkmenys++;
  }

  pridetiDaugAkmenu(kiekis) {
    this.akmenuKiekis += kiekis;
    Kibiras1.visiAkmenys += kiekis;
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

  static akmenuSkaiciusVisuoseKibiruose() {
    console.log(
      `Bendras akmenų kiekis visuose kibiruose: ${Kibiras1.visiAkmenys}`
    );
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
Kibiras1.akmenuSkaiciusVisuoseKibiruose();
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
  static visiKeleiviai = 0;

  static bendrasKeleiviuSkaicius(keleiviuSkaicius) {
    this.visiKeleiviai += keleiviuSkaicius;
  }
  constructor() {
    this.keleiviuSkaicius = 0;
  }

  ilipa(keleiviuSkaicius) {
    this.keleiviuSkaicius += keleiviuSkaicius;
    Troleibusas.bendrasKeleiviuSkaicius(keleiviuSkaicius);
  }

  islipa(keleiviuSkaicius) {
    if (this.keleiviuSkaicius >= keleiviuSkaicius) {
      this.keleiviuSkaicius -= keleiviuSkaicius;
      Troleibusas.bendrasKeleiviuSkaicius(-keleiviuSkaicius);
    } else {
      console.log("Skaičius negali būti neigiamas");
    }
  }

  vaziuoja() {
    console.log(`Autobuse važiuoja ${this.keleiviuSkaicius} keleivių`);
  }

  static keleiviuSkaiciusVisuoseTroleibusuose() {
    console.log(
      `Bendras keleivių skaičius visuose troleibusuose: ${Troleibusas.visiKeleiviai}`
    );
  }
}

const troleibusas = new Troleibusas();
const troleibusas2 = new Troleibusas();

troleibusas.ilipa(10);
troleibusas.islipa(5);
troleibusas.islipa(4);
troleibusas.vaziuoja();
troleibusas2.ilipa(5);
troleibusas2.islipa(3);

Troleibusas.keleiviuSkaiciusVisuoseTroleibusuose();

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

//5

class PirkiniuKrepselis {
  constructor() {
    this.turinys = new Map();
  }

  idetiSureli(kiekis) {
    this.idetiProdukta("Sūrelis", kiekis);
  }

  idetiPieno(kiekis) {
    this.idetiProdukta("Pienas", kiekis);
  }

  idetiDuonos(kiekis) {
    this.idetiProdukta("Duona", kiekis);
  }

  krepselioTurinys() {
    console.log("Krepselio turinys:");
    this.turinys.forEach((kiekis, produktas) => {
      console.log(`${produktas}: ${kiekis}`);
    });
  }

  idetiProdukta(produktas, kiekis) {
    if (this.turinys.has(produktas)) {
      this.turinys.set(produktas, this.turinys.get(produktas) + kiekis);
    } else {
      this.turinys.set(produktas, kiekis);
    }
  }
}

const krepselis = new PirkiniuKrepselis();
krepselis.idetiSureli(2);
krepselis.idetiPieno(1);
krepselis.idetiDuonos(3);
krepselis.idetiSureli(1);

krepselis.krepselioTurinys();

//9

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Grybas {
  constructor() {
    this.valgomas = rand(0, 1);
    this.sukirmijes = rand(0, 1);
    this.svoris = rand(5, 45);
  }
}

class Krepsys {
  constructor() {
    this.dydis = 500;
    this.prikrauta = 0;
  }

  deti(grybas) {
    if (!grybas.sukirmijes && grybas.valgomas) {
      if (this.prikrauta + grybas.svoris <= this.dydis) {
        this.prikrauta += grybas.svoris;
        console.log(`Į krepšį pridėtas grybas, svoris: ${grybas.svoris}`);
      } else {
        console.log("Krepšys pilnas.");
      }
    } else {
      console.log("Grybas nesutinka su kriterijais.");
    }
  }
}

// Grybavimo procesas
const krepsys = new Krepsys();

while (krepsys.prikrauta < krepsys.dydis) {
  const grybas = new Grybas();
  krepsys.deti(grybas);
}

console.log("Grybų rinkimas baigtas. Krepšyje surinkti grybai:");
console.log(`Prikrauta: ${krepsys.prikrauta}/${krepsys.dydis}`);
