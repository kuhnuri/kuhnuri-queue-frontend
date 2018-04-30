import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { durationApproximation } from '../utils'

class Status extends Component {
  tableClass(status) {
    switch (status) {
      case 'process': return 'table-active'
      case 'done': return 'table-success'
      case 'error': return 'table-danger'
      default: return ''
    }
  }

  render() {
    return (
      <tr className={this.tableClass(this.props.status)}>
        <td><Link to={'/details/' + this.props.id}>{this.props.id.substring(0, 8)}</Link></td>
        <td>{this.props.status}</td>
        <td>{this.props.transtype.map(transtype => transtype.transtype).join(', ')}</td>
        <td title={this.props.created}>{this.props.queueDuration ? durationApproximation(this.props.queueDuration) : 'N/A'}</td>
        <td title={this.props.processing}>{this.props.processDuration ? durationApproximation(this.props.processDuration) : 'N/A'}</td>
      </tr>
    )
  }
}

export default Status
