import { useState, useEffect, useCallback } from "react"
import { Alert, Spinner } from "react-bootstrap"

import { URL, TOKEN } from "../../data/auth"

import AddComment from "../AddComment/AddComment"
import CommentList from "../CommentList/CommentList"

const CommentArea = props => {
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchComments = useCallback(async () => {
    setIsLoading(true)
    const asin = props.book.asin
    const response = await fetch(URL + asin, {
      headers: {
        Authorization: "Bearer " + TOKEN,
      },
    })
    setComments(await response.json())
    setIsLoading(false)
  }, [props.book.asin])

  useEffect(() => {
    fetchComments()
  }, [fetchComments])

  return (
    <>
      <Alert className="text-center fs-4" variant="info">
        <p className="m-0">Reviews for: {props.book.title}</p>
      </Alert>
      {isLoading && <Spinner animation="border" variant="info" />}
      <CommentList comments={comments} />
      <AddComment bookAsin={props.book.asin} refresh={fetchComments} />
    </>
  )
}

export default CommentArea
