import React, { Component } from 'react';

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
      <main className={`details ${this.state.loading ? 'loading' : ''}`}>
        <h1>Details</h1>
        <div className="form-group">
          <label>ID</label>
          <input readonly className="form-control" value={this.props.match.params.id} />
        </div>
        {/* <div className="form-group">
          <label>Status</label>
          <input readonly className="form-control" value={this.props.job.status} />
        </div> */}
        <div className="form-group">
          <label>Input</label>
          <input readonly className="form-control" value={this.props.job.input} />
        </div>
        <div className="form-group">
          <label>Output</label>
          <input readonly className="form-control" value={this.props.job.output} />
        </div>
        <div className="form-group">
          <label>Tasks</label>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Status</th>
                <th>Transtype</th>
                <th>Input</th>
                <th>Output</th>
                <th>Worker</th>
              </tr>
            </thead>
            <tbody>
              {this.props.job.transtype && this.props.job.transtype.map(task =>
                <tr className={this.tableClass(task.status)}>
                  <td>
                    {task.id}
                  </td>
                  <td>
                    {task.status}
                  </td>
                  <td>
                    {task.transtype}
                  </td>
                  <td>
                    {task.input}
                  </td>
                  <td>
                    {task.output}
                  </td>
                  <td>
                    {task.worker}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="form-group">
          <label>Filter</label>
          <input readonly className="form-control" value={this.props.job.filter || '-'} />
        </div>
        <div className="form-group">
          <label>Parameters</label>
          <table className="table">
            <thead>
              <tr>
                <th>force-unique</th>
                <td>false</td>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
        <div className="form-group">
          <label>Queue</label>
          <input readonly className="form-control" value={this.props.job.created} />
        </div>
        <div className="form-group">
          <label>Processing</label>
          <input readonly className="form-control" value={this.props.job.processing} />
        </div>
        <div className="form-group">
          <label>Finished</label>
          <input readonly className="form-control" value={this.props.job.finished} />
        </div>
      </main>
    );
  }
}

export default Details;
