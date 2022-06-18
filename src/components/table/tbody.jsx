import { database } from "../../firebase";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { doc, deleteDoc } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
export default function Tbody({name ,date, id}) {
    const [nDate , setNdate] = useState('');
    const SIZE = 30;
    const deleteRow = (id)=>{
      const col = doc(database, 'projects',id)
      deleteDoc(col).then(()=>{
        alert('Deleted')
      })
    }
    useEffect(() => {
        const fdate = new Date(date*1000).toString();
        setNdate(fdate);
    }, []);

  return (
    <tr>
        <td className="text-light" >{ name }</td>
        <td className="text-light" >{ nDate }</td>
        <td className="text-light" >
          <Link to={"/update/"+id} target="_blank" ><BsFillPencilFill size={SIZE}/></Link>{' '}
          <BsFillTrashFill size={SIZE} onClick={()=> deleteRow(id) }/>
        </td>
    </tr>
  )
}
