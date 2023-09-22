import React from 'react'
import './style.css';
import Button from '../button'
function TodoCard({ onchange, value, data, setData, setValue }) {

    const newItem = () => {
        if (value.trim().length > 0) { //يمنع ادخال قيمة فارغة
            const newObj = {
                title: value,
                completed: false,
                id: Date.now() // عشان لما نحذف صف ينحذف كل صف لحاله بمعني كل صف اله اي دي خاص في

            }

            setData([newObj, ...data])
            setValue("")
        }
    }
    return (
        <div className="card">
            <input value={value} onChange={onchange} placeholder="What would you like to do? " className="todo-input" />
            <Button text={"Add"} className={"bg-red"} onclick={newItem} />

        </div>
    )
}

export default TodoCard