import { useState } from "react"
import { CardGroup, Container, Form, Row, Col } from "react-bootstrap"

import SingleBook from "../SingleBook/SingleBook"
import CommentArea from "../CommentArea/CommentArea"

const BookList = props => {
  const [filterQuery, setFilterQuery] = useState("")
  const [selectedBook, setSelectedBook] = useState(null)

  const updateSelectedBook = book => {
    setSelectedBook(book)
  }

  return (
    <Container fluid>
      <Row>
        <Col className="border-right text-center comments-section" xs={12} sm={6} md={4} lg={3}>
          {selectedBook ? <CommentArea book={selectedBook} /> : <p>Select a book to see reviews</p>}
        </Col>
        <Col className="books-section" xs={12} sm={6} md={8} lg={9}>
          <Form className="d-flex justify-content-center mt-4">
            <Form.Group className="m-0">
              <Form.Control
                type="text"
                placeholder="Filter books"
                value={filterQuery}
                onChange={e => {
                  setFilterQuery(e.target.value.toLowerCase())
                }}
              />
            </Form.Group>
          </Form>
          <CardGroup className="my-4 justify-content-center">
            {filterQuery.length > 2
              ? props.booksArr
                  .filter(book => book.title.toLowerCase().includes(filterQuery))
                  .map(el => <SingleBook key={"asin_" + el.asin} book={el} getSelectedBook={updateSelectedBook} />)
              : props.booksArr.map(el => <SingleBook key={"asin_" + el.asin} book={el} getSelectedBook={updateSelectedBook} />)}
          </CardGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default BookList
