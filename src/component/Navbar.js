import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import {faSearch } from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from "react-router-dom"

const Navbar = () => {
    const menuList = [
        '여성','Divided','남성','신생아/유아','H&M Home','Sale','지속가능성'
    ] 
    const navigate = useNavigate()


    const goToLogin = () => {
        navigate('/login')
    }
    const search = (event) => {
        if(event.key ==="Enter"){
          
       //입력한 검색어를 읽어와서 
       let keyword = event.target.value
       //url을 바꿔준다. 
       navigate(`/?q=${keyword}`) 
    }
  }
  return (
    <div>
        <div class="login-button" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <div>로그인 </div>
        </div>
      <div className="nav-section">
        <img width={100} src="https://1000logos.net/wp-content/uploads/2017/02/Hennes-Logo-19682.jpg"/>
      </div>
      <div className='menu-area'>
        
            <ul className='menu-list'>
                {menuList.map(menu=><li>{menu}</li>)} {/* 메뉴리스트에서맵을쓸건데 맵안에는 메뉴이있다.각각의 메뉴는 LI태그에들어있다 */}
            </ul>
        
            <div className='search-box'>
                <FontAwesomeIcon icon={faSearch}/>
                <input type="text" placeholder="제품검색"  onKeyPress={(event)=>search(event)}/>
           </div>
      </div>
    </div>
  )
}
            

export default Navbar
     

