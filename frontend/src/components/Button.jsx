export function Button({label, handleClick}){
    return (
        <div>
            <button onClick={handleClick} type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 rounded-md pt-2 pb-2 text-bold font-medium me-2 mb-2 ">{label}</button>
        </div>
    )
}