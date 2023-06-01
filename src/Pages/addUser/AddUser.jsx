import React from 'react';
import './addUser.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../global';
import { useFormik } from 'formik';
import { bookSchema } from '../../Validation';


export default function AddUser() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            gender: "",
            age: "",
            address: ""
        },
        validationSchema: bookSchema,
        onSubmit: (newBook) => {
            createBook(newBook);
        }
    });

    const createBook = (newBook) => {
        fetch(`${API_URL}`, {
            method: "POST",
            body: JSON.stringify(newBook),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(() => alert("User added successfully"))
        .then(() => navigate(-1))
    };

return (
    <div className='book'>
      <div className="bookContainer">
            <div>
                <button className="bookBack"
                    onClick={()=> navigate(-1)}
                    >
                    <ArrowBackIcon className='bookBsckIcon'/>
                    <span className="bookButtonTitle">Back</span> 
                </button>
            </div>
        <span className="bookTitle">Add User</span>
        <div >
            <form onSubmit={formik.handleSubmit} className="bookInput">
                <TextField 
                    id="firstname"
                    name="firstname" 
                    label="FirstName" 
                    variant="outlined" 
                    className='bookInputField'
                    value={formik.values.firstname}
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}               
                />
                 {formik.touched.firstname && formik.errors.firstname ? formik.errors.firstname : ""}
                
                 <TextField 
                    id="lastname"
                    name="lastname" 
                    label="LastName" 
                    variant="outlined" 
                    className='bookInputField'
                    value={formik.values.lastname}
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}               
                />
                 {formik.touched.lastname && formik.errors.lastname ? formik.errors.lastname : ""}

                
                <TextField 
                    id="gender" 
                    name="gender"
                    label="Gender" 
                    variant="outlined" 
                    className='bookInputField'
                    value={formik.values.gender}
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                />
                 {formik.touched.gender && formik.errors.gender
                    ? formik.errors.gender
                    : ""}
                <TextField 
                    id="age"
                    name="age" 
                    label="Age" 
                    variant="outlined" 
                    className='bookInputField'
                    value={formik.values.age}
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                />
                    {formik.touched.age && formik.errors.age
                    ? formik.errors.age
                    : ""}

                    <TextField 
                    id="address"
                    name="address" 
                    label="Address" 
                    variant="outlined" 
                    className='bookInputField'
                    value={formik.values.address}
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                />
                    {formik.touched.address && formik.errors.address
                    ? formik.errors.address
                    : ""}

            <button 
                type="submit"  
                className="bookSave"
                // onClick={createBook}
                >
                    Save
                </button>
            </form>
        </div>
      </div>
    </div>
  )
}