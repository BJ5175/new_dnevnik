// ==========================================
// DEFAULT BAZA UČENIKA
//{ datum: "10.2.2026", razlog: "Bolest" }
//===========================================
//{ ocjena: 3, opis: "" },
//{ ocjena: 2, opis: "Loš rad na satu" },  // <-- ovo je negativna
//{ ocjena: null, opis: "Bilješka: zaboravila pribor" }
// ==========================================
const bazaUcenika = {   
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
            { ocjena: 5, opis: "Zadatak s sata" },

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
        vladanje: 3
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
        vladanje: 3
    },
    "Helena.Petricevic": {
        ime: "Helena Petričević",
        prezime: "Petricevic",
        izostanci: [{ datum: "21.04.2026", razlog: "Alergija/Bolest" }],
        podaci: [{ ocjena: 5, opis: "Aktivnost na satu" },
        { ocjena: 5, opis: "Zadatak s sata" },
        { ocjena: 5, opis: "Zadatak s sata" },
        { ocjena: 5, opis: "Kviz" },
        { ocjena: 5, opis: "Prezentacija" },
        { ocjena: 5, opis: "95% 5+ Test" },
        { ocjena: 5, opis: "100% 5+ Test" },

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
            { ocjena: 4, opis: "75% 4+ Test" },
            { ocjena: 5, opis: "Zadatak" },
            { ocjena: 5, opis: "100% 5+ Test" },

        ],
        vladanje: 5
    },
    "Sergej.Savcic": {
        ime: "Sergej Savčić",
        prezime: "Savcic",
        izostanci: [],
        podaci: [
            { ocjena: 5, opis: "Test" },
            { ocjena: 5, opis: "Zadatak" },
            { ocjena: 5, opis: "Zadatak" },
            { ocjena: 5, opis: "Prezentacija" },
            { ocjena: 5, opis: "5+ 100% Test" },
            { ocjena: 5, opis: "100% 5+ Test" },

        ],
        vladanje: 5
    }
};