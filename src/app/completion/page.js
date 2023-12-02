import { CheckBadgeIcon } from "@heroicons/react/24/solid";

function Completion() {
    return ( 
        <div className="h-screen bg-gradient-to-r from-slate-600 to-black">
            <div className="conatiner mx-auto pt-40">
                <div className="flex flex-col">
                <div className="flex justify-center"> 
                    <CheckBadgeIcon className="h-16 w-16"></CheckBadgeIcon>
                    <p className="text-4xl translate-y-2">Payment Completed!</p>
                </div>
                <div className="flex justify-center">
                    <a href="/" className="underline text-center">Click here to continue shopping</a>
                </div>
                </div>
            </div>
        </div>
     );
}

export default Completion;