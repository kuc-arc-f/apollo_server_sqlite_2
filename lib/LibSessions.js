const sqlite = require('sqlite');
const sqlite3= require('sqlite3');
import {open} from 'sqlite';

var config = require('../config.json')['development'];
//
export default {
  get_items :async function(){
    try {
//      var item = []
      var dbFile = config.DB_FILE_NAME
      const db = await open(
        {filename: dbFile , driver: sqlite3.Database}
      );
      const items = await db.all('select * from sessions order by id desc');      
// console.log( item)     
      return items
    } catch (err) {
        throw new Error('Error , get_items');
    }          
  },
  get_item :async function(id){
    try {
// console.log( item)            
      var dbFile = config.DB_FILE_NAME
      const db = await open(
        {filename: dbFile , driver: sqlite3.Database}
      );
      var sql ="select * from sessions where id=" + id
      const items = await db.all(sql);    
      var item = items[0]          
      return item
    } catch (err) {
      throw new Error('Error , get_item');
    }          
  },
  add_item :async function(args){
    try {
      var dbFile = config.DB_FILE_NAME
      const db = await open(
        {filename: dbFile , driver: sqlite3.Database}
      );
      const result = await db.run(
        'INSERT INTO sessions (user_id, jsondata) VALUES (?, ?)',
        args.user_id,
        args.jsondata,
      )              
// console.log( item)            
      return args
    } catch (err) {
      throw new Error('Error , add_item');
    }          
  },
  update_todo :async function(args){
    try {
      var dbFile = config.DB_FILE_NAME
      const db = await open(
        {filename: dbFile , driver: sqlite3.Database}
      );
      const result = await db.run(
        'UPDATE todos SET title = ? WHERE id = ?',
        args.title,
        args.id
      )       
// console.log( item)            
      return args
    } catch (err) {
      throw new Error('Error , update_todo');
    }          
  },
  delete_item :async function(args){
    try {
      var dbFile = config.DB_FILE_NAME
      const db = await open(
        {filename: dbFile , driver: sqlite3.Database}
      );
      const result = await db.run(
        'delete from sessions  WHERE id = ?',
        args.id
      )        
// console.log( item)            
      return args
    } catch (err) {
      throw new Error('Error , delete_item');
    }          
  },  
}
