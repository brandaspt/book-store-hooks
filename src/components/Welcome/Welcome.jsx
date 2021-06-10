import { Component } from "react"
import { Jumbotron, Button } from "react-bootstrap"
import "./Welcome.css"

class Welcome extends Component {
  render() {
    return (
      <Jumbotron className="text-center rounded-0">
        <h1>Welcome to the family,</h1>
        <h3>
          {this.props.userName} {this.props.userSurname}
        </h3>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    )
  }
}

export default Welcome
