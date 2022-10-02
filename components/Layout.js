import Nav from './Nav'

function Layout ({children}) {
    return (
        <div className=''>
            <Nav />
            <main>{children}</main>
        </div>
    )
}

export default Layout;