import mysql, { Connection, FieldPacket, QueryError, QueryResult, ConnectionOptions } from "mysql2/promise";

export default class MySQLService {

    private connectionOptions: ConnectionOptions = {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DBNAME
    }

    private static _instance: MySQLService;

    connection: Connection;
    connected: boolean = false;

    constructor() {
        this.connection = mysql.createConnection({
                host: process.env.MYSQL_HOST,
                user: process.env.MYSQL_USER,
                password: process.env.MYSQL_PASSWORD,
                database: process.env.MYSQL_DBNAME
            });

        this.createDbConnection();
    }

    public static get instance(){
        return this._instance || (this._instance = new this());
    }

    static async exec(query: string): Promise<any> {
        this.instance.connection.query(query, (err: QueryError, results: QueryResult, fields: FieldPacket[]) => {
            if(err){
                console.log('Error en la query');
                console.log(err);
                return new Promise();
            }

            if(results.length === 0){
                return callback('El registro solicitado no existe');
            }else{
                return callback(null, results);
            }
            return callback(null, results);
        });
    }

    private createDbConnection() {
        this.connection.connect((err) => {
            if (err) {
                console.log(err.message);
                return;
            }

            this.connected = true;
            console.log('Connected to database successfully!');
        })
    }


}