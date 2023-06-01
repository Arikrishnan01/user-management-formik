import React, { useEffect, useState } from 'react';
import './user.css';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../global';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function Books() {
  const navigate = useNavigate();
  const [book, setBook] = useState([]);

  const getBooks = () => {
    fetch(`${API_URL}`,{
      method: "GET",
    })
    .then((response) => response.json())
    .then((bks) => setBook(bks));
  }
  useEffect(()=> {
    getBooks()
  },[]);

  return (
    <div className='books'>
      <div className="addBookButton">
        <div className="addBookTitle">UsersList</div>
        <button 
          className="addbtn"
          onClick={() => navigate('/add-user')}
          >Add User</button>
      </div>
        <div className="tableContainer">
          <TableContainer>
              <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell className="tableHeadCell">Firsname</TableCell>
                      <TableCell className="tableHeadCell">LastName</TableCell>
                      <TableCell className="tableHeadCell">Gender</TableCell>
                      <TableCell className="tableHeadCell">Age</TableCell>
                      <TableCell className="tableHeadCell">Address</TableCell>
                      <TableCell className="tableHeadCell">Edit</TableCell>
                      <TableCell className="tableHeadCell">Delete</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      book?.map(row => (
                        <TableRow key={row.id}>
                          <TableCell>{row.firstname}</TableCell>
                          <TableCell>{row.lastname}</TableCell>
                          <TableCell>{row.gender}</TableCell>
                          <TableCell>{row.age}</TableCell>
                          <TableCell>{row.address}</TableCell>
                          <TableCell>
                            <button 
                              className="tableEditButton"
                              onClick={()=> navigate(`/update-user/${row.id}`)}
                            >Edit</button>
                          </TableCell>
                          <TableCell>
                              <DeleteOutlineIcon 
                                className="tableDeleteButton"
                                onClick={()=> {
                                  fetch(`${API_URL}/${row.id}`,{
                                    method: "DELETE",
                                  })
                                  .then(() => alert("Book deleted successfully"))
                                  .then(() => getBooks())
                                }}
                                />
                          </TableCell>
                        </TableRow>
                      ))
                    }
                  </TableBody>
              </Table>
          </TableContainer>
        </div>
    </div>
  )
}