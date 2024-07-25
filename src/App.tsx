// import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  // const items = ["New York", "Tokyo", "Manhattan", "London"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // }
  const [alert, setAlert] = useState(false) // alert is false, set alert is true.
  return (
    <>
      <div>
        {/* Mengirim properties items,heading,onselecteditem. */}
        {/* alert-dismissable */}
        {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}></ListGroup> */}

        {/* Explain Code : [alert], by default it will set into false, and i added onClose function so when user click X it will closed the alert (set it into false.)  */}
        {/* '&&' ini seperti -> ( alert ? alert : null ). Simplenya pake && aja di react */}
        {alert && <Alert onClose={() => setAlert(false)}>
          <span>Helloooo</span>
        </Alert>}
        {/* SetAlert(true) mean, when the button click, it will trigger the state into true. why true ? because it declared as true. */}
        <Button color="primary" onClick={() => setAlert(true)}>My Button</Button>
      </div >
    </>
  );
}
export default App;
