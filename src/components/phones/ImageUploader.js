import React, { Fragment } from 'react'
import axios from 'axios'
import apiConfig from '../../apiConfig'
import { withRouter, Redirect } from 'react-router-dom'
const FormData = require('form-data')

class ImageUploader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      image: '',
      uploaded: false
    }
  }

  handleInput = (event) => {
    event.persist()
    this.setState({ image: event.target.value })
  }
  sendData = (event) => {
    event.preventDefault()
    const image = new FormData(event.target)
    console.log(image)
    axios({
      method: 'patch',
      url: `${apiConfig}/images/${this.props.match.params.id}`,
      data: image,
      headers: {
        Authorization: `Bearer ${this.props.user.token}`
      }
    })
      .then(res => {
        console.log(res)
        this.setState({ uploaded: true })
      })
  }

  render () {
    if (this.state.uploaded) {
      return <Redirect to={`/phones/${this.props.match.params.id}`}/>
    } else {
      return (
        <Fragment>
          <h1>Upload Image</h1>
          <form onSubmit={this.sendData}>
            <input value={this.state.image} type="file" encType='multipart/form-data' name='file' onChange={this.handleInput} required/>
            <button>upload Image</button>
          </form>
        </Fragment>)
    }
  }
}

export default withRouter(ImageUploader)
