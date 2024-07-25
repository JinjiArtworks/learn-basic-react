
interface Props {
    children: string
    color?: 'primary' | 'secondary' | 'danger' | 'success' | 'info' // '?' marks is optional . Using | to declare that button not only one color
    onClick: () => void // void mostly used for action
}

const Button = ({ children, color, onClick }: Props) => {
    return (
        <button className={'btn btn-' + color} onClick={onClick}>{children}</button>
    )
}

export default Button