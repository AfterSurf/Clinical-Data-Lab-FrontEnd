import "./consumer.css";
import Modal from '../Modal';
 

function NewConsumer() {
    return(
        <div className="newConsumer">
            <h1>new Consumer</h1>
            <Modal type={"new"} data={""}/>
        </div>
    )
 }
export default () => ( <NewConsumer /> );