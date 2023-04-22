export const CheckboxControl = (props) => {
    return <div className="form-check">
        <input className="form-check-input mx-1" type="checkbox" checked={props.isDone || false} onChange={props.handleClickDone} />
    </div>
}