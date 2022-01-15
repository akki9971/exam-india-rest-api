import { Request, Response, NextFunction } from 'express';

// services
import InstituteService from '../../services/Institute.service';
import ExamService from '../../services/Exam.service';

class InstituteValidator {

  /**
   * check if requested institute exist
   * @param req, res
   */
  static checkInstituteUniqueName = async (req: Request, res: Response, next: NextFunction) => {
    const instituteName: number = req.params.institute || req.body.institute;
    const instituteService = InstituteService.getInstance();

    const institute = await instituteService.getInstituteDetails([], { uniqueName: instituteName });

    if (!institute) {
      return res.status(401).json({
        status: 'error',
        message: 'Institute does not exist!'
      });
    }

    // append institute details for further use
    req.body.institute = institute;

    // valid institute name, process further
    next();
  }


  /**
   * check if requested instituteId is valid
   * @param req, res
   */
  static checkInstituteId = async (req: Request, res: Response, next: NextFunction) => {
    const instituteId: number = req.body.instituteId || req.params.instituteId;
    const instituteService = InstituteService.getInstance();

    const institute = await instituteService.getInstituteDetails([], { instituteId: instituteId });

    if (!institute) {
      return res.status(401).json({
        status: 'error',
        message: 'Institute does not exist!'
      });
    }

    // append institute details for further use
    req.body.institute = institute;

    // valid institute name, process further
    next();
  }

}

export default InstituteValidator;
