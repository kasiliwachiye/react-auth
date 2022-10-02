import Link from "next/link";

function Nav () {
    return (
        <div className='navbar bg-base-100 py-8 px-8'>
            <div className='flex-1'>
                <Link href={'/'}>Home</Link>
            </div>
            <div className="flex-none">
                <ul>
                    <Link href={'/auth/login'}>
                        <a className="btn btn-primary">Join Now</a>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Nav;