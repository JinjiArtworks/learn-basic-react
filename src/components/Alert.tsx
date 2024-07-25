import { ReactNode } from "react"

interface Props {
    children: ReactNode // use this so we can parse the html tag instead of just string type
    onClose: () => void
}
const Alert = ({ children, onClose }: Props) => {
    return (
        <div className="alert alert-primary alert-dismissible">{children}
            <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={onClose}></button>
        </div>
    )
}

export default Alert