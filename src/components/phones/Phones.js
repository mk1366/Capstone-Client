import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'

class Phones extends Component {
  constructor (props) {
    super(props)

    this.state = {
      phones: []
    }
  }

  componentDidMount () {
    axios({
      url: `${apiUrl}/phones`,
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(res => this.setState({ phones: res.data.phones }))
      .catch(console.error)
  }

  render () {
    console.log(this.state.phones)

    const phones = this.state.phones.map(phone => (
      <Link to={`/phones/${phone._id}`} key={phone._id}>
        <button className="phones">{phone.company}: {phone.model}</button>
      </Link>
    ))

    return (
      <Fragment>
        <h1>Phones</h1>
        <Link to="/create-phone"> Create a Phone</Link>
        <div>
          {phones}
        </div>
      </Fragment>
    )
  }
}

export default Phones
