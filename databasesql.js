const {Client} = require('pg')

const client = new Client({
    host:'localhost',
    database:'postgres',
    port:5433,
    user:'postgres',
    password:'Premk@2561',
    
})

client.connect()

client.query(
    // 'SELECT * FROM person WHERE id=5' 
    'UPDATE person SET first_name = prem WHERE id = 5 '
    , (err , res)=>{
    if(!err)
    {
        console.log(res.rows);
    }
    else{
        console.log(err.message);
    }
    client.end();
});