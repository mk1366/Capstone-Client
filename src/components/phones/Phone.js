import React from 'react'
import { Redirect, withRouter, Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import './PhoneStylesheet.scss'

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
        <div className="one-phone">
          <h1>Phone:</h1>
          <h4>Company: {this.state.phone.company}</h4>
          <h4>Model: {this.state.phone.model}</h4>
          <h4>Description: {this.state.phone.description}</h4>
          <h4>Price: {this.state.phone.price}</h4>
          <button onClick={this.destroy}>Delete Phone</button>
          <Link to={`/update-phone/${this.state.phone._id}`}>
            <button>
              Update a Phone
            </button>
          </Link>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(Phone)
