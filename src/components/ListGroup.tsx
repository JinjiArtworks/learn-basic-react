import { useState } from "react";

// Interface Type Script. this is typescript style for declaring a props
interface Props {
    items: string[],
    heading: string,
    onSelectItem: (item: string) => void // used for like checkboxes or selected item dropdown
}
function ListGroup({ items, heading, onSelectItem }: Props) {

    // Event Handler
    // const handleClick = (e: MouseEvent) => console.log(e)
    // Hook Function
    const [selectedIndex, setSelectedIndex] = useState(-1)
    // const [name, setName] = useState('')
    return <>
        <h1>{heading}</h1>
        {items.length === 0 && <p>No item found </p>}
        <ul className="list-group">
            {items.map((item, index) =>
                <li key={item}
                    className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                    onClick={() => {
                        setSelectedIndex(index)
                        onSelectItem(item) // for selected item, example for check box or input option select
                    }}> {item}
                </li>
            )}
        </ul >
    </>
}
export default ListGroup;
