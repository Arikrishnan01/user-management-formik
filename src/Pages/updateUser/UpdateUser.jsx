import React,{useState, useEffect} from 'react';
import './updateUser.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate,useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { API_URL } from '../../global';


export default function UpdateUser() {
    const { bookid } = useParams();
    const navigate = useNavigate();
    const [firstname ,setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");

    // useEffect using for fetch the api
    useEffect(() => {
        fetch(`${API_URL}/${bookid}`,{
            method: "GET"
        })
        .then((data) => data.json())
        .then((bk) => {
            setFirstName(bk.firstname)
            setLastName(bk.lastname)
            setGender(bk.gender)
            setAge(bk.age)
            setAddress(bk.address)
        })
    },[]); 

  return (
    <div className='updateBook'>
        <div className="updateBookContainer">
            <div className='updatePage'>
                <button className="bookBack"
                    onClick={()=> navigate(-1)}
                    >
                    <ArrowBackIcon className='bookBsckIcon'/>
                    <span className="bookButtonTitle">Back</span> 
                </button>
                <span className="bookTitle">Update User</span>
            <div >
            <form className="bookInput">
                <TextField 
                    id="firstname"
                    name="firstname" 
                    label="FirstName" 
                    variant="outlined" 
                    className='bookInputField' 
                    value={firstname}  
                    onChange={(event) => setFirstName(event.target.value)}           
                />
                <TextField 
                    id="lastname"
                    name="lastname" 
                    label="LastName" 
                    variant="outlined" 
                    className='bookInputField' 
                    value={lastname}  
                    onChange={(event) => setLastName(event.target.value)}           
                />
                <TextField 
                    id="gender" 
                    name="gender"
                    label="Gender" 
                    variant="outlined" 
                    className='bookInputField'
                    value={gender}
                    onChange={(event) => setGender(event.target.value)}
                />
                <TextField 
                    id="age"
                    name="age" 
                    label="Age" 
                    variant="outlined" 
                    className='bookInputField'
                    value={age}
                    onChange={(event) => setAge(event.target.value)}
                />
                <TextField 
                    id="address"
                    name="address" 
                    label="Address" 
                    variant="outlined" 
                    className='bookInputField'
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                />
            <button 
                type="submit"
                className="bookSave" 
                onClick={()=> {
                    const updateBook = {
                        firstname: firstname,
                        lastname: lastname,
                        gender: gender,
                        age: age,
                        address: address

                    };
                    fetch(`${API_URL}/${bookid}`,{
                        method: "PUT",
                        body: JSON.stringify(updateBook),
                        headers: {
                            "Content-Type" : "application/json",
                        },
                    })
                    .then((data) => data.json())
                    .then((data) => console.log(data))
                navigate('/')
                }}
            >
                Update User
                </button>
            </form>
        </div>
            </div>
        </div>
    </div>
  )
}