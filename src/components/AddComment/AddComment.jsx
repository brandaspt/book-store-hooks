import { useState } from "react"
import { Alert, Form, Button, Spinner } from "react-bootstrap"
import { URL, TOKEN } from "../../data/auth"

const AddComment = props => {
  const [newComment, setNewComment] = useState({
    comment: "",
    rate: 1,
    elementId: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleInput = e => {
    setNewComment({ ...newComment, [e.target.id]: e.target.value })
    console.log(e.currentTarget.id)
  }

  const submitComment = async e => {
    e.preventDefault()
    const payload = { ...newComment, elementId: props.bookAsin }
    setIsLoading(true)
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + TOKEN,
        },
        body: JSON.stringify(payload),
      })
      console.log(response)
      const data = await response.json()
      setIsLoading(false)
      props.refresh()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Alert className="text-center mt-4" variant="warning">
        Add a review
      </Alert>
      <Form onSubmit={submitComment}>
        <Form.Group className="mb-3">
          <Form.Label>Comment</Form.Label>
          <Form.Control id="comment" as="textarea" rows={3} value={newComment.comment} onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Rating:</Form.Label>
          <Form.Control id="rate" type="number" min={1} max={5} value={newComment.rate} onChange={handleInput} />
        </Form.Group>
        <div className="d-flex justify-content-start align-items-center">
          <Button className="mx-auto" variant="primary" type="submit">
            Submit
          </Button>
          {isLoading && <Spinner animation="border" variant="info" />}
        </div>
      </Form>
    </>
  )
}

export default AddComment
