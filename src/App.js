import React, {useEffect, useState} from 'react'
import Table from "./Components/Table/Table";
import Chart from "./Components/Chart/Chart";
import axios from "axios";

const App = () => {

    const [data, setData] = useState([]);

    const api = axios.create({
        baseURL: `http://localhost:3000`
    })

    useEffect(() => {
        api.get("/data")
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
            .catch(error => {
                console.log("Error")
            })
    }, [])

    return <>
        <Table data={data} api={api}/>
        <Chart data={data} setData={setData}/>
    </>
}

export default App;