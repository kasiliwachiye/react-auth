import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {auth} from "../../utils/firebase";

export default function Login() {
    const googleProvider = new GoogleAuthProvider()
    const GoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => console.log(result.user))
            .catch(err => console.error(err))
    }
    return (
        <div>
            <div className="flex flex-1 justify-center">
                <h1 className='text-3xl font-bold my-4'>Sign Up</h1>
            </div>
            <div className="flex flex-1 justify-center">
                <div className='flex flex-col justify-center w-64 my-4'>
                    <button className="btn btn-active btn-primary m-2">Sign in with Facebook</button>
                    <button onClick={GoogleLogin} className="btn btn-error m-2">Sign in with Google</button>
                </div>
            </div>
        </div>
    )
}