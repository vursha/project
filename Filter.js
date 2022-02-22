import { Form,Button } from "react-bootstrap"

const Filters=()=>{
    return(
        <div className="filters">
            <span className="title">Filter Employees</span>
            <span>
                <Form.Check
                inline
                label='Ascending'
                name="group1"
                type='radio'
                id={`inline-1`}/>
            </span>
            <span>
                <Form.Check
                inline
                label='Descending'
                name="group1"
                type='radio'
                id={`inline-2`}/>
            </span>
            <Button variant='light'>Clear Filter</Button>
        </div>
    )
}
export default Filters;