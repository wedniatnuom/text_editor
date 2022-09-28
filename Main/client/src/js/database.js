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

export const putDb = async (content) => {
  const touchDB = await openDB('contact', 1);
  const transDB = touchDB.transaction('contact', 'readwrite');
  const storeDB = transDB.objectStore('contact');
  const request = storeDB.put(content);
  const result = await request
};

export const getDb = async () => {
  const touchDB = await openDB('contact', 1);
  const transDB = touchDB.transaction('contact', 'readonly');
  const storeDB= transDB.objectStore('contact');
  const request = storeDB.getAll();
  const result = await request;
  return result
};

initdb();