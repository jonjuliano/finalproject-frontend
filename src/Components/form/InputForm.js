
export default function Input(props){
    return <>
        <label className={props.labelClass} htmlFor={props.htmlFor}>{props.label}</label>
        <div className={props.divClass}>
            <input className={props.inputClass} type={props.type} id={props.htmlFor} name={props.name} onChange={props.onChange} placeholder={props.placeholder} defaultValue={props.defaultValue} required={props.required}/>
            <div className={props.validate}>
            {props.validateMsg}
            </div>
        </div>
        
    </>
}