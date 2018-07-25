import express from 'express';
import entryController from '../controller/entries';

const router = express.Router();

router.get('/', entryController.welcome);
router.get('/entries', entryController.getAllEntries);
router.get('/entries/:entryId', entryController.getOneEntry);
router.post('/entries', entryController.createEntry);
router.put('/entries/:entryId', entryController.updateEntry);
//router.delete('/entries/:entryId', entryController.deleteEntry);

export default router;