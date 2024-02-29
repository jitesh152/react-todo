
const TodoList = (props) => {
    return (
        <>
            <div data-index={props.index} className="todo-list">
                <div className="todo-list-text">
                    <p className="text">{props.item.text}</p>
                    <p className="status">{props.item.status}</p>
                </div>
                <div className="todo-list-btn">
                    <button onClick={() => props.edit(props.index)}>Edit</button>
                    <button onClick={() => props.delete(props.index)}>Delete</button>
                </div>
            </div>
        </>
    );
}
export default TodoList;