const express = require("express");
const db = require("./firebase.js");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({type:"application/vnd.api+json"}));

const port = process.env.PORT || 8000;

app.listen(port, ()=>{
	console.log(`server is running at ${port}`);	
})


app.get("/data", (req, res)=>{

	db.database().ref("data").on('value', (snapshots)=>{
		let data = snapshots.val();
		res.json({
			message:"Successfully get data",
			result:data
		})
	})
	
})

app.post("/data1", (req, res)=>{
	console.log(req.body);
	db.database().ref("data1").push().set(req.body, (result)=>{
		res.json({
			message:"POST DATA",
			results: result
		})
	})
})