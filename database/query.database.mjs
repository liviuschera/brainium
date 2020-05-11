import db from './connect.database.mjs';

export async function getAllUsers() {
  try {
    return await db.select('*').from('users');
  } catch (error) {
    console.error('Retrieving users error:', error);
  }
}

export async function insertUser(data) {
  try {
    return await db('users').returning('*').insert(data);
  } catch (error) {
    console.error('Insert user error: ', error.detail);
  }
}

export async function getUserById(id) {
  try {
    return await db.select('*').from('users').where({ id: id });
  } catch (error) {
    console.error(`Unable to retrieve user with id: ${id}`, error);
  }
}

export async function getUserByEmail(email) {
  try {
    return await db.select('*').from('users').where({ email: email });
  } catch (error) {
    console.error(`Unable to retrieve user with email: ${email}`, error);
  }
}
