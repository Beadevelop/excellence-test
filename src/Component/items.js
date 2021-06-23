import '../App.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Col } from 'reactstrap';
import { useState } from 'react';

const Items = (props) => {
    const [isDeleted, setIsDeleted] = useState(false);
    const deleteListItem = () => {
        setIsDeleted(true);

    }

    return (
        <div className=" text-left p-2 row mt-2">
            <Col className="row" sm="12">
                <Col sm="10">
                    <li key={props.key}>
                        <span className={isDeleted ? "cutIt" : ''}>
                            {props.text}
                        </span>
                    </li>
                </Col>
                <Col sm="2">
                    <IconButton aria-label="delete" size="small" onClick={deleteListItem}>
                        <DeleteIcon />
                    </IconButton></Col>
            </Col>
        </div>
    )

}

export default Items;