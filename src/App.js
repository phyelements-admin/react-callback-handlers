import React from 'react';

function App() {
  const story = [
    {
      id:1,
      title: 'Lion and cat',
      url: 'https:www.com',
      author:'Ramu',
      comments:5,
    },
    {
      id:2,
      title: 'The Mice',
      url: 'https:www.com',
      author:'Praveen',
      comments:8, 
    },
    {
      id:3,
      title: 'Tom And jerry',
      url: 'https:www.com',
      author:'Naveena',
      comments:8, 
    },
    {
      id:4,
      title: 'Fox',
      url: 'https:www.com',
      author:'Amir',
      comments:8, 
    },

  ];
  
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const searchedStories = story.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search onSearch={handleSearch} />
      <List story={searchedStories} />
    </div>
  );
}
// Search Component
const Search = (props)=>{
  const [SearchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);

    props.onSearch(event);
  }
  return(
  <div>
    <label >Search By Title</label>
    <input id="search" type="text" onChange={handleChange}/>
    <p>
      Searching for <strong>{SearchTerm}</strong>
    </p>
  </div>
  );
}

// List Component
const List = (props)=>(
  <ul>
  {props.story.map((item) => (
// item id and item object is passing to the Item component using Map function
    <Item key={item.id} item={item}/> 
  ))}
  </ul>
  
)

// Item Component
const Item = (props)=>(
  <li>
    <span>
      <a href={props.item.url}> {props.item.title} </a>
    </span>
    <span>{props.item.author} </span>
    <span>{props.item.author}</span>
    <span>{props.item.points}</span>
    
  </li>
);

export default App;
