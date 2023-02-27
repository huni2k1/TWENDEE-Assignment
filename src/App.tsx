import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Pagination from './components/Pagination/pagination';
import SortOption from './components/SortOption/SortOption';

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState("None")
  const [data, setData] = useState([])

  const getFullName = (user: any) => {
    return user.name.title + " " + user.name.first + " " + user.name.last
  }

  useEffect(() => {
    axios.get('https://randomuser.me/api/?page=' + { currentPage } + '&results=10')
      .then(res => {
        if (sortBy == "username") {
          res.data.results.sort((user1: any, user2: any) => (user1.login.username > user2.login.username) ? 1 : ((user2.login.username > user1.login.username) ? -1 : 0))
        }
        else if (sortBy == "fullname") {
          res.data.results.sort((user1: any, user2: any) => (getFullName(user1) > getFullName(user2)) ? 1 : ((getFullName(user2) > getFullName(user1)) ? -1 : 0))
        }
        setData(res.data.results)
      })
  }, [currentPage])
  useEffect(() => {
    let sortedData = [...data]
    if (sortBy == "username") {
      sortedData.sort((user1: any, user2: any) => (user1.login.username > user2.login.username) ? 1 : ((user2.login.username > user1.login.username) ? -1 : 0))
    }
    else if (sortBy == "fullname") {
      sortedData.sort((user1: any, user2: any) => (getFullName(user1) > getFullName(user2)) ? 1 : ((getFullName(user2) > getFullName(user1)) ? -1 : 0))
    }
    setData(sortedData)
  }, [sortBy])
  return (
    <div className="App">
      <>
        <table>
          <thead>
            <tr>
              <th>Full name</th>
              <th>User name</th>
              <th>Thumbnail Icon</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user: any) => {
              return (
                <tr>
                  <td>{getFullName(user)}</td>
                  <td>{user.login.username}</td>
                  <td><img src={user.picture.thumbnail} /></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
      <Pagination nPages={10} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <SortOption sortBy={sortBy} setSortBy={setSortBy} />
    </div>
  );
}

export default App;
