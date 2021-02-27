import React, {useEffect, useState} from 'react'
import Table from "./Components/Table/Table";
import Chart from "./Components/Chart/Chart";
import axios from "axios";

const App = () => {

    const [data, setData] = useState([]);

    const api = axios.create({
        baseURL: `https://e8e2abb1-64d4-4f86-9d95-7368dac584e6.mock.pstmn.io`
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