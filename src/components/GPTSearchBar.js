import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {

const langKey = useSelector(store => store.config.lang);

const searchText = useRef(null);

const handleFormSubmit = () =>{

  console.log(searchText.current.value);
  
}

  return (
    <div className="pt-[40%] md:p-12 flex justify-center">
      <form className=" w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=> e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button onClick={handleFormSubmit} className="py-2 m-4 px-4 col-span-3 rounded-lg bg-red-700 text-white">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
