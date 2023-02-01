import React from "react";

const Registration = () => {
    return <div className="flex">
        <div className="w-2/4 flex justify-end">
            <div className="mr-16 mt-56">
            <h3 className="font-nunito font-bold text-4xl text-heading"> Get started with easily register
            </h3>
            <p className="font-nunito font-regular text-xl text-secondary mt-3.5">Free register and you can enjoy it</p>
            
            <div className="relative mt-16">
            <input 
            type="email" 
            className="border border-solid border-secondary w-96 py-6 px-14 rounded-lg " />
            <p className="font-nunito font-semibold text-xl text-heading text-sm absolute top-[-10px] left-[34px] bg-white px-[18px]">
                Email Address
            </p>
            </div>

            <div className="relative mt-16">
            <input 
            type="text" 
            className="border border-solid border-secondary w-96 py-6 px-14 rounded-lg " />
            <p className="font-nunito font-semibold text-xl text-heading text-sm absolute top-[-10px] left-[34px] bg-white px-[18px]">
                Full Name
            </p>
            </div>

            <div className="relative mt-16">
            <input 
            type="password" 
            className="border border-solid border-secondary w-96 py-6 px-14 rounded-lg " />
            <p className="font-nunito font-semibold text-xl text-heading text-sm absolute top-[-10px] left-[34px] bg-white px-[18px]">
                Password
            </p>
            </div>

            <button className="w-96 bg-primary rounded-full font-nunito font-semibold text-xl text-white py-5 mt-16">Sing Up</button>
            <p className="text-center w-96 font-open font-regular text-sm text-heading mt-9">Already  have an account ? <span className="font-bold text-[#EA6C00]">Sign In</span></p>
            </div>
        </div>
        <div className="w-2/4">
            <img className="w-full h-screen object-cover " src="./images/registration.png" />
        </div>
    </div>

    
};

export default Registration;