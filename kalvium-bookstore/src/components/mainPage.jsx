import React, { useEffect ,useState} from 'react'
import axios from 'axios'
import logo from '../logo.png'
import {Link} from 'react-router-dom'
import './mainPage.css'

function mainPage() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("")
    useEffect(() => {
      axios.get('https://reactnd-books-api.udacity.com/books',{headers: { 'Authorization': 'whatever-you-want' }}).then(response => setData(response.data))
    }, []);
    console.log(data.books);
  return (
    <div>
      <nav>
        <div className="logo">
        <img src={logo}/>
        </div>
        <input type="text" className='searchBar' placeholder='Search'value={search} onChange={(e) => setSearch(e.target.value)}/>
        <Link to='/registration'><button className='btn'>Register</button></Link> 
        <img src="https://cdn-icons-png.flaticon.com/128/471/471664.png" className='questionMark'/>
      </nav>
        <div className="bookList">
            {data.books && data.books.filter(b=>b.title.toLowerCase().includes(search.toLowerCase())).map((book)=>(
                <div className='books'>
                    <img src={book.imageLinks.thumbnail}/>
                    <h4>{book.title}</h4>
                    <h5><b><u>Free</u></b></h5>
                </div>
            )) }
        </div>
      </div> 
  )
}

export default mainPage
