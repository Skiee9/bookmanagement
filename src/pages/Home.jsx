import React from 'react'
    import { useDispatch, useSelector } from 'react-redux'


const Home = () => {

    const dispatch=useDispatch();
    const {books, loading}= useSelector((state)=>state.books);

    useEffect(()=>{
        dispatch(fetchBooks());
    },[dispatch])
  return (
    <div>
      <h1>Available BOoks</h1>
      {loading ? <P>loading BOOKs...</P>: books.map((book)=> <BookCard Key={book.id} book={book}/>)}
    </div>
  )
}

export default Home

