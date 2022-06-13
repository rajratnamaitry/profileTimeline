import { useState, useEffect } from 'react'
import Header from '../components/header'
import TimeLine from '../components/timeline'
import { app, database } from '../firebase';
import { getDocs, collection } from 'firebase/firestore'
export default function Homepage() {
  const [list, setList] = useState([]);
  const collectionRef = collection(database, 'projects');
  const getProjectList = () => {
    getDocs(collectionRef).then((data) => {
      const fdata = data.docs.map(e => {
        return { ...e.data(), id: e.id };
      })
      setList(fdata);
    });
  }
  useEffect(() => {
    getProjectList()
    console.log('useEffect')
  }, []);
  return (
    <div className="container">
      <Header/>
      {list.map(e => <TimeLine key={e.id} project={e} />)}
    </div>
  )
}
// {
//   "descriptions": "",
//   "name": "",
//   "github": "https://github.com/rajratnamaitry/",
//   "url": "",
//   "date": {
//       "seconds": 1652466600,
//       "nanoseconds": 0
//   },
//   "stack": [],
//   "id": ""
// }