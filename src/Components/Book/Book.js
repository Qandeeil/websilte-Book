import React, { Fragment , useState } from 'react';
import InsertBook from './InsertBook/InsertBook';
import BookList from './BookList/BookList';
import BookDetails from './BookDetails/BookDetails';

const Book = () => {

    const [details,setDetails] = useState([]);

    const showDetails = (id) => {
        setDetails([id])
    }

    const bookDetails = () => {
        return details.map(({id,title,description,price}) => {
            return(
                <div className='content' key={id}>
                    <h3><span style={{color: 'red'}}>Title:</span> {title}</h3>
                    <h3><span style={{color: 'red'}}>Price:</span>  {price}</h3>
                    <h3><span style={{color: 'red'}}>Description:</span>  {description}</h3>
                </div>
            )
        })
    }

    return(
        <Fragment>
            {<InsertBook />}
            {<BookList showDetails={showDetails} />}
            {<BookDetails bookDetails={bookDetails} />}
        </Fragment>
    )
}
export default Book;