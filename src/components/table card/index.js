import React from 'react'
import "./style.css"
import TableTr from '../table tr'

function TableCard({ data , onClick ,setData  }) {
    return (
        <div className='table-card'>
            <h2>Todo List</h2>
            <table className="content-table">
                <thead>
                    <tr>
                        <th>List</th>
                        <th>Status</th>
                        <th>Close</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((element) => 
                        (<TableTr key={element.id} data={element}  
                        handelDelete={()=>{
                            const filtered = data.filter((el) =>el.id !== element.id ) ;
                            setData(filtered) 
                        }}  />))
                    }
                </tbody>
            </table>
        </div>

    )
}

export default TableCard