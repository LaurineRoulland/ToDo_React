import { useEffect, useState } from 'react'
import { AddItems } from './AddItems';
import { Tasks } from './Tasks';


export const List = () => {

    const [toDoList, setToDoList] = useState([{}])

    useEffect(() => {
        setToDoList([
            { name: "Faire les courses", category: "Shopping", isDone: true },
            { name: "Faire le ménage", category: "corvée", isDone: false },
            { name: "Aller à la piscine", category: "sport", isDone: false }])
    }, [])


    return <>

        <AddItems setToDoList={setToDoList} toDoList={toDoList} />

        <div className="d-flex justify-content-center">
            <table className="table table-striped border" style={{ maxWidth: "35em" }}>
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Name</th>
                        <th colSpan="2">Category</th>
                    </tr>
                </thead>
                <Tasks toDoList={toDoList} setToDoList={setToDoList} />
            </table>
        </div>

    </>
}



// Ternaire : 3 elements -> x ? y : z
// si x = true, alors y et sinon alors z

// Voir pourquoi le bouton reset ne fonctionne pas   OK
// Checkbox = element séparé qui fonctionne PAREIL   OK
// addItem                                           OK
// tbody                                             OK

