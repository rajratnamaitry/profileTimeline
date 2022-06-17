import { useState, useEffect } from 'react'
import Header from '../components/header'
import TimeLine from '../components/timeline'
import { app, database } from '../firebase';
import { getDocs, collection } from 'firebase/firestore'
export default function Homepage() {
  const [list, setList] = useState([]);
  const collectionRef = collection(database, 'projects');
  const getProjectList = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
    getDocs(collectionRef).then((data) => {
      const projectList = data.docs.map(e => {
        const data = { ...e.data(), id: e.id };
        const nDate = new Date(data.date.seconds * 1000);
        data.date['year'] = nDate.getFullYear();
        data.date['mon'] = nDate.getMonth();
        data.date['month'] = monthNames[nDate.getMonth()];
        data.date['date'] = nDate.getDate();
        data.date['displayDate'] = `${monthNames[nDate.getMonth()]}, ${nDate.getDate()}` ;
        return data;
      })
      const monthArray = Array(12).fill().map((v,i)=>i);
      const nYear = Array.from(new Set(projectList.map((e)=> e.date.year )));
      const newProjectList = [];
      nYear.forEach((year)=>{
        const groupYear = projectList.filter((e)=> e.date.year == year );
        const nMonthMap = [];
        monthArray.forEach((mon)=>{ 
          const monData = groupYear.filter(e=> {
           return e.date.mon == mon
          });
          if(monData.length){
            nMonthMap.push({mon,monData, month:monthNames[mon]}); 
          }
        });
        newProjectList.push({year,nMonthMap})
      });
      console.log(newProjectList);
      setList(newProjectList);
    });
  }
  useEffect(() => {
    getProjectList()
    console.log('useEffect')
  }, []);
  return (
    <div className="container">
      <Header />
      {list.sort((a,b)=>b.year - a.year).map(e => <TimeLine key={e.id} project={e} />)}
    </div>
  )
}
