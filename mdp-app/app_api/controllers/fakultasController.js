<<<<<<< HEAD
const Fakultas = require("../models/fakultas");


const getAllFakultas = async (req, res) =>{
    try {
        // mengambil semua fakultas dari database
        const fakultas = await Fakultas.find();
        // mengirim respon dengan status 200 dan data fakultas
        res.status(200).json(fakultas);
    }catch (err) {
=======
// mengimpor model fakultas untuk berinteraksi dengan koleksi fakultas di MongoDB
const Fakultas = require("../models/fakultas");

// mendapatkan semua data fakultas
const getAllFakultas = async (req, res) => {
    try {
        // mengambil semua fakultas dari database
        const fakultasList = await Fakultas.find();
        // mengirim respon dengan status 200 dan data fakultas
        res.status(200).json(fakultasList);
    } catch (err) {
>>>>>>> eb67cfceecf8dc0e55c397ce02e19782c98ce6a8
        // mengirim respon dengan status 500 jika terjadi kesalahan
        res.status(500).json({ message: err.message });
    }
};

const getFakultasById = async (req, res) => {
    try {
        // mencari fakultas berdasarkan id yang diberikan di parameter
        const fakultas = await Fakultas.findById(req.params.id);
        // jika fakultas tidak ditemukan, kirimkan respon 404
<<<<<<< HEAD
        if (!fakultas)
            return res.status(404).json({ message: "Fakultas not found" });
        // mengirim respon dengan status 200 dan data fakultas
        res.status(200).json(fakultas);
    }catch (err) {
=======
        if (!fakultas) {
            return res.status(404).json({ message: "Fakultas not found" });
        }
        // mengirim respon dengan status 200 dan data fakultas
        res.status(200).json(fakultas);
    } catch (err) {
>>>>>>> eb67cfceecf8dc0e55c397ce02e19782c98ce6a8
        // mengirim respon dengan status 500 jika terjadi kesalahan
        res.status(500).json({ message: err.message });
    }
};

const createFakultas = async (req, res) => {
    // membuat instance fakultas baru dari data yang diterima
<<<<<<< HEAD
    const fakultas = new Fakultas({
=======
    const newFakultas = new Fakultas({
>>>>>>> eb67cfceecf8dc0e55c397ce02e19782c98ce6a8
        nama: req.body.nama,
        singkatan: req.body.singkatan,
    });

    try {
        // menyimpan fakultas baru ke database
<<<<<<< HEAD
        const newFakultas = await fakultas.save();
        // mengirim respon dengan status 201 dan data fakultas baru
        res.status(201).json(newFakultas);
    }catch (err) {
        // mengirim respon dengan status 400 jika ada kesalahan saat menyimpan
        res.status(400).json({ message: err.message })
=======
        const savedFakultas = await newFakultas.save();
        // mengirim respon dengan status 201 dan data fakultas baru
        res.status(201).json(savedFakultas);
    } catch (err) {
        // mengirim respon dengan status 400 jika ada kesalahan saat menyimpan
        res.status(400).json({ message: err.message });
>>>>>>> eb67cfceecf8dc0e55c397ce02e19782c98ce6a8
    }
};

const updateFakultas = async (req, res) => {
    try {
        // mencari fakultas berdasarkan id yang diberikan di parameter
        const fakultas = await Fakultas.findById(req.params.id);
        // jika fakultas tidak ditemukan, kirimkan respon 404
<<<<<<< HEAD
        if (!fakultas)
            return res.status(404).json({ message: "Fakultas not found" });
=======
        if (!fakultas) {
            return res.status(404).json({ message: "Fakultas not found" });
        }

>>>>>>> eb67cfceecf8dc0e55c397ce02e19782c98ce6a8
        // memperbarui nama fakultas jika ada di request body
        if (req.body.nama != null) {
            fakultas.nama = req.body.nama;
        }

<<<<<<< HEAD
        // memperbarui singkatan fakultas jika ada di rquest body
=======
        // memperbarui singkatan fakultas jika ada di request body
>>>>>>> eb67cfceecf8dc0e55c397ce02e19782c98ce6a8
        if (req.body.singkatan != null) {
            fakultas.singkatan = req.body.singkatan;
        }

        // menyimpan perubahan ke database
<<<<<<< HEAD
        const updateFakultas = await fakultas.save();
        // mengirimkan respons dengan status 200 dan data fakultas yang di perbarui
        res.status(200).json(updateFakultas);
    }catch (err) {
=======
        const updatedFakultas = await fakultas.save();
        // mengirimkan respons dengan status 200 dan data fakultas yang diperbarui
        res.status(200).json(updatedFakultas);
    } catch (err) {
>>>>>>> eb67cfceecf8dc0e55c397ce02e19782c98ce6a8
        // mengirimkan respon dengan status 400 jika ada kesalahan saat memperbarui
        res.status(400).json({ message: err.message });
    }
};

const deleteFakultas = async (req, res) => {
    try {
        const fakultas = await Fakultas.findById(req.params.id);
        // jika fakultas tidak ditemukan, kirimkan respon 404
<<<<<<< HEAD
        if (!fakultas)
            return res.status(404).json({ message: "Fakultas not found" });
=======
        if (!fakultas) {
            return res.status(404).json({ message: "Fakultas not found" });
        }
>>>>>>> eb67cfceecf8dc0e55c397ce02e19782c98ce6a8

        // menghapus fakultas dari database
        await fakultas.deleteOne();
        // mengirimkan respon dengan status 200 dan pesan penghapusan
<<<<<<< HEAD
        res.status(200).json({ message: "Fakultas deleted"});
    }catch (err) {
=======
        res.status(200).json({ message: "Fakultas deleted" });
    } catch (err) {
>>>>>>> eb67cfceecf8dc0e55c397ce02e19782c98ce6a8
        // mengirimkan respon dengan status 500 jika terjadi kesalahan
        res.status(500).json({ message: err.message });
    }
};

<<<<<<< HEAD
module.exports = {getAllFakultas,createFakultas,getFakultasById,updateFakultas,deleteFakultas};
=======

module.exports = { getAllFakultas, createFakultas, getFakultasById, updateFakultas, deleteFakultas };
>>>>>>> eb67cfceecf8dc0e55c397ce02e19782c98ce6a8
