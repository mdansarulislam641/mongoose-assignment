import mongoose from "mongoose";

async function main() {
try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log("Database Connection Successful")

} catch (error) {
    console.log('Database Connection Failed');
}
}
main();