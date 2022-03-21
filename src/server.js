const  connect = require("./configs/db");
const app = require("./index");


app.listen(4009, async ()=>{
    try {
        connect();
        console.log('Listening to Port 4009');
    } catch (error) {
        console.error(error.message);
    }
})
