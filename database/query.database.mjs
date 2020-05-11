import db from './connect.database.mjs';

export async function getAllUsers() {
  try {
    return await db.select('*').from('users');
  } catch (error) {
    console.error(error);
  }
}

export async function insertUser(data) {
  try {
    return await db('users').returning('*').insert(data);
  } catch (error) {
    console.error('Insert user error: ', error.detail);
  }
}
