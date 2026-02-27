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
        izostanci: [],
        podaci: [
            { ocjena: 5, opis: "Zadatak s sata" },
            { ocjena: 4, opis: "Zadatak s sata" },
            { ocjena: 3, opis: "Test 65/100" },
            { ocjena: 2, opis: "Projekat" },
            { ocjena: 1, opis: "Aktivnost na satu" }
        ],
        vladanje: 2
    },
    "Nikola.Ujic": {
        ime: "Nikola Ujić",
        prezime: "Ujic",
        izostanci: [],
        podaci: [
            { ocjena: 5, opis: "Zadatak s sata" },
            { ocjena: 5, opis: "Test 100/100" },
            { ocjena: 4, opis: "Zadatak s sata" },
            { ocjena: 3, opis: "Aktivnost na satu" }
        ],
        vladanje: 5
    },
    "Una.Savic": {
        ime: "Una Savić",
        prezime: "Savic",
        izostanci: [{ datum: "13.02.2026", razlog: "Bolest" }],
        podaci: [
            { ocjena: 5, opis: "Grupni rad" },
            { ocjena: 4, opis: "Vježba" }
        ],
        vladanje: 5
    },
    "Una.Drakul": {
        ime: "Una Drakul",
        prezime: "Drakul",
        izostanci: [

        ],
        podaci: [
            { ocjena: null, opis: "Učenica prosula sok po tuđem laptopu" },
            { ocjena: 5, opis: "Grupni rad" },
            { ocjena: 4, opis: "Vježba" }
        ],
        vladanje: 5
    },
    "Helena.Petricevic": {
        ime: "Helena Petričević",
        prezime: "Petricevic",
        izostanci: [],
        podaci: [{ ocjena: 5, opis: "Aktivnost na satu" },
            { ocjena: 5, opis: "Zadatak s sata" },
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
            { ocjena: 5, opis: "CodeMatrix" }
        ],
        vladanje: 4
    },
    "Sergej.Savcic": {
        ime: "Sergej Savčić",
        prezime: "Savcic",
        izostanci: [],
        podaci: [
            { ocjena: 5, opis: "Test" },
            { ocjena: 5, opis: "Zadatak" },
            { ocjena: 5, opis: "Zadatak" }
        ],
        vladanje: 5
    },
    "Sergej.Mocevic": {
        ime: "Sergej Močević",
        prezime: "Mocevic",
        izostanci: [
            { datum: "24.02.2026", razlog: "Bolest" },
            { datum: "20.02.2026", razlog: "Bolest" }
        ],
        podaci: [{ ocjena: 5, opis: "Grupni rad" }],
        vladanje: 5
    }
};