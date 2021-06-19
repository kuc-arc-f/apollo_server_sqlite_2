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
      const items = await db.all('select * from books order by id desc');      
// console.log( item)     
      return items
    } catch (err) {
        throw new Error('Error , get_items');
    }          
  },    
  get_book :async function(id){
    try {
// console.log( item)            
      var dbFile = config.DB_FILE_NAME
      const db = await open(
        {filename: dbFile , driver: sqlite3.Database}
      );
      var sql ="select * from books where id=" + id
      const items = await db.all(sql);    
      var item = items[0]          
      return item
    } catch (err) {
      throw new Error('Error , get_book');
    }          
  },
  add_book :async function(args){
    try {
      var dbFile = config.DB_FILE_NAME
      const db = await open(
        {filename: dbFile , driver: sqlite3.Database}
      );
      const result = await db.run(
        `INSERT INTO books (title, content ,category_id, radio_1, check_1, date_1)
         VALUES (?, ? , ? , ? , ? , ?)`,
        args.title,
        args.content,
        args.category_id,
        args.radio_1,
        args.check_1,
        args.date_1
      )              
// console.log( item)            
      return args
    } catch (err) {
      throw new Error('Error , add_book');
    }          
  },
  update_book :async function(args){
    try {
      var dbFile = config.DB_FILE_NAME
      const db = await open(
        {filename: dbFile , driver: sqlite3.Database}
      );
      const result = await db.run(
        `UPDATE books SET title = ? , content = ? ,category_id = ?
        WHERE id = ?
        `,
        args.title,
        args.content,
        args.category_id,
        args.id
      )       
// console.log( item)            
      return args
    } catch (err) {
      throw new Error('Error , update_book');
    }          
  },
  delete_book :async function(args){
    try {
      var dbFile = config.DB_FILE_NAME
      const db = await open(
        {filename: dbFile , driver: sqlite3.Database}
      );
      const result = await db.run(
        'delete from books  WHERE id = ?',
        args.id
      )        
// console.log( item)            
      return args
    } catch (err) {
      throw new Error('Error , delete_book');
    }          
  },  
}
