import React from 'react';

const BookDetails = ({bookDetails}) => {
    return(
        <div className='BookDetails'>
            <div className='header'>
                <h1>Book Details</h1>
            </div>
            {bookDetails()}
        </div>
    )
}
export default BookDetails;