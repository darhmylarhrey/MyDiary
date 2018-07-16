import express from 'express';
import entryController from '../controller/entries';

const router = express.Router();

router.get('/', (req,res)=> {
    return res.status(200).json('welcome to my MyDiary app') 
    });
router.get('/entries', entryController.getAllEntries);
router.get('/entries/:entryId', entryController.getEntry);
router.post('/entries', entryController.create);
router.put('/entries/:entryId', entryController.update);
router.delete('/entries/:entryId', entryController.deleteEntry);

export default router;