import { Request, Response } from 'express';
import { getRepository, getConnection } from 'typeorm';
import { User } from '../entity/User';
import { Question } from '../entity/Question';
// import * as csv from 'fast-csv';
import * as fs from 'fs';

class FileController {

  static getUserExamScreenshots = (req: any, res: Response) => {
    
    const userId = req.params.userId;
    const examId = req.params.examId;

    let dir= `uploads/webcam/exam-${examId}/user-${userId}`;
    let filesList = [];
    if (fs.existsSync(dir)){        
        let files = fs.readdirSync(dir);
        for (var i in files){
            var name = dir + '/' + files[i];        
            filesList.push(name);        
        }
    }
    return res.status(200).json({
      screenshots : filesList,
      message: 'File lists fetched successful'
    });
  } 

  static saveProfileImage = async (req: any, res: Response) => {
    // fetch userId
    const userId = req.params.userId;

    // check if file path var is available
    let file;
    if (req['file']['path']) {
      file = req['file']['path'];
    } else {
      return res.status(404).json({
        message: 'File upload error'
      });
    }

    // find user
    const userRepository = getRepository(User);
    let user;
    try {
      user = await userRepository.findOneOrFail(userId);
    } catch (error) {
      // user not found
      return res.status(404).send('User not found');
    }

    // validate the new values on model
    user.profileImage = file;
    try {
      await userRepository.save(user);
      return res.status(200).json({
        message: 'File upload successful'
      });
    } catch (e) {
      return res.status(500).json({
        message: e
      });
    }
  };

  // static importQuestions = async (req: any, res: Response) => {
    
  //   let file: any;
  //   if (req['file']['path']) {
  //     file = req['file']['path'];
  //   } else {
  //     res.status(404).json({
  //       message: 'File upload error'
  //     });
  //   }

  //   // await readFile(file)

  //   res.status(200).json({
  //     message: 'File import successful'
  //   });
  // }
}

// async function readFile(file) {
//   let results = [];
//   fs.createReadStream(file)
//     .pipe(csv.parse({ headers: true }))
//     .on('data', (data) => results.push(data))
//     .on('end', () => {
//       // results.shift();
//       // this will get called after completion of the file reading
//       getConnection()
//         .createQueryBuilder()
//         .insert()
//         .into(Question)
//         .values(results)
//         .execute();
//     });
// }

export default FileController;
