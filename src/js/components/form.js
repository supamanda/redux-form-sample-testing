import React from "react"
import { connect } from 'react-redux'

import { Field, reduxForm } from 'redux-form'

class MyForm extends React.Component {

  updateForm(user) {
    this.props.initialize(user)
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.user != this.props.user) {
      this.updateForm(nextProps.user)
    }
  }

  componentDidMount() {
    this.updateForm(this.props.user)
  }

  renderUser() {
    if (this.props.user) {
      return <div>User: {this.props.user.firstname} {this.props.user.lastname}</div>
    } else {
      return <div>User: none</div>
    }
  }

  render() {
    const {handleSubmit} = this.props
    return (<div><div> {this.renderUser()}</div>
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field name="firstname" component="input" type="text" placeholder="First Name"/>
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field name="lastname" component="input" type="text" placeholder="Last Name"/>
        </div>
      </div>
      <button type="submit">Submit</button>
      </form>
    </div>)
  }
}

function mapStateToProps(store) {
  return {
    user: store.dataReducer.user
  }
}

// Decorate the form component
MyForm = reduxForm({
  form: 'myform' // a unique name for this form
})(MyForm);

const ConnectedForm = connect(mapStateToProps)(MyForm)
export default ConnectedForm
