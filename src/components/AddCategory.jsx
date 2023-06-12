import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
   
    if( inputValue.trim().length <= 1) return;
    // setcategories( cat => [ inputValue, ...cat]);
    onNewCategory( inputValue.trim().toLowerCase() );
    setInputValue('');

  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          
          type="text"
          placeholder="Bscar gift"
          autoFocus
          id="text"
          value={inputValue}
          onChange={onInputChange}
        ></input>
      </form>
    </>
  );
};
