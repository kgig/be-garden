var router = require('express').Router();
var employeefinanceCtrl = require('../controller/employee-financials.ctrl');

router.get('', employeefinanceCtrl.list);
router.post('', employeefinanceCtrl.insert);
router.get('/:id', employeefinanceCtrl.findById);
router.put('/:id', employeefinanceCtrl.edit);

module.exports = router;