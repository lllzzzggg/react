import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default connect = (WrappedComponent) => {
  class Connect extends Component {
    static contextTypes = {
      store: PropTypes.object
    }
    mapStateToProps = (state) => {
      return {
        themeColor: state.themeColor,
        themeName: state.themeName,
        fullName: `${state.firstName} ${state.lastName}`
      }
    }

    // TODO: 如何从 store 取数据？
    render () {
      const { store } = this.context
      let stateProps = mapStateToProps(store.getState())
      return <WrappedComponent {...stateProps} />
    }
  }

  return Connect
}