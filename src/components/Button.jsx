function Button(props) {
    return (
        <button
            onClick={props.onClick}
            className="bg-slate-400 text-white p-2 rounded-md">
            {props.children}
        </button>
    );
}

export default Button;