import '../../styles/book.css' ;
import placeholder from '../../img/placeholder.png' ;


const Book = ({book}) => {
    return(
        <div className='wrapper'>
            <div>
                <img    src={placeholder}
                        className='image'></img>
            </div>
            <div>
                <span>책 이름 :  {book.bookName} </span><p/>
                <span>책 가격 :  {book.price} </span>
            </div>
        </div>
    );
}

export default Book  ;