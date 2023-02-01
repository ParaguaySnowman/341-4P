//Node Modules
const express = require('express');

//Controllers
const contactsController = require('../controllers/contacts');

const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post('/', contactsController.createContact);

router.put('/:id', contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);

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