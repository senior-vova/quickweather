import React, {FC} from "react";
import {Field, reduxForm} from "redux-form";
import {Form, Button} from "react-bootstrap";

const Input: FC = (props: any) => <Form.Control type={"text"} {...props} {...props.input} />;

const SearchForm: FC = (props: any) => <Form className={"mt-3 d-flex"} onSubmit={props.handleSubmit}>
    <Field
        name={"cityName"}
        type={"text"}
        placeholder={"City Name"}
        component={Input}
        className={"text-primary"}
    />
    <Button className={"ml-1 "} type={"submit"}>GO</Button>
</Form>;

export default reduxForm({form: 'search'})(SearchForm);