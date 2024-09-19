import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, Link } from 'react-router-dom'

const Navbar = ({authenticate, setAuthenticate}) => {
  const menuList = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M Home", "Sale", "지속가능성"]
  
  let [width, setWidth] = useState(0);

  const navigate = useNavigate()

  // const goToLogin = () =>  {
  //   navigate("/login")
  // }

  const search = (event) => {
    // console.log("key press");
    if(event.key === "Enter"){
      // console.log("we click this key", event.key);
      //입력한 검색어를 읽어와서
      let keyword = event.target.value;
      console.log("keyword?",keyword);
      //url을 바꿔준다
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div>
        <div className='side-menu' style={{width: width}}>
          <button className='closebtn' onClick={()=>setWidth(0)}>
            &times;
          </button>
          <div className='side-menu-list' id='menu-list'>
            {menuList.map((menu, index) => (
              <button key={index}>{menu}</button>
            ))}
          </div>
        </div>

        <div className='nav-header'>
          <div className='burger-menu hide'>
            <FontAwesomeIcon icon={faBars} onClick={()=>setWidth(250)}/>
          </div>
          {authenticate==true?(
            <div className='login-button' onClick={()=>{setAuthenticate(false)}}>
              <FontAwesomeIcon icon={faUser}/>
              <div>로그아웃</div>
            </div>
          ):(
            <div className='login-button' onClick={()=>{navigate("/login")}}>
              <FontAwesomeIcon icon={faUser}/>
              <div>로그인</div>
            </div>
          )}
        </div>

        <div className='nav-logo'>
          <Link to="/">
            <img width={100} src="https://www.hm.com/entrance/assets/bundle/img/HM-Share-Image.jpg" alt=''/>
          </Link>
        </div>

        <div className='nav-menu-area'>
          <ul className='menu-list'>
            {menuList.map((menu, index) => (
                <li>
                  <a href='#' key={index}>{menu}</a>
                </li>
            ))}
          </ul>

          <div className='search'>
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder='제품검색' onKeyPress={(event)=>search(event)} />
          </div>
        </div>
    </div>
  )
}

export default Navbar;
