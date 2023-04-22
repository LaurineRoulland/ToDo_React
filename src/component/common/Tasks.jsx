import { CheckboxControl } from './CheckboxControl';

export const Tasks = (props) => {

    const toDoList = props.toDoList;
    
    const handleClickDone = (indexToModify) => {
        toDoList[indexToModify].isDone = !toDoList[indexToModify].isDone
        props.setToDoList([...toDoList])
    }
    const handleDelete = (indexToDelete) => {
        toDoList.splice(indexToDelete, 1)
        props.setToDoList([...toDoList])
    }

    return <tbody>
        {toDoList.map((thing, index) => {
            const classIsDone = thing.isDone ? "text-decoration-line-through" : "";
            return (
                <tr className={classIsDone} key={index}>
                    <td>
                        <CheckboxControl handleClickDone={() => handleClickDone(index)} isDone={thing.isDone}  />
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
}