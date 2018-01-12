import React from 'react'
import Login from './Login'

class App extends React.Component {

  render() {
    return (

        <Login />

    )
  }
}

App.propTypes = {
  name: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  cat: 5
}
export default App
