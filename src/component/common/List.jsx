import { useEffect, useState } from 'react'
import { CheckboxControl } from './CheckboxControl';

export const List = () => {

    const [ToDoList, setToDoList] = useState([{}])
    const [AddOpen, setAddOpen] = useState(false)
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')

    useEffect(() => {
        setToDoList([
            { name: "Faire les courses", category: "Shopping", isDone: false },
            { name: "Faire le ménage", category: "corvée", isDone: false },
            { name: "Aller à la piscine", category: "sport", isDone: false }])
    }, [])

    const handleClick = () => {
        setAddOpen(!AddOpen) //Sert à inverser les valeurs
    }
    const addItem = (e) => {
        e.preventDefault();
        setToDoList([...ToDoList, { name, category }])
    }
    const handleClickDone = (indexToModify) => {
        ToDoList[indexToModify].isDone = !ToDoList[indexToModify].isDone
        setToDoList([...ToDoList])
    }
    const handleDelete = (indexToDelete) => {
        ToDoList.splice(indexToDelete, 1)
        setToDoList([...ToDoList])
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

        <div className="d-flex justify-content-center">

            <table className="table table-striped border" style={{ maxWidth: "35em" }}>
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Name</th>
                        <th colSpan="2">Category</th>
                    </tr>
                </thead>
                <tbody>
                    {ToDoList.map((thing, index) => {
                        const classIsDone = thing.isDone ? "text-decoration-line-through" : "";
                        return (
                            <tr className={classIsDone} key={index}>
                                <td>
                                    <CheckboxControl handleClickDone={() => handleClickDone(index)} />
                                </td>
                                <td>{thing.name}</td>
                                <td>{thing.category}</td>
                                <td>
                                    <button className="material-symbols-outlined border-0 bg-transparent" type='delete' onClick={() => handleDelete(index)}>delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>

    </>
}



// Ternaire : 3 elements -> x ? y : z
// si x = true, alors y et sinon alors z

// Voir pourquoi le bouton reset ne fonctionne pas
// Checkbox = element séparé qui fonctionne PAREIL
// addItem
// tbody

