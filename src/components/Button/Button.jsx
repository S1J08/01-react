import classes from "./Button.module.css";

export default function Button({ children, isActive, click, ...props}) {
    return (
        <button
            {...props}
            onClick={click}
            className={isActive ? `${classes.button} ${classes.active}` : classes.button}
        >
            {children}
        </button>
    );
}
