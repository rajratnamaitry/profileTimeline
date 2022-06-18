import { useState, useEffect } from 'react'
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { app, database } from "../firebase";
import { Link } from 'react-router-dom'
import { doc, deleteDoc, collection } from 'firebase/firestore'
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
          <Link to={"/update/"+id} ><BsFillPencilFill size={SIZE}/></Link>{' '}
          <BsFillTrashFill size={SIZE} onClick={()=> deleteRow(id) }/>
        </td>
    </tr>
  )
}
