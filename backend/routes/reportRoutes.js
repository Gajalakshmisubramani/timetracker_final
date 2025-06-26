const express = require('express');
const router = express.Router();
const {
  createReport,
  getReports,
  updateReportStatus,
  updateReport
} = require('../controllers/reportController');

router.post('/', createReport);
router.get('/', getReports);
router.put('/status/:id', updateReportStatus);
router.put('/:id', updateReport);

module.exports = router;
