import React from 'react'
import { Field, Form } from 'react-final-form'
import { Row, Col } from 'react-bootstrap'

const Signup = () => {

    const userData = JSON.parse(localStorage.getItem("userInfo"))
    console.log(userData, "gdsgf")

    const handleSubmit = (values, form) => {
        if (userData) {
            let userDetail = userData.find(ele => ele.email === values.email && ele.phoneNumber === values.phoneNumber)
            if (userDetail) {
                alert("Phone number or email already exist")
            } else {
                localStorage.setItem('userInfo', JSON.stringify([...userData, values]))
            }
        } else {
            localStorage.setItem('userInfo', JSON.stringify([values]))
        }
        form.reset("")
    }

    const validate = (values) => {
        const error = {};
        if (!values.firstName) {
            error.firstName = "Required"
        }
        if (!values.lastName) {
            error.lastName = "Required"
        }
        if (!values.email) {
            error.email = "Required"
        }
        if (!values.phoneNumber) {
            error.phoneNumber = "Required"
        }
        if (!values.password) {
            error.password = "Required"
        } else if (values.password !== values.confirmPassword) {
            error.confirmPassword = "Must Match with Password"
        }
        return error
    }
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: ""
    }
    return (
        <>
            <div className='bg_signlogin container-fluid'>
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={3}>
                        <div className='' style={{ marginTop: "150px", boxShadow: "#fff 0px 1px 10px -3px, #fff 0px 1px 6px -2px", border: "1px solid", padding: "20px 30px", borderRadius: "5px" }}>
                            <Row>
                                <h2 style={{ color: "#fff" }}>SIGN UP</h2>
                                <h4 style={{ color: "#fff", marginBottom: "20px" }}> Create Your Account</h4>
                                <Form
                                    onSubmit={handleSubmit}
                                    initialValues={initialValues}
                                    validate={validate}
                                    render={({ handleSubmit, error, values }) => (
                                        <form onSubmit={handleSubmit}>
                                            <Col lg={12}>
                                                <Field name='firstName'>
                                                    {({ input, meta }) => (
                                                        <div className=' mb-3 '>
                                                            <input {...input} placeholder='First Name' type='text' className='signup-input' />
                                                            {meta.touched && meta.error && <span className='text-danger'>{meta.error}</span>}
                                                        </div>
                                                    )}
                                                </Field>
                                            </Col>
                                            <Col lg={12}>
                                                <Field name='lastName'>
                                                    {({ input, meta }) => (
                                                        <div className=' mb-3'>
                                                            <input {...input} placeholder='Last Name' type='text' className='signup-input' />
                                                            {meta.touched && meta.error && <span className='text-danger'>{meta.error}</span>}
                                                        </div>
                                                    )}
                                                </Field>
                                            </Col>
                                            <Col lg={12}>
                                                <Field name='email'>
                                                    {({ input, meta }) => (
                                                        <div className=' mb-3'>
                                                            <input {...input} placeholder='Email' type='text' className='signup-input' />
                                                            {meta.touched && meta.error && <span className='text-danger'>{meta.error}</span>}
                                                        </div>
                                                    )}
                                                </Field>
                                            </Col>
                                            <Col lg={12}>
                                                <Field name='phoneNumber'>
                                                    {({ input, meta }) => (
                                                        <div className=' mb-3'>
                                                            <input {...input} placeholder='Phone Number' type='number' className='signup-input' />
                                                            {meta.touched && meta.error && <span className='text-danger'>{meta.error}</span>}
                                                        </div>
                                                    )}
                                                </Field>
                                            </Col>
                                            <Col lg={12}>
                                                <Field name='password'>
                                                    {({ input, meta }) => (
                                                        <div className=' mb-3'>
                                                            <input {...input} placeholder='Password' type='password' className='signup-input' />
                                                            {meta.touched && meta.error && <span className='text-danger'>{meta.error}</span>}
                                                        </div>
                                                    )}
                                                </Field>
                                            </Col>
                                            <Col lg={12}>
                                                <Field name='confirmPassword'>
                                                    {({ input, meta }) => (
                                                        <div className='d-flex mb-4'>
                                                            <input {...input} placeholder='Confirm Password' type='password' className='signup-input' />
                                                            {meta.touched && meta.error && <span className='text-danger'>{meta.error}</span>}
                                                        </div>
                                                    )}
                                                </Field>
                                            </Col>
                                            <Col lg={12}>
                                                <button className="signup-button" type='submit'> SIGN UP</button>
                                            </Col>
                                        </form>
                                    )}
                                />
                            </Row>
                        </div>
                    </Col>
                    <Col lg={7}></Col>

                </Row >
            </div >
        </>
    )
}

export default Signup

