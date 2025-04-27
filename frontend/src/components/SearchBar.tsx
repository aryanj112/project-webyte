"use client"

import { Search } from 'lucide-react';
import { useState } from 'react';

const SearchBar = () => {
    
    const [isToggled, setIsToggled] = useState(false);

    const HandleToggle = () => {
        setIsToggled(!isToggled);
        console.log(isToggled);
    }

    return(
    <>
        <Search className = "w-[3rem] h-[3rem] hover:scale-110 transition-transform duration-200" onClick={ HandleToggle }/>
    
        {isToggled && (
            <div className = "flex mt-[1rem] flex-wrap w-[25rem] gap-x-[1.5rem] gap-y-[1.25rem]">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white shadow-lg w-[5rem] h-[2rem] rounded-lg"
                />
              ))}
            </div>
        )}
    </>
    );
}

export default SearchBar;