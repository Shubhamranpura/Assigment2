import React, { useEffect, useState } from 'react';
import NestedBox from './Componannt/NeastedBox'; 

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const url = window.location.href;
    const number = url.match(/\d+/g);
    // console.log(number)
    // console.log(number[1])
    // console.log(Number(number[1]))
    const boxNumber = Number(number[1])
    // console.log(number)  
    if(!isNaN(boxNumber)){setValue(boxNumber)}
    else{
      window.alert("Enter numbet in url")
    }
  }, []);


  // console.log(value)

  return (
    <div className='w-[100%] h-[110vh] flex justify-center items-center '>
      <NestedBox value={value} />
    </div>
  );
}

export default App;
