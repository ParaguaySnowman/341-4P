//Node Modules
const express = require('express');

//Controllers
const contactsController = require('../controllers/contacts');

//Router
const router = express.Router();


router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post('/', contactsController.createContact);

router.put('/:id', contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);

module.exports = router;

// router
//     .route('/')
//     .get(
//         contactsController.getAll,
//         contactsController.createContact
//     );

// router
//     .route('/:id')
//     .get( 
//         contactsController.getSingle,
//         contactsController.updateContact,
//         contactsController.deleteContact
//     );

module.exports = router;