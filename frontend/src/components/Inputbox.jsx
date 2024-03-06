export function Inputbox({label, placeholder}){
    return(
        <div className="text-sm text-bold font-medium text-left py-2">
           {label}
            <input placeholder={placeholder} className="w-full px-2 py-1 border-rounded border-slate-200"/>
        </div>
    )
}