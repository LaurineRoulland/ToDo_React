import { useEffect, useState } from 'react'
import { CheckboxControl } from './CheckboxControl';
import { AddItems } from './AddItems';


export const List = () => {

    const [ToDoList, setToDoList] = useState([{}])

    useEffect(() => {
        setToDoList([
            { name: "Faire les courses", category: "Shopping", isDone: true },
            { name: "Faire le ménage", category: "corvée", isDone: false },
            { name: "Aller à la piscine", category: "sport", isDone: false }])
    }, [])

    const handleClickDone = (indexToModify) => {
        ToDoList[indexToModify].isDone = !ToDoList[indexToModify].isDone
        setToDoList([...ToDoList])
    }
    const handleDelete = (indexToDelete) => {
        ToDoList.splice(indexToDelete, 1)
        setToDoList([...ToDoList])
    }


    return <>

        <AddItems setToDoList={setToDoList} ToDoList={ToDoList} />

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

// Voir pourquoi le bouton reset ne fonctionne pas   OK
// Checkbox = element séparé qui fonctionne PAREIL   OK
// addItem
// tbody

