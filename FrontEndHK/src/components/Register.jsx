import { Link } from "react-router-dom";


export function Register() {
    return (
        <>
            <div className="flex justify-center items-center md:mt-32  ">
                <div className="md:m-6">
                    <h1 className="text-center text-xl md:text-5xl">
                        Join an oppurtunity to learn and grow with us!
                    </h1>
                </div>
                <div className="md:ml-6 border-black border-5 bg-black p-5 text-white rounded-lg">
                    <Link to={"/register"} className="md:text-xl"> REGISTER NOW </ Link>
                </div>  
            </div>
        </>
    )
}