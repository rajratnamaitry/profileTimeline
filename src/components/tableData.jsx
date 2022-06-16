import { useState, useEffect } from 'react'
import { app, database } from "../firebase";
import { getDocs, collection } from 'firebase/firestore'
import Tbody from './tbody';
export default function TableData() {
    const [list, setList] = useState([]);
    const collectionRef = collection(database, 'projects');
    const getProjectList = () => {
        getDocs(collectionRef).then((data) => {
            const fdata = data.docs.map(e => {
                return { ...e.data(), id: e.id };
            });
            setList(fdata);
        });
    }
    useEffect(() => {
        getProjectList()
        console.log('useEffect table')
    }, []);
    return (
        <div className="table-responsive">
            <table className="table text-light table-striped table-sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((td)=> <Tbody name={td.name} date={td.date.seconds} key={td.id} />)}
                </tbody>
            </table>
        </div>
    )
}
