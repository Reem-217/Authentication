const validatorMW=require('../../middlewares/validatorMW');
const {check}=require('express-validator');

exports.viewProfileValidator=[
check('id').isMongoId().withMessage('Invalid id format'),validatorMW
];
