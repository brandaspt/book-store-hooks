import { useEffect, useState } from "react"
import { Form, Button, Container } from "react-bootstrap"

import "./Registration.css"

const Registration = props => {
  const [formInput, setFormInput] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    passwordConfirm: "",
  })
  const [isPasswordValid, setIsPasswordValid] = useState(false)

  const onInputChange = (e, stateProp) => {
    setFormInput({ ...formInput, [stateProp]: e.currentTarget.value })
  }

  useEffect(() => {
    let foundDigit = false
    let foundLetter = false
    const passwordArr = formInput.password.split("")

    passwordArr.forEach(el => (isNaN(parseInt(el)) ? (foundLetter = true) : (foundDigit = true)))
    if (foundLetter && foundDigit && formInput.password.length >= 8) {
      setIsPasswordValid(true)
    } else {
      setIsPasswordValid(false)
    }
  }, [formInput.password])

  const submitForm = e => {
    e.preventDefault()
    if (
      formInput.name.length >= 2 &&
      formInput.surname.length >= 3 &&
      isPasswordValid &&
      formInput.password === formInput.passwordConfirm
    ) {
      props.onNameChange(formInput.name)
      props.onSurnameChange(formInput.surname)
      props.history.push("/welcome")
    }
  }

  return (
    <Container>
      <h1 className="text-center text-primary">Registration</h1>
      <Form className="registration-form" onSubmit={submitForm}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            required
            value={formInput.name}
            onChange={e => onInputChange(e, "name")}
          />
          <Form.Text className={formInput.name.length >= 2 ? "text-muted" : "text-danger"}>Minimum 2 characters</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Surname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your surname"
            required
            value={formInput.surname}
            onChange={e => onInputChange(e, "surname")}
          />
          <Form.Text className={formInput.surname.length >= 3 ? "text-muted" : "text-danger"}>Minimum 3 characters</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            required
            value={formInput.email}
            onChange={e => onInputChange(e, "email")}
          />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter a strong password"
            required
            value={formInput.password}
            onChange={e => onInputChange(e, "password")}
          />
          <Form.Text className={isPasswordValid ? "text-muted" : "text-danger"}>
            Must contain a digit, a letter and at least 8 characters
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            required
            value={formInput.passwordConfirm}
            onChange={e => onInputChange(e, "passwordConfirm")}
          />
          <Form.Text className={formInput.password === formInput.passwordConfirm ? "text-muted" : "text-danger"}>
            Must match password
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Registration
