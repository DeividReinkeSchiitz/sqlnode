// MYSQL
/*   
  docker run --name=my-mysql -e MYSQL_ROOT_PASSWORD=jmrxejgv13 --detach --publish 3306:3306 mysql:5.7.24

  --name=my-mysql => name of the database 
  -e MYSQL_ROOT_PASSWORD=jmrxejgv13 => -e = enviromental variables; 

  default username = root
  defalut database = database development
*/

//POSTGRES
/* 
  docker run --name=my-postgres -e POSTGRES_PASSWORD=jmrxejgv13 --detach --publish 3306:3306 postgres

  defalut username = postgres
  default database = postgres  

*/
module.exports = {
  development: {
    username: "postgres",
    password: "",
    database: "postgres",
    host: "localhost",
    dialect: "postgres"
  }
};
