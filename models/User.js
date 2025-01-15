import db from "../db/index.js";

class User {
  static async findAll() {
    const query = `
      select id, username, firstName, lastName, email, avatar 
      from users
    `;
    const results = await db.raw(query);
    return results;
  }

  static async findById(id) {
    const query = `SELECT id, username, firstName, lastName, email, avatar FROM users WHERE id = ?`;
    const result = await db.raw(query, [id]);
    return result[0];
  }
}

export default User;
