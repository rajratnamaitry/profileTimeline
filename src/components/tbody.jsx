import { useState, useEffect } from 'react'
export default function Tbody({name ,date}) {
    const [nDate , setNdate] = useState('');
    useEffect(() => {
        console.log({name,date})
        const fdate = new Date(date*1000).toString();
        setNdate(fdate);
    }, []);

  return (
    <tr>
        <td className="text-light" >{ name }</td>
        <td className="text-light" >{ nDate }</td>
    </tr>
  )
}
