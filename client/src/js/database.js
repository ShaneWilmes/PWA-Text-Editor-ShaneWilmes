import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to the database');
  const jateDb = await openDB('jate', 1)
  const tx = tx.objectStore('jate')
  const request = store.put({ id: 1, value: content })
  const result = await request
  if (result){console.log('Data saved', result.value)}
  else {
    console.log('Data did not save')
  }
}


// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database')
  const jateDb = await openDB('jate', 1);
  const text = jateDb.transaction('jate', 'readonly')
  const store = text.objectStore('jate')
  const request = store.get(1)
  const result = await request
  if (result){
    console.log('Data found', final?.value)
    return final?.value
       //return final IF there is data in final. 
  } else {
    console.log('Data was not found!')
  }
};

initdb();
