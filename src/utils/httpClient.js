import {openDatabase} from 'react-native-sqlite-storage';

export const sqlite = openDatabase({
  name: 'FORM_PENDAFTARAN',
});
const httpClient = {
  createTable(table, obj) {
    const value = Object.keys(obj)
      .map(key => `${key} ${obj[key]}`)
      .join(', ');

    let query = `CREATE TABLE IF NOT EXISTS ${table} (${value})`;
    // let query = `DROP TABLE IF EXISTS ${table}`;

    sqlite.transaction(txn => {
      txn.executeSql(
        query,
        [],
        (sqlTxn, res) => {},
        err => console.log(`Table "${table}" creating error => ` + err.message),
      );
    });
  },
  ApiGet(table, orderBy) {
    return new Promise((resolve, reject) => {
      let query = `SELECT * FROM ${table}`;

      if (orderBy) {
        query = `SELECT * FROM ${table} ORDER BY ${orderBy} DESC`;
      }

      sqlite.transaction(txn => {
        txn.executeSql(
          query,
          [],
          (sqlTxn, res) => {
            setTimeout(() => {
              let len = res.rows.length;
              if (len > 0) {
                let results = [];
                for (let i = 0; i < len; i++) {
                  let item = res.rows.item(i);
                  results.push(item);
                }
                resolve({length: len, data: results});
              } else resolve({length: 0, data: []});
            }, 1500);
          },
          err => setTimeout(() => reject(err), 1500),
        );
      });
    });
  },
  ApiPost(table, object) {
    return new Promise((resolve, reject) => {
      const keys = Object.keys(object);
      const values = keys.map(key => `${object[key]}`);

      let query = `INSERT INTO ${table} (${keys.join(', ')}) VALUES (${values
        .map(() => '?')
        .join(', ')})`;

      sqlite.transaction(txn => {
        txn.executeSql(
          query,
          values,
          (sqlTxn, res) => setTimeout(() => resolve(res), 1500),
          err => setTimeout(() => reject(err), 1500),
        );
      });
    });
  },
};

export default httpClient;
