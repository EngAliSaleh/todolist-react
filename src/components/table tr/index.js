/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import Button from '../button';
import { FaTrashAlt } from "react-icons/fa";
import "./style.css"

function TableTr({ data , handelDelete }) {
    const [status, setStatus] = useState(data.completed)

    const handelStatus = () => { //تغير الحالة من معلق ال مكتمل 
        if (data.completed === false) {
            setStatus(true)
        }

    }
    return (


        <tr>
            <td>{data.title}</td>
            <td> <Button onclick={handelStatus} className={status ? "bg-green" : "bg-red"} text={status ? "Completed" : "Pending"} /></td>
            <td onClick={handelDelete}><FaTrashAlt color={"#f00"} className='icon' /></td>
        </tr>


    )
}

export default TableTr;