const Database = require('better-sqlite3')
const dbPath = './db/db.db'
const db = new Database(dbPath,{verbose: console.log})

const base = {

    getTables: ()=>{
        return db.prepare('SELECT name FROM sqlite_schema').all()
    },

    getTable: ()=>{
        return db.prepare(`SELECT * FROM testTableToys`).all()
    },

        dev: {
            //funkcje robocze
            testFunc: ()=>{
                return `hello`
            },
            createTestTable: ()=>{
                try{
                    db.prepare(`CREATE TABLE IF NOT EXISTS testTableToys (
                        id INTEGER PRIMARY KEY,
                        sn INTEGER,
                        kind INTEGER,
                        name TEXT,
                        model TEXT,
                        product_year DATE,
                        active BOOLEAN,
                        info TEXT
                    );`).run()
                    return 'OK'
                }catch(err){
                    console.log(err)
                    return err
                }

            },
            putTestData: ()=>{
                try{
                    const insertsTable = [`INSERT INTO testTable (ID, SN, Name, inputDate, active, info) VALUES (1, 12345, 'Laptop', '2023-01-01', True, 'Wysokowydajny laptop');`,
            `INSERT INTO testTable (ID, SN, Name, inputDate, active, info) VALUES (2, 67890, 'Smartfon', '2023-01-02', True, 'Najnowszy model smartfona');`,
            `INSERT INTO testTable (ID, SN, Name, inputDate, active, info) VALUES (3, 54321, 'Tablet', '2023-01-03', True, 'Wygodny tablet do przeglądania stron internetowych');`,
            `INSERT INTO testTable (ID, SN, Name, inputDate, active, info) VALUES (4, 98765, 'Telewizor', '2023-01-04', True, 'Duży telewizor o wysokiej rozdzielczości');`,
            `INSERT INTO testTable (ID, SN, Name, inputDate, active, info) VALUES (5, 13579, 'Konsola gier', '2023-01-05', True, 'Popularna konsola do gier');`,
            `INSERT INTO testTable (ID, SN, Name, inputDate, active, info) VALUES (6, 24680, 'Słuchawki bezprzewodowe', '2023-01-06', True, 'Komfortowe słuchawki do słuchania muzyki');`,
            `INSERT INTO testTable (ID, SN, Name, inputDate, active, info) VALUES (7, 86420, 'Router Wi-Fi', '2023-01-07', True, 'Szybki router do domowej sieci bezprzewodowej');`,
            `INSERT INTO testTable (ID, SN, Name, inputDate, active, info) VALUES (8, 97531, 'Drukarka', '2023-01-08', True, 'Kolorowa drukarka do pracy biurowej');`,
            `INSERT INTO testTable (ID, SN, Name, inputDate, active, info) VALUES (9, 12346, 'Smartwatch', '2023-01-09', True, 'Elegancki smartwatch z funkcjami monitorowania zdrowia');`,
            `INSERT INTO testTable (ID, SN, Name, inputDate, active, info) VALUES (10, 67891, 'Aparat fotograficzny', '2023-01-10', True, 'Lustrzanka cyfrowa dla profesjonalistów');`]
                    const insertTable2 = `INSERT INTO testTableToys (sn, kind, name, model, product_year, active, info)
                    VALUES
                        (98765, 2, 'Blocks', 'XYZ-789', '2021-08-10', true, 'Colorful building blocks'),
                        (54321, 3, 'Puzzle', 'LMN-456', '2023-01-20', false, '1000-piece jigsaw puzzle'),
                        (24680, 1, 'Doll', 'DEF-567', '2020-05-05', true, 'Fashion doll with accessories'),
                        (13579, 2, 'Car', 'UVW-321', '2024-02-28', true, 'Remote-controlled race car'),
                        (86420, 3, 'Board', 'OPQ-987', '2019-11-12', false, 'Chess board with wooden pieces');`
                    //insertsTable.map(insert =>db.prepare(insert).run())
                    db.prepare(insertTable2).run()
                    return 'OK'
                }catch(err){
                    console.log(err)
                    return err
                }

            },
            getTestTable: ()=>{
                return db.prepare('SELECT * FROM testTable').all()
            }
        }

}

module.exports = base



