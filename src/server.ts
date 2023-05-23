import app from './app';
import mongoose from "mongoose";
const port : number = 5000 ;
async function main() {
try {
    await mongoose.connect('mongodb://127.0.0.1:27017/Books');
    console.log("Database Connection Successful")
    app.listen(port , () => {
        console.log(`Server app listening on port ${port}`)
    })

} catch (error) {
    console.log('Database Connection Failed');
}
}
main();