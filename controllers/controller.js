const google = require('../modules/modul');
const fs = require('fs');

const getIndex = (req, res) => {
    res.render('index');
};

const getView = async (req, res) => {
    try {
        const list = await google.find();
        console.log(list);  
        res.render('view', { list });
    } catch (err) {
        console.log(err);
    }
};

const postDoc = async (req, res) => {
    console.log(req.body, req.file);

    const { txt, email, number,no } = req.body;

    try {
        const lists = await new google({
            text: txt,
            email: email,
            no : no,
            number: number,
            path: req.file.path
        });
         lists.save();
    } catch (err) {
        console.log(err);
    }
    
    res.redirect('/');
};

const deletedoc = async (req, res) => {
    console.log("delete data..", req.params);

    try {
        const deletedDoc = await google.findByIdAndDelete(req.params.id);
        console.log('deleted', deletedDoc);

        const filePath = deletedDoc.Path;
        
        fs.unlink(filePath, (err) => {
            console.log(err ? "Error deleting file: " + err : "Delete File successfully.");
        });
    } catch (err) {
        console.log("Error deleting file:", err);
    }

    res.redirect('/view');
};


const editdoc = async (req, res) => {
    console.log(req.params.id);

    try {
        const edited = await google.findById(req.params.id);
        console.log("editdata", edited);
        res.render('edit', { editdoc: edited });

    } catch (err) {
        console.log(err);
    }
};

const updateDoc = async (req, res) => {
    console.log(req.body);

    const { id, text, email, number } = req.body;
    const {path} = req.file;

    try {
        const updatadoc = await google.findByIdAndUpdate(id, {text: text},{email: email},{number: number},{path: path});

        res.redirect('/view');
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    getIndex,
    getView,
    postDoc,
    deletedoc,
    editdoc,
    updateDoc
};
