import React , {useEffect} from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { getBook , deleteBook , deleted } from '../../store/Book/Book';

const BookList = ({showDetails}) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBook())
    } ,[])

    const {Book} = useSelector(state => state)

    const showBook = () => {
        return Book.isLoading ? (
            <div className='list'>
                <h1 style={{marginLeft: '4rem',color:'red'}}>Loading...</h1>
            </div>
        ) : (
            Book.isError ? (
                <div className='list'>
                    <h1 style={{marginLeft: '4rem',color:'red'}}>
                    An error occurred while connecting to the server, please restart the page.
                    </h1>
                </div>
            ) : (
                Book.book.map(i => {
                    return(
                        <div className='content' key={i.id}>
                            <div className='book'>
                                <span className='nameBook'>{i.title}</span>
                                <button onClick={() => dispatch(deleted(i.id))} className='deleteBook'>Delete</button>
                                <button className='readBook' onClick={() => showDetails(i)}>Read</button>
                            </div>
                        </div>
                    )
                })
            )
        )
    }

    return(
        <div className='BookList'>
            <div className='header'>
                <h1>Book List</h1>
            </div>
            <div className='list'>
                    {showBook()}
            </div>
        </div>
    )
}
export default BookList;