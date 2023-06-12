import React, { useState } from "react";

const Registration = () => {
    let [email, setEmail] = useState("");
    let [fullname, setFullName] = useState("");
    let [password, setPassword] = useState("");

    let [emailerr, setEmailerr] = useState("");
    let [fullnameerr, setFullNameerr] = useState("");
    let [passworderr, setPassworderr] = useState("");


    // To handle onChange in input field and button
    let handleEmail = (e) => {
        setEmail(e.target.value);
    };

    let handleFullName = (e) => {
        setFullName(e.target.value);
    };

    let handlePassword = (e) => {
        setPassword(e.target.value);
    };

    let handleSubmit = () => {
        if (!email) {
            setEmailerr("Email is required")
        }

        if (!fullname) {
            setFullNameerr("Full Name is required")
        }

        if (!password) {
            setPassworderr("Password is required")
        }
    }

    
    return <div className="flex">
        <div className="w-2/4 flex justify-end">
            <div className="mr-16 mt-16">
            <h3 className="font-nunito font-bold text-4xl text-heading"> Get started with easily register
            </h3>
            <p className="font-nunito font-regular text-xl text-secondary mt-3.5">Free register and you can enjoy it</p>
            
            <div className="relative mt-16">
            <input 
            type="email" 
            className="border border-solid border-secondary w-96 py-6 px-14 rounded-lg" 
            onChange={handleEmail}
            />
            <p className="font-nunito font-semibold text-sm text-heading absolute top-[-10px] left-[34px] bg-white px-[18px]">
                Email Address
            </p>

            {emailerr && (
                <p className="font-nunito font-semibold text-xl bg-red-500 text-white w-96 rounded-sm mt-2.5 p-1.5">{emailerr}</p>
            )}

            </div>




            <div className="relative mt-16">
            <input 
            type="text" 
            className="border border-solid border-secondary w-96 py-6 px-14 rounded-lg " 
            onChange={handleFullName}
            />
            <p className="font-nunito font-semibold text-xl text-heading absolute top-[-10px] left-[34px] bg-white px-[18px]">
                Full Name
            </p>

            {fullnameerr && (
                <p className="font-nunito font-semibold text-xl bg-red-500 text-white w-96 rounded-sm mt-2.5 p-1.5">{fullnameerr}</p>
            )}
            </div>




            <div className="relative mt-16">
            <input 
            type="password" 
            className="border border-solid border-secondary w-96 py-6 px-14 rounded-lg " 
            onChange={handlePassword}
            />
            <p className="font-nunito font-semibold text-xl text-heading absolute top-[-10px] left-[34px] bg-white px-[18px]">
                Password
            </p>
            {passworderr && (
                <p className="font-nunito font-semibold text-xl bg-red-500 text-white w-96 rounded-sm mt-2.5 p-1.5">{passworderr}</p>
            )}
            </div>



            <button onClick={handleSubmit} className="w-96 bg-primary rounded-full font-nunito font-semibold text-xl text-white py-5 mt-16">Sing Up</button>
            <p className="text-center w-96 font-open font-regular text-sm text-heading mt-9">Already  have an account ? 
            <span className="font-bold text-[#EA6C00]">Sign In</span>
            </p>
            </div>
        </div>
        <div className="w-2/4">
            <img className="w-full h-screen object-cover " src="./images/registration.png" />
        </div>
    </div>

    
};

export default Registration;