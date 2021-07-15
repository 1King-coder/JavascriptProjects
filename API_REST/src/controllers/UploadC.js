import multer from 'multer';
import multerConf from '../config/multer';

import File from '../models/File';

const upload = multer(multerConf).single('archieve');

class FilesController {
  store(req, res) {
    try {
      return upload(req, res, async (err) => {
        if (err) {
          return res.status(400).json({
            errors: [err.code],
          });
        }

        const { originalname, filename } = req.file;
        const { student_id } = req.body;

        const file = await File.create({ originalname, filename, student_id });

        return res.json(file);
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new FilesController();
