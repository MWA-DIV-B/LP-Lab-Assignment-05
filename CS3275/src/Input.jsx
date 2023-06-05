import React from 'react';
const  Input =(prob)=>{
    return(
        <>
         <input
          type={prob.type}
          placeholder={prob.placeholder}
          onChange={prob.onChange}
          name={prob.name}
          value={prob.value}
        
        />

        </>

    );

    
}
export default Input;