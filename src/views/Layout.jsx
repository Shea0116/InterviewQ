import { NavLink, Outlet } from 'react-router-dom'
import './style.css'

const Layout = () => {
    return (
        <>
            <h1 style={{textAlign: 'center'}}>高频面试题</h1>
            <nav>
                <NavLink to="/html" activeClassName="active">HTML</NavLink>
                <NavLink to="/css" activeClassName="active">CSS</NavLink>
                <NavLink to="/javascript" activeClassName="active">JavaScript</NavLink>
                <NavLink to="/es6" activeClassName="active">ES6</NavLink>
                <NavLink to="/server" activeClassName="active">Server</NavLink>
                <NavLink to="/mobile" activeClassName="active">Mobile</NavLink>
                <NavLink to="/vue" activeClassName="active">Vue</NavLink>
                <NavLink to="/react" activeClassName="active">React</NavLink>
            </nav>
            
            <Outlet />
        </>
    )
}

export default Layout