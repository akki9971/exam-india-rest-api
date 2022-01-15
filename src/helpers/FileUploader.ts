import * as multer from "multer";
import * as path from 'path';
import HelperFunctions from './HelperFunctions';
import * as fs from 'fs';

const storage = multer.diskStorage({
  destination: async function (req, file, cb) {

    // default file upload directory
    let fileDir = 'uploads/';
  
    // check if file type specified and add the relative dir
    if (req['body']['fileType'] === 'avatar') {
      fileDir += 'avatars/';
    } else if (req['body']['fileType'] === 'question') {
      fileDir += 'questions/';
    } else if (req['body']['fileType'] === 'webcam') {
      fileDir += `webcam/exam-${req.params.examId}/user-${req.params.userId}`;
    }
    if (!fs.existsSync(fileDir)){
      await HelperFunctions.mkdirSyncRecursive(fileDir);
    }     
    cb(null, fileDir);
  },
  filename: function (req, file, cb) {

    // keep default filename
    let filePrefix = file.originalname;
    
    // getting user id from JWT check and overwrite filename with user id
    if (req['params']['userId']) {
      filePrefix = req['params']['userId'];
    }

    let fileExt = path.extname(file.originalname);
    if (req['body']['fileExtension']) {
      fileExt = '.' + req['body']['fileExtension'];
    }
    
    // filename => userid + time() + ext
    const finalFileName = filePrefix + '-' + Date.now() + fileExt;
    // console.log('finalFileName: ', finalFileName);

    cb(null, finalFileName);
  }
});

const uploads = multer({ storage: storage });

export default uploads;
