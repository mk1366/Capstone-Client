import React from 'react'
import { Redirect, withRouter, Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'

class Phone extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      phone: null,
      deleted: false
    }
  }

  componentDidMount () {
    axios({
      method: 'GET',
      url: `${apiUrl}/phones/${this.props.match.params.id}`,
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(responseData => this.setState({ phone: responseData.data.phone }))
      .catch(console.error)
  }

  destroy = () => {
    axios({
      url: `${apiUrl}/phones/${this.props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(() => this.setState({ deleted: true }))
      .catch(console.error)
  }

  render () {
    const { phone, deleted } = this.state

    if (!phone) {
      return <p>Loading...</p>
    }

    if (deleted) {
      return <Redirect to={
        { pathname: '/phones', state: { msg: 'Phone succesfully deleted!' } }
      } />
    }

    return (
      <React.Fragment>
        <ul>
          <li>Company: {this.state.phone.company}</li>
          <li>Model: {this.state.phone.model}</li>
          <li>Description: {this.state.phone.description}</li>
          <li>Price: {this.state.phone.price}</li>
          <button onClick={this.destroy}>Delete Phone</button>
          <li><Link to={`/update-phone/${this.state.phone._id}`}> Update a Phone</Link>
          </li>
        </ul>
      </React.Fragment>
    )
  }
}

export default withRouter(Phone)
