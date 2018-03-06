import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { durationApproximation } from '../utils'

class Status extends Component {
  render() {
    return (
      <tr className={this.props.status}>
        <td><Link to={'/details/' + this.props.id}>{this.props.id}</Link></td>
        <td>{this.props.status}</td>
        <td>{this.props.transtype}</td>
        <td title={this.props.created}>{this.props.queueDuration ? durationApproximation(this.props.queueDuration) : 'N/A'}</td>
        <td title={this.props.processing}>{this.props.processDuration ? durationApproximation(this.props.processDuration) : 'N/A'}</td>
      </tr>
    )
  }
}

export default Status
