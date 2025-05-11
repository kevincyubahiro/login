import express from 'express';
import cors from 'cors';
import mysql from 'mysql'
const app=express();
app.use(express.json());
app.use(cors());
// connect
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'cargo',
    password:'',

})
db.connect((error)=>{
    if(error){
        console.log('failed')
    }
    else{
        console.log('connected')
    }
})
//insert
app.post('/insert',(req,res)=>{
    const {UserName,Password}=req.body;
    const sql="INSERT INTO manager(UserName,Password)VALUES(?,?)"
    db.query(sql,[UserName,Password],(error,result)=>{
        if(error) return res.status(500).json('failed')
            return res.status(200).json(result)
    })
})


//login
app.post('/login', (req, res) => {
  const { UserName, Password } = req.body;
  const sql = "SELECT * FROM manager WHERE UserName = ? AND Password = ?";
  db.query(sql, [UserName, Password], (error, result) => {
    if (error) {
      return res.status(500).json( 'Database error');
    }
    if (result.length === 0) {
      return res.status(400).json( 'Invalid credentials' );
    }
    return res.status(200).json('Logged in successfully');
  });
});




//SELECT
app.get('/select',(req,res)=>{
    const sql="SELECT * FROM manager"
    db.query(sql,(error,result)=>{
            if(error) return res.status(500).json('failed')
            return res.status(200).json(result)
    })
})
app.listen(2000,()=>{
    console.log('http://localhost:2000')
})