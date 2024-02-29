
const AddTodo = (props) => {
    return (
        <>
        <div className="add-todo">
            <h3>Add New</h3>
            <form action="" onSubmit={props.addTodo}>
                <input type="text" name="text" value={props.input.text} placeholder="Todo Name" required onChange={props.inputHandle} />
                <select name="status" value={props.input.status} id="" required onChange={props.inputHandle}>
                    <option value="">Status</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                </select>
                <button className="btn-success">Add</button>
            </form>
        </div>
        </>
    );
}

export default AddTodo;