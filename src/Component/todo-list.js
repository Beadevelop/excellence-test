import '../App.css';
import IconButton from '@material-ui/core/IconButton';
import { TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Col } from 'reactstrap';
import { useState } from 'react';
import Items from './items';

const Todolist = () => {
    const [item, addItem] = useState('');
    const [newItem, setNewItem] = useState([]);

    const addNewItem = e => {
        addItem(e.target.value);
    }

    const addListItem = () => {
        if (item != '') {
            setNewItem((displayValue) => {
                addItem('')
                return [...displayValue, item];
            })
        }
        else {
            alert("Can't add empy task")
        }

    }

    return (
        <div className="col-sm-12 mt-4">
            <Col md={{ span: 6, offset: 4 }}>
                <div className="card text-center" style={{ width: 400, height: 500, padding: 10 }}>
                    <h2>
                        ToDo List
                    </h2>
                    <br />
                    <div className="row mb-5">

                        <Col sm="8" style={{ maxHeight: 20 }}>
                            <TextField value={item} required id="standard-required" label="Enter new Task " onChange={addNewItem} />
                        </Col>
                        <Col sm="4" style={{ maxHeight: 20 }}>
                            <IconButton aria-label="delete" size="small" onClick={addListItem}>
                                <AddIcon color="primary" style={{ fontSize: 40 }} />
                            </IconButton>
                        </Col>

                    </div>
                    <div className="overflow-y" >
                        {newItem && newItem.map((val, index) => {
                            return <Items text={val} key={index} />
                        })}

                    </div>

                </div>
            </Col>
        </div >
    );
}

export default Todolist;