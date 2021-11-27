const { v4 } = require("uuid");
const pool = require("../../config/dbConfig");

module.exports = {

  insertUser : async (userInfo) => {
    try {
      const conn = await pool.getConnection();

      const {
        user_nm,
        user_desc,
        user_login_id,
        user_login_pw
      } = userInfo;

      const query = `Insert into t_user (
        user_id,
        user_nm,
        user_desc,
        user_login_id,
        user_login_pw,
        created_at,
        modified_at
      )
      values
      (
        ?,
        ?,
        ?,
        ?,
        ?,
        UNIX_TIMESTAMP(),
        UNIX_TIMESTAMP()
      )`;

      const [{affectRows:result}] = await conn.query(query,[v4(), user_nm, user_desc, user_login_id, user_login_pw]);
      conn.release();

      return result;

    } catch (error) {
      return error;
    }
  },

  getUserList : async () => {
    try {
      const conn = await pool.getConnection();

      const [result] = await conn.query("select * from t_user");

      conn.release();
      return result;

    } catch (error) {
      return error;
    }
  },

  updateUser : (userInfo) => {

  },

  deleteUser : (userInfo) => {

  }
  
}