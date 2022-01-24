import React, {useState,useEffect} from "react";
import moment from "moment";
import WcOutlinedIcon from '@mui/icons-material/WcOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Button from '@mui/material/Button';
import UpdateIcon from '@mui/icons-material/Update';
import capitalizeString from "capitalize-string";

const url = `https://randomuser.me/api/`

const FetchUsers = () => {
    const [users, setUsers] = useState([])

    const fetchUserData = async() => {
        const resp = await fetch(url)
        const users = await resp.json()
        setUsers(users.results)
    }


    useEffect(() => {
        fetchUserData()
    }, [])


    return ( <div>
        <section>
        {users.map((user) => {
            return ( <div key={user.login.uuid} >
                <div class="main">
                <div class="top">
                <div class="pic">
                <img src={user.picture.large} alt="profile pic" />
                </div>
                <div class="name">
                <h1> {user.name.title}. {user.name.first} {user.name.last}</h1>
                <p> @{user.login.username}</p>  
                </div>
                </div>
                <div class="mid-bottom">
                <div class="mid">
                <h3> <WcOutlinedIcon style={{textIndent: 5}}/>  &nbsp;&nbsp; {capitalizeString(`${user.gender}`)}</h3>
                <h3> <CalendarTodayOutlinedIcon style={{textIndent: 5}}/> &nbsp;&nbsp;  {' '} {moment(`${user.dob.date}`).format('DD-MM-YYYY')}</h3>

                <h3> <CakeOutlinedIcon style={{textIndent: 5}}/> &nbsp;&nbsp; {user.dob.age} Years</h3>
                </div>
                
                <div class="contact">
                <h3> <LocalPhoneOutlinedIcon style={{textIndent: 5}}/>  &nbsp;&nbsp; {user.phone}</h3>
                <h3> <PhoneAndroidOutlinedIcon style={{textIndent: 5}}/> &nbsp;&nbsp; {user.cell}</h3>
                <h3> <EmailOutlinedIcon style={{textIndent: 5}} />  &nbsp;&nbsp; {user.email}</h3>
                </div>
                </div>
                <div class="address">
                <h3> <HomeOutlinedIcon style={{textIndent: 5}}/> &nbsp;&nbsp;  {user.location.street.number}, {user.location.street.name}, {user.location.city}, {user.location.state}, {user.location.country}, {user.location.postcode}</h3>
                </div>
                </div>
                <div class="button">
                <Button  onClick={fetchUserData} color="success" varient="outlined" startIcon={<UpdateIcon />} > Update </Button>
                </div> 
            </div> )
        })}
    </section>
    </div> )
    
    }
    export default FetchUsers;