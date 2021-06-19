const sqlite = require('sqlite');
const sqlite3= require('sqlite3');
import {open} from 'sqlite';
import LibAuthors from '../lib/LibAuthors'

var config = require('../config.json')['development'];
//
export default {
  get_items :async function(){
    try {
      const authors = await LibAuthors.get_items()
      var dbFile = config.DB_FILE_NAME
      const db = await open(
        {filename: dbFile , driver: sqlite3.Database}
      );
      const items = await db.all('select * from articles order by id desc');
      var ret = []
      items.forEach(function(item){
        var authorOne = authors.filter(author => (author.id == parseInt(item.author)));
        item.author = authorOne[0]
        ret.push(item)
      });            
// console.log( items)     
      return ret
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
      var sql ="select * from articles where id=" + id
      const items = await db.all(sql);    
      var item = items[0]          
      return item
    } catch (err) {
      throw new Error('Error , get_book');
    }          
  },
  add_item :async function(args){
    try {
      var dbFile = config.DB_FILE_NAME
      const db = await open(
        {filename: dbFile , driver: sqlite3.Database}
      );
      const result = await db.run(
        `INSERT INTO articles (title, author)
         VALUES (?, ?)`,
        args.title,
        args.author_id
      )              
// console.log( item)            
      return args
    } catch (err) {
      throw new Error('Error , add_item');
    }          
  },
  update_book :async function(args){
    try {
      return {}
    } catch (err) {
      throw new Error('Error , update_book');
    }          
  },
  delete_item :async function(args){
    try {
      var dbFile = config.DB_FILE_NAME
      const db = await open(
        {filename: dbFile , driver: sqlite3.Database}
      );
      const result = await db.run(
        'delete from articles  WHERE id = ?',
        args.id
      )        
// console.log( item)            
      return args
    } catch (err) {
      throw new Error('Error , delete_book');
    }          
  },  
}
