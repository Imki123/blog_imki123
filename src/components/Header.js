import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

function Header(props) {
    const menuSlide = () => {
        const body = document.querySelector('#body')
        const guideWrapper = document.querySelector('#guideWrapper')
        const content = document.querySelector('#content')

        if(guideWrapper.clientWidth > 10){
            guideWrapper.style.width = '0px'
            content.style.width = '100%'
        }else{
            let width = '312px'
            if(body.clientWidth < 500){
                width = '230px'
            }
            guideWrapper.style.width = width
            content.style.width = `calc(100% - ${width})`
        }
    }

	return(
        <div id="headerWrapper">
            <div id="header">
                <div className="hover" onClick={menuSlide}>
                    <img id="menu" alt="MENU" src={process.env.PUBLIC_URL+'/images/guide_icon.png'}/>
                </div>
                <Link to="/"> 
                    <div id="title" className="hover">
                        <img id="logo" alt="logo" src={process.env.PUBLIC_URL+'/images/GitHub-Mark-32px.png'}/> 
                        행복한 코딩 블로그 :D
                    </div>
                </Link>
                <div className="hover">
                    <img id="profile" alt="PROFILE" src={process.env.PUBLIC_URL+'/images/avatar.png'}/>
                </div>
            </div>
        </div>
    ) 
}
export default React.memo(Header)
