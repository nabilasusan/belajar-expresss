// model db js
// mengimpor modul mongoose untuk mengelola koneksi dengan mongodb
const mongoose = require("mongoose");

// fungsi asinkron untuk menghubungkan ke database mongodb
const connectDB = async () => {
    try {
        //menghubungkan ke mongodb menggunakan url koneksi
        await mongoose.connect(
<<<<<<< HEAD
            // "mongodb+srv://ericcandra:eric123@cluster0.hadmb.mongodb.net/mdpdb?retryWrites=true&w=majority&appName=Cluster0"
            "mongodb://localhost:27017/mdpsi5a"
=======
          // "mongodb+srv://nabila2226240101:<nabila123>@cluster0.udedm.mongodb.net/si5a?retryWrites=true&w=majority&appName=Cluster0"
          "mongodb://localhost:27017/mdpsi5a"
>>>>>>> eb67cfceecf8dc0e55c397ce02e19782c98ce6a8
        );
        // jika koneksi berhasil log pesan ke konsol
        console.log("MongoDb Connected");
    } catch (error) {
        // jika terjadi kesalahan saat menghubungkan, log pesan kesalahan ke konsol
        console.error("MongoDB connection error:", error);
        // keluar dari proses dengan kode status 1 untuk menandakan ada kesalahan
        process.exit(1);
    }
};

module.exports = connectDB;