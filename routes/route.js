
const express = require('express');
const appRoutes = express.Router(); 
const appController = require('../controllers/controller');
const uploadeds = require('../multers/upload'); 

appRoutes.get('/', appController.getIndex);
appRoutes.get('/view', appController.getView);
appRoutes.post('/appdoc',    appController.postDoc); 
appRoutes.get('/deletedoc/:id', appController.deletedoc);
appRoutes.get('/editdoc/:id', appController.editdoc);
appRoutes.post('/updateDoc', uploadeds.single('fileupload'), appController.updateDoc);

module.exports = appRoutes;


