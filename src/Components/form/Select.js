export default function Select(props) {
    return <>
            <label className={props.labelClass} 
            htmlFor={props.htmlFor}>
                {props.label}
            </label>
            <div className={props.divClass}>
                <select className={props.selectClass} 
                type="text" 
                id={props.htmlFor} 
                name={props.name}
                defaultValue={props.defaultValue}
                required={props.required}>
                    {props.options.map((option) => {
                        return <option key={option.value} 
                        selected={props.selected} 
                        disabled={props.disabled} value={option.value}>
                                {option.label}
                            </option>
                    })}
                </select>

                <div className={props.validate}>
                    {props.validateMsg}
                </div>
            </div>
    </>
}