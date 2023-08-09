import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {TextField,Box, Button,FormControl,Typography,Alert,AlertTitle} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

import '../component_css/Form.css'

function Form() {

  
  const location = useLocation();
  const {width,height} = location.state || {};
  const navigate = useNavigate();
  
  useEffect(() => {
  
    
  }, [location.state,],width, height);
 

  

  const [submit_disabled, setSubmit_Disabled] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState('success'); 
  const [alertMessage, setAlertMessage] = useState('');

  const [formData, setFormData] = useState({

    height:height,
    width: width,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    
  });

  const handleChange = (e) => {

      setFormData({
        ...formData,
        [e.target.name]: e.target.value 
      });

    }
   
    const handlePhoneNumberInput = (e) => {
      if (e.key === ' ' || e.keyCode === 32) {
        e.preventDefault();
      } else {
        let input = e.target.value;
        input = input.replace(/\s/g, '');
        if (input.length > 10) {
          input = input.slice(0, 10);
        }
        
      }
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      const phoneNumber = formData.phoneNumber;
      
      if (phoneNumber.length < 10 || isNaN(phoneNumber) || phoneNumber.length > 11) {
        setShowAlert(true);
        setAlertSeverity('error'); 
        setAlertMessage('Cep numaranızı doğru formatta giriniz');
        setTimeout(() => {
          setShowAlert(false);

        }, 3000);

      } else {
        try {
          const response = await fetch('http://localhost:4000/api/saveUser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
          if (response.ok) {
            setSubmit_Disabled(true)
            console.log('Veriler başarıyla sunucuya gönderildi.');
            setShowAlert(true);
            setAlertSeverity('success');
            setAlertMessage('Form başarıyla gönderildi!');
    
            setTimeout(() => {
              setShowAlert(false);
     
            
              navigate('/');
            }, 3000);
          } else {
            console.error('Sunucuya veri gönderirken bir hata oluştu.');
          }
        } catch (error) {
          console.error('Sunucuya istek gönderirken bir hata oluştu:', error);
        }
      }
    };
  
  return(
    

<div>
  <div className='snack'>

  {showAlert && (
      <Alert
        severity={alertSeverity}
        sx={{
          width: '100%',
          borderRadius: '8px',
          backgroundColor: alertSeverity === 'error' ? '#f44336' : '#4caf50',
          color: '#fff',
          marginLeft: '-10px'
          }}
      >
        <AlertTitle>{alertSeverity === 'error' ? 'Error' :'Success'}</AlertTitle>
        {alertMessage}

      </Alert>
    )}

  </div>

    <div className="contain">

    <Typography variant="h3">

        İletişim Bilgileriniz

    </Typography>
    
    </div>
     
      
  <Box display="flex" justifyContent="center" alignItems="center" margin="0 auto" marginTop={3}>
    <Box width={500} height={500} boxShadow="0.3rem 0.4rem 0.6rem rgba(0, 0, 0, 0.3)" bgcolor="#f3f3f3" display="flex" justifyContent="center" alignItems="center">

    <form onSubmit={handleSubmit}>

    <FormControl >
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <TextField name="firstName"  value={formData.firstName} label="isim" variant="outlined" onChange={handleChange} required />
        <TextField name="lastName" value={formData.lastName}  label="soyisim" variant="outlined" onChange={handleChange} required />
        <TextField name="phoneNumber" value={formData.phoneNumber} label="telefon numarasi" variant="outlined"  onChange={handleChange} required/>
        <Button type='submit' variant="contained" endIcon={<SendIcon />} disabled={submit_disabled}>
          Send
        </Button>
        
      </div>

    </FormControl>

    </form>

     </Box>
  </Box>

</div> 

  )
}

export default Form;