const sqlite = require('sqlite');
const sqlite3= require('sqlite3');
import {open} from 'sqlite';
import LibAuthors from '../lib/LibAuthors'
import LibPagenate from '../lib/LibPagenate'

var config = require('../config.json')['development'];
//
export default {
  get_items :async function(page){
    try {
      LibPagenate.init()
      var pageInfo=LibPagenate.get_page_start(page)
//console.log(pageInfo)
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
      ret = LibPagenate.getOnepageItems(ret, pageInfo.start , pageInfo.end )   
// console.log( items)     
      return ret
    } catch (err) {
        throw new Error('Error , get_items');
    }          
  },    
  get_item :async function(id){
    try {
      const authors = await LibAuthors.get_items()
// console.log( item)            
      var dbFile = config.DB_FILE_NAME
      const db = await open(
        {filename: dbFile , driver: sqlite3.Database}
      );
      var sql ="select * from articles where id=" + id
      var items = await db.all(sql);   
      if(items.length > 0){
        var item = items[0]
        var authorOne = authors.filter(author => (author.id == parseInt(item.author)));
        item.author = authorOne[0]          
      } 
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
