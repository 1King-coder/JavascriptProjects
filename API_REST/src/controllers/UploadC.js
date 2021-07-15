import multer from 'multer';
import multerConf from '../config/multer';

import File from '../models/File';

const upload = multer(multerConf).single('archieve');

class FilesController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }
      try {
        const { originalname, filename } = req.file;
        const { student_id } = req.body;

        const file = await File.create({ originalname, filename, student_id });

        return res.json(file);
      } catch (error) {
        return res.status(400).json({
          errors: ['Student does not exists.'],
        });
      }
    });
  }
}

export default new FilesController();
