import { useState, useEffect, useCallback } from "react"
import { Alert, Spinner } from "react-bootstrap"

import AddComment from "../AddComment/AddComment"
import CommentList from "../CommentList/CommentList"

const URL = "https://striveschool-api.herokuapp.com/api/comments/"
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlNTk2NGNlYWY0ODAwMTVjOTE5MzYiLCJpYXQiOjE2MjIwMzg4ODQsImV4cCI6MTYyMzI0ODQ4NH0.kcSw_K1mFlUoMMV0Ht3yenaWNHGapnpFfnPfWPee6cU"

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
