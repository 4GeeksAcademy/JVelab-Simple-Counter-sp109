import Clock from "./Clock";
import Counter from "./Counter";
import React, { useEffect, useState } from 'react';

const Holder = () => {

    const [time, setTime] = useState(0)

    useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Limpieza
  }, []);

  const cadena = time.toString().padStart(6, '0')

  const timeArray = cadena.split('').reverse()

    return (
        <div className="bg-black text-white d-flex justify-content-center p-3 gap-4 my-2 mx-3">
            <Clock/>
            <Counter seconds={timeArray[5]}/>
            <Counter seconds={timeArray[4]}/>
            <Counter seconds={timeArray[3]}/>
            <Counter seconds={timeArray[2]}/>
            <Counter seconds={timeArray[1]}/>
            <Counter seconds={timeArray[0]}/>
        </div>
    )
}

export default Holder