import { useState, useEffect } from 'react'
import Header from '../components/common/header'
import TimeLine from '../components/timeline/timeline'
import { database } from '../firebase';
import { getDocs, collection } from 'firebase/firestore'
export default function Homepage() {
  const [list, setList] = useState([]);
  const [inYr, setTotalInYr] = useState(0);
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
        data.date['displayDate'] = `${monthNames[nDate.getMonth()]}, ${nDate.getDate()}`;
        return data;
      })
      const monthArray = Array(12).fill().map((v, i) => i);
      const nYear = Array.from(new Set(projectList.map((e) => e.date.year)));
      const newProjectList = [];
      let totalInYr = 0;
      nYear.forEach((year) => {
        const groupYear = projectList.filter((e) => e.date.year == year);
        const nMonthMap = [];
        let totalInMon = 0
        monthArray.forEach((mon) => {
          const monData = groupYear.filter(e => {
            return e.date.mon == mon
          });
          if (monData.length) {
            totalInMon += monData.length;
            nMonthMap.push({ mon, monData, month: monthNames[mon] });
          }
        });
        totalInYr += totalInMon;
        newProjectList.push({ year, nMonthMap, inYear: groupYear.length, totalInMon })
      });
      setTotalInYr(totalInYr);
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
      {list
        .sort((a, b) => b.year - a.year)
        .map(e => <TimeLine key={e.year} project={e} total={inYr} />)}
    </div>
  )
}
