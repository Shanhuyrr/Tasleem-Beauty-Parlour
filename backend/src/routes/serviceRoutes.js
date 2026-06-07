const express = require('express');
const {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
} = require('../controllers/serviceController');
const { authenticate, authorize } = require('../middleware/auth');

const router = express.Router();

router.get('/', getAllServices);
router.get('/:id', getServiceById);
router.post('/', authenticate, authorize(['admin']), createService);
router.put('/:id', authenticate, authorize(['admin']), updateService);
router.delete('/:id', authenticate, authorize(['admin']), deleteService);

module.exports = router;
