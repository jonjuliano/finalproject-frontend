export default function TextArea(props) {
    return <>
        <label className={props.labelClass} htmlFor={props.htmlFor}>
            {props.label}
        </label>
        <div className={props.divClass}>
            <textarea className={props.textClass} 
            id={props.htmlFor} 
            name={props.name} 
            placeholder={props.placeholder}
            defaultValue={props.defaultValue}
            onChange={props.onChange}
            required={props.required}/>
            <div className={props.validate}>
                    {props.validateMsg}
            </div>
        </div>
    </>
}