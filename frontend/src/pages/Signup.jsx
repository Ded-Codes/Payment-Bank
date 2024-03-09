import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { Inputbox } from "../components/Inputbox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Signup = () =>{
    

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();
    
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign up"}/>
                <SubHeading label={"Enter the information to create your account"} />
                <Inputbox onChange={e=>{setFirstName(e.target.value)}} placeholder={"John"} label={"First Name"}/>
                <Inputbox onChange={e=>{setLastName(e.target.value)}} placeholder={"Doe"} label={"Last Name"}/>
                <Inputbox onChange={e=>{setUserName(e.target.value)}} placeholder={"abcd@gmail.com"} label={"Email"}/>
                <Inputbox onChange={e=>{setpassword(e.target.value)}} placeholder={"12345678"} label={"Password"}/>
                <div className="pt-4">
                    <Button handleClick={ async ()=>{
                      const response = await  axios.post("http://localhost:3001/api/v1/user/signup",{
                            username: username,
                            firstName:firstName,
                            lastName: lastName,
                            password:password
                        });
                        localStorage.setItem("token", response.data.token)
                        navigate("/dashboard")

                    }}
                        
                    label={"Sign up"}/>
                </div>
                <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}/>
                </div>
               
            </div>

        </div>
    )
}