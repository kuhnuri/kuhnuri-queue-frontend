import React, { Component } from 'react';
import Field from './Field'

class Details extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
  }
  componentDidMount() {
    this.props.loadJob(this.props.match.params.id, () => this.setState({ loading: false }))
    this.interval = setInterval(() => this.props.loadJob(this.props.match.params.id), 5000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

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
      <main className={`col-md-10 details ${this.state.loading ? 'loading' : ''}`}>
        <h1>Details</h1>
        {/* <Field label="ID" value={this.props.match.params.id} /> */}
        <Field label="Input" value={this.props.job.input} readonly={true} />
        <Field label="Output" value={this.props.job.output} readonly={true} />
        <div className="form-group">
          <label>Tasks</label>
          <table className="table table-bordered">
            <thead>
              <tr>
                {/* <th>ID</th> */}
                <th>Status</th>
                <th>Transtype</th>
                <th>Input</th>
                <th>Output</th>
                <th>Worker</th>
              </tr>
            </thead>
            <tbody>
              {this.props.job.transtype && this.props.job.transtype.map(task =>
                <tr className={this.tableClass(task.status)} id={task.id} key={task.id}>
                  {/* <td>
                    {task.id}
                  </td> */}
                  <td>
                    {task.status}
                  </td>
                  <td>
                    {task.transtype}
                  </td>
                  <td>
                    {task.input || '-'}
                  </td>
                  <td>
                    {task.output || '-'}
                  </td>
                  <td>
                    {task.worker || '-'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <Field label="Filter" value={this.props.job.filter || '-'} readonly={true} />
        <div className="form-group">
          <label className="col-form-label">Parameters</label>
          <table className="table">
            <tbody>
              <tr>
                <th>force-unique</th>
                <td>false</td>
              </tr>
            </tbody>
            <tbody>
            </tbody>
          </table>
        </div>
        <Field label="Queue" value={this.props.job.created} readonly={true} />
        <Field label="Processing" value={this.props.job.processing} readonly={true} />
        <Field label="Finished" value={this.props.job.finished} readonly={true} />
      </main>
    );
  }
}

export default Details;
