import 'animate.css'
import Image from 'next/image'
import React, { useEffect } from 'react'; 
import '../css/modal.css'

export default function Modal({ children, onClose } : {onClose:any, children:any}) {  
  useEffect(() => {
    const handleEsc = async (event : any) => {
      if(event.key === 'Escape'){
        onClose();
      }
    };
    window.addEventListener('keyup', handleEsc)

    return () => {
      window.removeEventListener('keyup', handleEsc);
    };
  }, [onClose]);

  return (
    <div className="modal-wrapper">
      <div className='modal-backdrop' onClick={onClose} />
        <div className="modal">
          <div className="modal-title">
              <h1>Settings</h1>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={onClose}>
                <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#0F0F0F"/>
              </svg>
          </div>

          <div className="modal-content">
            {children}
          </div>
            
          <div className='modal-footer'>
            <div className='left-footer'>
            <a target="_blank" href="https://github.com/samlkey">
              <p>samkey.site</p>
            </a>
          </div>

          <div className='right-footer'>
            <a target="_blank" href="https://github.com/samlkey">
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"> <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></svg>
            </a>  
          </div>
        </div>
      </div>
    </div>
  );
}
