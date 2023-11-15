import { useDispatch } from "react-redux"
import { filterChange } from "../reducers/filterReducer"

const Filter = () => {
    const dispatch = useDispatch()
    // const anecdotes = useSelector(state => state.anecdotes)
    const handleChange = (event) => {
        return event.target.value
    //    return anecdotes.filter(anecdote =>  anecdote.content.includes(event))
    }

    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter <input onChange={() => dispatch(filterChange(handleChange(event)))} />
        </div>
    )
}

export default Filter