import { useState } from 'react'

export const AddItems = (props) => {

    const [AddOpen, setAddOpen] = useState(false)
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')

    const handleClick = () => {
        setAddOpen(!AddOpen) //Sert à inverser les valeurs
    }
    const addItem = (e) => {
        e.preventDefault();
        props.setToDoList([...props.ToDoList, { name, category }]);
    }
    const resetItem = (e) => {
        e.preventDefault();
        setName("");
        setCategory("");
    }


    return <>

        <div className="d-flex justify-content-center m-3">
            <button className="btn btn-primary" onClick={handleClick}>Add new item</button>
        </div>

        {AddOpen &&
            <form className='d-flex justify-content-center align-items-center my-4'>
                <label className='m-2'>
                    <input
                        value={name}
                        onChange={event => setName(event.target.value)}
                        className="form-control"
                        placeholder='Name' ></input>
                </label>
                <label className='m-2'>
                    <input
                        value={category}
                        onChange={event => setCategory(event.target.value)}
                        className="form-control"
                        placeholder='Category'></input>
                </label>
                <button onClick={addItem} className="btn btn-success m-2" type='submit'>Add</button>
                <button type="reset" className="btn btn-secondary m-2" onClick={resetItem}>Reset</button>
            </form >
        }

    </>

}


