import React, { useEffect, useState } from 'react';
import NestedBox from './Component/NeastedBox'; 

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const url = window.location.href;
    const number = url.match(/\d+/g);
    
    const boxNumber = Number(number[1])
    if(!isNaN(boxNumber)){setValue(boxNumber)}
    else{
      window.alert("Enter numbet in url")
    }
  }, []);

  return (
    <div className='w-[100%] h-[110vh] flex justify-center items-center '>
      <NestedBox value={value} />
    </div>
  );
}

export default App;
