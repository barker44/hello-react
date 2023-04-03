//import logo from './logo.svg';
import {useState} from 'react';
import {supabase} from './supabaseClient'
import './App.css';

function Library() {
  const [myBooks, setMyBooks] = useState([]);
  async function getBooks() {
    let { data: Books, error } = await supabase
      .from('Books')
      .select('*')
    setMyBooks(Books);
  }
  getBooks();
  return (
    <table className = "lib">
    {
      myBooks.map(b => (
        <tr>
          <td>{b.title}</td>
          <td>{b.author}</td>
          <td>{b.isbn}</td>
          <td>{b.description}</td>
        </tr>
      ))
    }
    </table>
  )
}

const snacks = [
  {id: 1, title: 'Fruit Snacks', isAvailable: true},
  {id: 2, title: 'Pop Tarts', isAvailable: false},
  {id: 3, title: 'Popcorn', isAvailable: true},
];

function SnackShelf() {
  const listSnacks = snacks.map(snack => 
    <li
    key = {snack.id}
    style = {{
      color: snack.isAvailable ? 'green' : 'red'
    }}
    >
      {snack.title}
    </li>
    );
    return (
      <ul>{listSnacks}</ul>
    )
}



const cat = {
  title: 'Picture of Cat',
  image: 'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1529&q=80', //Image from Unsplash
  width: '1600',
  height: '900'
};

function Catdisplay(){
  return (
    <div>
      <h2>{cat.title}</h2>
      {cat.image &&
      <img
      className="catImage"
    src={cat.image}
  alt={cat.title}
style = {{
  width: cat.width,
  height: cat.height
}}
/>
}
    </div>
  );
}

function MagicButton(){
  return (
    <button>Magic</button>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Library />
        <SnackShelf />
        <Catdisplay />
        <MagicButton />
      </header>
    </div>
  );
}

export default App;
