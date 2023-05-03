import { useEffect, useState } from 'react';
import IconMoon from './icons/IconMoon'
import IconSum from './icons/IconSum';
const Header = (second) => {

  const initialDarkModeState = localStorage.getItem("theme") === "dark";

  const [darkMode, setDarkMode] = useState(initialDarkModeState);
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem("theme", "light");
    }
  }, [darkMode])

  return (
    <header className="container mx-auto px-4 md:max-w-xl">
      <div className="flex justify-between py-8">
        <h1 className='text-3xl font-semibold uppercase tracking-[0.3em] text-white'>todo</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {
            darkMode ? <IconSum/>  : <IconMoon /> 
          }

        </button>
      </div>
    </header>
  );
}

export default Header;