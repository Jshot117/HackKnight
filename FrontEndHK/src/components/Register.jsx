import { Link } from "react-router-dom";


export function Register() {
    return (
        <>
            <div className="flex justify-center items-center ">
                <div className="md:ml-6 border-black border-5 bg-black p-5 text-white rounded-lg">
                    <Link to={"/register"}> REGISTER NOW </ Link>
                </div>  
            </div>
        </>
    )
}