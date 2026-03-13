// ==========================================
// DEFAULT BAZA UČENIKA
//{ datum: "10.2.2026", razlog: "Bolest" }
//===========================================
//{ ocjena: 3, opis: "" },
//{ ocjena: 2, opis: "Loš rad na satu" },  // <-- ovo je negativna
//{ ocjena: null, opis: "Bilješka: zaboravila pribor" }
// ==========================================
const bazaUcenika = {
    "Matija.Perucica": {
        ime: "Matija Peručica",
        prezime: "Perucica",
        izostanci: [{ datum: "6.3.2026", razlog: "U Kalinoviku" },
        { datum: "13.02.2026", razlog: "Rođendan??" }],
        
        podaci: [
            { ocjena: 5, opis: "Zadatak s sata" },
            { ocjena: 4, opis: "Zadatak s sata" },
            { ocjena: 3, opis: "Test 65/100" },
            { ocjena: 2, opis: "Projekat" },
            { ocjena: 1, opis: "Aktivnost na satu" },
            { ocjena: 5, opis: "Odlična stranica" },
            { ocjena: 5, opis: "Trud" },
            { ocjena: 5, opis: "Odlična stranica" },
            { ocjena: 5, opis: "Trud" },
            { ocjena: 5, opis: "Odlična stranica" },
            { ocjena: 5, opis: "Trud" },
            { ocjena: 5, opis: "Odlična stranica" },
            { ocjena: 5, opis: "Trud" },

        ],
        vladanje: 4
    },
    "Nikola.Ujic": {
        ime: "Nikola Ujić",
        prezime: "Ujic",
        izostanci: [],
        podaci: [
            { ocjena: 5, opis: "Zadatak s sata" },
            { ocjena: 5, opis: "Test 100/100" },
            { ocjena: 4, opis: "Zadatak s sata" },
            { ocjena: 3, opis: "Aktivnost na satu" },
            { ocjena: 5, opis: "(5-) Usmeni odgovor" },
            { ocjena: 1, opis: "Loše vladanje" },
            { ocjena: 5, opis: "Odlična stranica" },
            { ocjena: 5, opis: "Zadatak s sata" }
        ],
        vladanje: 3
    },
    "Una.Savic": {
        ime: "Una Savić",
        prezime: "Savic",
        izostanci: [{ datum: "13.02.2026", razlog: "Bolest" }],
        podaci: [
            { ocjena: 5, opis: "Grupni rad" },
            { ocjena: 4, opis: "Vježba" },
            { ocjena: 4, opis: "Zadatak s sata" },
            { ocjena: 5, opis: "Kviz" },
            { ocjena: 5, opis: "Prezentacija" },
            { ocjena: 5, opis: "Aktivnost na satu" },
        ],
        vladanje: 4
    },
    "Una.Drakul": {
        ime: "Una Drakul",
        prezime: "Drakul",
        izostanci: [

        ],
        podaci: [
            { ocjena: null, opis: "Učenica prosula sok po tuđem laptopu" },
            { ocjena: 5, opis: "Grupni rad" },
            { ocjena: 4, opis: "Vježba" },
            { ocjena: 4, opis: "Zadatak s sata" },
            { ocjena: 5, opis: "Kviz" },
            { ocjena: 5, opis: "Prezentacija" }
        ],
        vladanje: 4
    },
    "Helena.Petricevic": {
        ime: "Helena Petričević",
        prezime: "Petricevic",
        izostanci: [],
        podaci: [{ ocjena: 5, opis: "Aktivnost na satu" },
        { ocjena: 5, opis: "Zadatak s sata" },
        { ocjena: 5, opis: "Zadatak s sata" },
        { ocjena: 5, opis: "Kviz" },
        { ocjena: 5, opis: "Prezentacija" },
        { ocjena: 5, opis: "95% 5+ Test" }
        ],

        vladanje: 5
    },
    "Filip.Vujicic": {
        ime: "Filip Vujičić",
        prezime: "Vujicic",
        izostanci: [],
        podaci: [
            { ocjena: 5, opis: "Test" },
            { ocjena: 5, opis: "CodeMatrix" },
            { ocjena: 5, opis: "CodeMatrix" },
            { ocjena: 5, opis: "Kviz" },
            { ocjena: 5, opis: "Zadatak" },
            { ocjena: 4, opis: "75% 4+ Test" }
        ],
        vladanje: 5
    },
    "Sergej.Savcic": {
        ime: "Sergej Savčić",
        prezime: "Savcic",
        izostanci: [{ datum: "13.02.2026", razlog: "Bolest" }],
        podaci: [
            { ocjena: 5, opis: "Test" },
            { ocjena: 5, opis: "Zadatak" },
            { ocjena: 5, opis: "Zadatak" },
            { ocjena: 5, opis: "Prezentacija" },
            { ocjena: 5, opis: "5+ 100% Test" },
        ],
        vladanje: 5
    }
};