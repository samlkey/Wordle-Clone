import { useEffect, useState } from 'react';
import { setTheme } from '../utils/themes'
import '../css/settings.css'

export default function Settings() {
  const [togState, setTogState] = useState('dark')

  useEffect(() => {
    if(localStorage.getItem('theme') === 'theme-dark'){
      setTogState('dark')
    }
    else if(localStorage.getItem('theme') === 'theme-light'){
      setTogState('light')
    }
  }, [])

  const handleOnClick = () => {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTogState('light')
      setTheme('theme-light');
      sleep(2000);
    } else {
      setTogState('dark')
      setTheme('theme-dark');
      sleep(2000);
    }
  }

  /*HELPER FUNCTIONS*/
  function sleep(ms : any) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  return (
    <div className="settings-content">            
      <div className='settings-container'>
        <div className='email-left'>
          <h2>Theme</h2>
          <p>Switch from Dark Theme, to Light Theme.</p>
        </div>
        
        <div className='email-right'>
          <label className="switch">

            <input 
              type="checkbox" 
              onChange={handleOnClick} 
              checked={togState === "light"} // Ensures checked is always boolean
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      <div className='settings-container'>
        <div className='email-left'>
          <h2>Feedback</h2>
          <p>Leave some feedback!</p>
        </div>

        <div className='email-right'>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#080341"/>
          </svg>
        </div>
      </div>

      <div className='settings-container'>
        <div className='email-left'>
          <h2>Report Bug</h2>
          <p>Report an issue with the game.</p>
        </div>

        <div className='email-right'>
          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="bug">
            <path d="M7 0V1.60002C7.32311 1.53443 7.65753 1.5 8 1.5C8.34247 1.5 8.67689 1.53443 9 1.60002V0H11V2.49963C11.8265 3.12041 12.4543 3.99134 12.7711 5H3.2289C3.5457 3.99134 4.17354 3.12041 5 2.49963V0H7Z" fill="#000000"/>
            <path d="M0 7V9H3V10.4957L0.225279 11.2885L0.774721 13.2115L3.23189 12.5095C3.87194 14.5331 5.76467 16 8 16C10.2353 16 12.1281 14.5331 12.7681 12.5095L15.2253 13.2115L15.7747 11.2885L13 10.4957V9H16V7H9V12H7V7H0Z" fill="#000000"/>
          </svg>           
        </div>
      </div>
    </div>
  )
};