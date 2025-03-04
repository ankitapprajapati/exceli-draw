import {InputLabel} from "@repo/ui/InputLabel"

export function AuthPage( {isSignUp} : { isSignUp:boolean}){
    return (
        <div className="h-screen w-screen flex justify-center place-items-center">
            <div className="bg-gray-600 p-2 m-2 rounded ">
                {isSignUp && <InputLabel placeholder={"Ankit"} label={"First Name"} id={"firstName"}/>}
                {isSignUp && <InputLabel placeholder={"Prajapati"} label={"Last Name"} id={"lastName"}/>}
                <InputLabel placeholder={"ankit@gmail.com"} label={"Email"} id={"email"}/>
                <InputLabel placeholder={"*************"} label={"Password"} id={"password"}/>
                <button>{isSignUp ? "Signup":"Signin"}</button>
            </div>
        </div>
    )
}