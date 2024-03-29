const multer = require('multer');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './views/uploads'); 
    },
  
    filename: (req, file, cb) => {
      const storages = Date.now() + '-' + Math.round(Math.random() * 1234);
      cb(null, file.fieldname + '-' + storages + file.originalname); 
    }
  });
  
  const uploadeds = multer({ storage });

module.exports = uploadeds;

