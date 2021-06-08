import { useState } from "react"
import { ListGroup, Button } from "react-bootstrap"

const URL = "https://striveschool-api.herokuapp.com/api/comments/"
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlNTk2NGNlYWY0ODAwMTVjOTE5MzYiLCJpYXQiOjE2MjIwMzg4ODQsImV4cCI6MTYyMzI0ODQ4NH0.kcSw_K1mFlUoMMV0Ht3yenaWNHGapnpFfnPfWPee6cU"

const SingleComment = props => {
  const [isDeleted, setIsDeleted] = useState(false)

  const deleteComment = async commentId => {
    try {
      const response = await fetch(URL + commentId, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + TOKEN,
        },
      })
      console.log(response)
      const data = await response.json()
      console.log(data)

      setIsDeleted(true)
    } catch (error) {
      console.log(error)
    }
  }

  if (isDeleted) return null
  return (
    <ListGroup.Item className="px-0">
      <p className="m-0">
        <strong>Comment: </strong>
        {props.comment.comment}
      </p>
      <p>
        <strong>Rating: </strong>
        {props.comment.rate}
      </p>
      <p>
        <strong>Author: </strong>
        {props.comment.author}
      </p>
      <Button
        className="btn-sm"
        variant="danger"
        onClick={() => {
          deleteComment(props.comment._id)
        }}
      >
        Delete
      </Button>
    </ListGroup.Item>
  )
}

export default SingleComment
