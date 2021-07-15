import multer from 'multer';

import multerConf from '../config/multer';

const upload = multer(multerConf).single('archieve');

class FilesController {
  async store(req, res) {
    try {
      return upload(req, res, (err) => {
        if (err) {
          return res.status(400).json({
            errors: [err.code],
          });
        }

        return res.json(req.file);
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new FilesController();
