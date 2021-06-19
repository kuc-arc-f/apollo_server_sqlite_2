const sqlite = require('sqlite');
const sqlite3= require('sqlite3');
import {open} from 'sqlite';

var config = require('../config.json')['development'];
//
export default {
  get_items :async function(){
    try {
      var dbFile = config.DB_FILE_NAME
      const db = await open(
        {filename: dbFile , driver: sqlite3.Database}
      );
      const items = await db.all('select * from authors order by id desc');      
// console.log( item)     
      return items
    } catch (err) {
        throw new Error('Error , get_items');
    }          
  },    

 
}
