import React, { Fragment, useState } from "react";
import axios from "axios";

const InputTodo = () => {

    const [description, setDescription] = useState();

    const changeValue = (e) => {
        setDescription(e.target.value);
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            //const body = description;
            //const t = JSON.stringify(body);
            const response = await axios.post("http://localhost:5000/signup",{
                description
            }).then(response => console.log(response));
            } catch(err){
                console.error(err.message);
            }};

    return (
        <Fragment>
            <h1 class="text-center mt-5">Input Todo</h1>
            <div className="container">
                <div class="row justify-content-center">
                    <form className="d-flex mt-5 col-4" onSubmit={onSubmitForm}>
                    <input type="text" className="form-control" value={description} onChange={changeValue} />
                    <button className="btn btn-success">Add</button>
                    </form>
                    </div>
            </div>
        </Fragment>
        
    )
}

export default InputTodo;