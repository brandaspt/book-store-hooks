import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "../MyNav/MyNav"
import MyFooter from "../MyFooter/MyFooter"
import CategoriesTabs from "../CategoriesTabs/CategoriesTabs"
import Registration from "../Registration/Registration"
import Welcome from "../Welcome/Welcome"

import { Route } from "react-router-dom"

import fantasyBooks from "../../data/fantasy.json"
import historyBooks from "../../data/history.json"
import horrorBooks from "../../data/horror.json"
import romanceBooks from "../../data/romance.json"
import scifiBooks from "../../data/scifi.json"
import { useState } from "react"

const categoriesArr = ["Fantasy", "History", "Horror", "Romance", "Scifi"]
const books = [fantasyBooks, historyBooks, horrorBooks, romanceBooks, scifiBooks]

function App() {
  const [userName, setUserName] = useState("")
  const [userSurname, setUserSurname] = useState("")

  return (
    <div className="App">
      <MyNav />
      <main>
        <Route exact path="/" render={() => <CategoriesTabs categories={categoriesArr} allBooks={books} />} />
        <Route
          path="/register"
          render={browserProps => (
            <Registration
              {...browserProps}
              onNameChange={newName => setUserName(newName)}
              onSurnameChange={newSurname => setUserSurname(newSurname)}
            />
          )}
        />
        <Route path="/welcome" render={() => <Welcome userName={userName} userSurname={userSurname} />} />
      </main>
      <MyFooter />
    </div>
  )
}

export default App
