export function Inputbox({label, placeholder, onChange}){
    return(
        <div className="text-sm text-bold font-medium text-left py-2">
           {label}
            <input onChange={onChange} placeholder={placeholder} className="w-full px-2 py-1 border-rounded border-slate-200"/>
        </div>
    )
}