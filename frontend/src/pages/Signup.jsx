import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { Inputbox } from "../components/Inputbox"
import { SubHeading } from "../components/SubHeading"

export const Signup = () =>{
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign up"}/>
                <SubHeading label={"Enter the information to create your account"} />
                <Inputbox placeholder={"John"} label={"First Name"}/>
                <Inputbox placeholder={"Doe"} label={"Last Name"}/>
                <Inputbox placeholder={"abcd@gmail.com"} label={"Email"}/>
                <Inputbox placeholder={"12345678"} label={"Password"}/>
                <div className="pt-4">
                    <Button label={"Sign up"}/>
                </div>
                <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}/>
                </div>
               
            </div>

        </div>
    )
}