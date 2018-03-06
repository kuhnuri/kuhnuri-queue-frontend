import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Create extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false }
  }
  render() {
    return (
      <main className={`create ${this.state.loading ? 'loading' : ''}`}>
        <h1>New Job</h1>
        <div className="form-group">
          <label htmlFor="input">Input</label>
          <input id="input" ref={input => { this.input = input }}
            defaultValue="file:/Users/jelovirt/Work/dita-ot/src/main/docsrc/userguide.ditamap"
            type="url" required className="form-control" placeholder="Input file URI" />
        </div>
        <div className="form-group">
          <label htmlFor="input">Input</label>
          <input id="input" ref={input => { this.input = input }}
            defaultValue="file:/Users/jelovirt/Work/dita-ot/src/main/docsrc/userguide.ditamap"
            type="url" required className="form-control" placeholder="Input file URI" />
        </div>
        <div className="form-group">
          <label htmlFor="transtype">Transtype</label>
          <select id="transtype" ref={transtype => { this.transtype = transtype }} required className="form-control">
            <option value="html5">HTML5</option>
            <option value="pdf">PDF</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="filter">Filter</label>
          <input id="filter" ref={filter => { this.filter = filter }} placeholder="Filter file URI"
            type="url" className="form-control" />
        </div>
        <div className="form-group">
          <label>Parameters</label>
          <table className="table">
            <tbody>
              <tr>
                <th>force-unique</th>
                <td>
                  <select className="form-control">
                    <option value="true">true</option>
                    <option value="false" defaultValue>false</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="form-group">
          <label htmlFor="output">Output</label>
          <input id="output" ref={output => { this.output = output }} defaultValue="file:/Volumes/tmp/platform/out/"
            placeholder="Output file URI" type="url" className="form-control" />
        </div>
        <p>
          <button type="button" className="btn btn-primary"
            disabled={this.state.loading}
            onClick={() => this.createNew()}>Create</button>
          {' '}
          <Link to="/" className="btn btn-light">Cancel</Link>
        </p>
      </main>
    );
  }
  createNew() {
    this.setState({ loading: true })
    this.props.create({
      input: this.input.value,
      transtype: this.transtype.value,
      filter: this.filter.value,
      output: this.output.value,
      params: {}
    })
  }
}

export default Create;
