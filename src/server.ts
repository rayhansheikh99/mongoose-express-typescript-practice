import mongoose from "mongoose";
import app from "./app"

const port = 5000


// database connect 
async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mongo-db-practice');
        console.log('Database connected');
        app.listen(port, () => {
            console.log(`Server app listening on port ${port}`)
        })
    } catch (err) {
        console.log('Database connection failed');
    }

}

main();


