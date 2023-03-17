import axios from 'axios'
import React,{useState} from 'react';
import FacebookLogin from "react-facebook-login"
import config from '../config';
import './FBuser.css';

function FBuser(props){
  let loginBtn,showProfile;

  const setLogedin = props.setLogedin 
  const logedin = props.logedin
  
  const [profile,setPicfile] = useState({
    name : "",
    picture : ""
  })

  const responseFacebook = async (response) => {
    if(response.accessToken){
      console.log(response.accessToken)
      let result = await axios.post(`${config.loginUrlPrefix}`, {
        token: response.accessToken
      })
      sessionStorage.setItem('access_token', result.data.access_token)
      setPicfile({
        name:result.data.result.name,
        picture:result.data.result.picture.data.url
      })
      setLogedin(true)
    }
  }

  if(logedin){
    loginBtn = (<></>)
    showProfile = (
      <div className='profile'>
        <div className="nameFB">
          <h1>{profile.name}</h1>
        </div>
        <div className="profileImg">
          <img src={profile.picture} alt="Logo"/>
        </div>
        <button className="logOut" onClick={()=>{
          setLogedin(false)
        }}>log out</button>
      </div>
    )
  }else{
    loginBtn = (
      <FacebookLogin
        appId = "1860217507678395"
        autoLoad = {true}
        cssClass= "btnFacebook"
        callback = {responseFacebook}
      />
    )
    showProfile = (<></>)
  }

  return(
    <div className="facebook-user">
      <div>{loginBtn}</div>
      <div>{showProfile}</div>
    </div>
  )
}
export default FBuser;