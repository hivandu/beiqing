/**
 * Created by Hivan Du on 2016/11/26.
 */
var dbCfg = {
  mysql: {
    host: '61.148.61.78',
    port: '9011',
    database: 'ticket',
    user: 'ticket_admin',
    password: '9UdrA6bzxy',
    acquireTimeout: 10000,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 2
  }
};
module.exports = dbCfg;
