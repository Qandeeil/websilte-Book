import React , {useRef} from 'react';
import { useDispatch } from 'react-redux';
import { insertBook , insert } from '../../store/Book/Book';


const InsertBook = () => {

    const dispatch = useDispatch();

    const Title = useRef(null);
    const Description = useRef(null);
    const Price = useRef(null);


    const setData = (e) => {
        e.preventDefault();
        const Data = {
            title: Title.current.value,
            description: Description.current.value,
            price: Price.current.value
        }
        dispatch(insert(Data))
        Title.current.value = null
        Description.current.value = null
        Price.current.value = null
    }

    return(
        <div className='insertBook'>
            <div className='header'>
                <h1>Insert Book</h1>
            </div>
            <form >
                <label>Title</label>
                <input ref={Title} type='text' placeholder='Enter the Title'/>
                <label>Price</label>
                <input ref={Price} type='number' placeholder='Enter the Price'/>
                <label>Descripiton</label>
                <textarea ref={Description} type='text' placeholder='Enter the Descripiton'></textarea>
                <button onClick={setData}>Submit</button>
            </form>
        </div>
    )
}
export default InsertBook;