import { Router } from 'express';
import User from '../models/user_information.js'
import { body,validationResult } from 'express-validator';



const router = Router();

  router.post('/api/saveUser', [
    body('phoneNumber')
    .isLength({ min: 10, max: 11 }).withMessage('Geçerli bir cep numarası girin')
    .matches(/^\d+$/).withMessage('Sadece rakam kullanın'),
   

    ], async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
    const { firstName, lastName, phoneNumber,height,width} = req.body;
  
    try {
      
      const newUser = new User({
        firstName,
        lastName,
        phoneNumber,
    
        height,
        width
      });
  
      
      await newUser.save();
  
      res.status(200).json({ message: 'Kullanici başariyla kaydedildi' });
    } catch (error) {
      console.error('Kullanici kaydedilirken bir hata oluştu:', error);
      res.status(500).json({ error: 'Kullanici kaydedilirken bir hata oluştu' });
    }
  });


  router.get('/api/users', async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.error('Kullanicilar alinirken bir hata oluştu:', error);
      res.status(500).json({ error: 'Kullanicilar alinirken bir hata oluştu' });
    }
    
  });




export default router;