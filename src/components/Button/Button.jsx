import './button.css'

function Button(props) {
    return (
        <div className="button-border">
            <button className="button">{ props.text }</button>
        </div>
    )
}

export default Button