import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Attention() {
  useEffect(() => { 
    
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function (event) {
    window.history.pushState(null, null, window.location.href);
    };

  },);


  const [measureData, setMeasureData] = useState({

    height: '',
    width: '',

  });

  const handleChange = (e) => {
    setMeasureData({
      ...measureData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [tatto_src, set_src] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();


    navigate('/form', { state: measureData });
  };

  const openModal = (event) => {
    setIsOpen(true);
    const clickedElement = event.target;
    const src = clickedElement.src;
    set_src(src);
  };

  const closeModal = () => {
    setIsOpen(false);
  };


  return (
    <div>
    

      <div className='image-list'>

        <img className ="tattoo_1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG441bnm0qkKlSeCmTS3axprX_ffJnDkcTLQ&usqp=CAU" alt="" onClick={openModal}/>
        <img className ="tattoo_2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwaicK3Eu5kcaMw_DwC93PAgzwu_R_i73vtA&usqp=CAU" alt="" onClick={openModal}/>
        <img className ="tattoo_3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrVtAOLKL48v5q8ZmKO2qv7RJKKcm9ef5cFg&usqp=CAU" alt="" onClick={openModal}/>
        <img className ="tattoo_4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4iXLiPBDv2w9A9PHuAEjdhBGjvP_x5KH0IQ&usqp=CAU" alt="" onClick={openModal}/>
        <img className ="tattoo_5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbXc9JZxdY90X6c9DZA2ZPM2o7BaPbBDsCJg&usqp=CAU" alt="" onClick={openModal}/>
        <img className ="tattoo_6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTqggLTuiuto5bogBACuhEAiO8XPQ9KKkUXw&usqp=CAU" alt="" onClick={openModal}/>
        
      </div>
      
      

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
           
            <img src={tatto_src} alt="hello" />
            <h1>BOYUT GİRİNİZ</h1>
            <h3 className='attention_genislik'>Genişlik</h3>
            <h3 className='attention_uzunluk'>Uzunluk</h3>


            <form onSubmit={handleSubmit}>
                
                <input className= "attention_genislik_input" type="text" id="text1" name="height" value={measureData.height}  onChange={handleChange}  placeholder="genislik cm" required />
                <input className= "attention_uzunluk_input"  type="text" id="text2" name="width"  value={measureData.width}   onChange={handleChange}  placeholder="uzunluk cm" required/>
                <button type="submit" className="attention_onayla" >Onayla</button>
               
            </form>
            <button className="attention_kapat" onClick={closeModal}>Kapat</button>
            
 
          </div>
        </div>
      )}
    </div>
  );
}

export default Attention;






