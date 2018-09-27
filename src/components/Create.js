import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
    this.transtypes = {
      online: {
        label: 'Online',
        tasks: ['graphics', 'upload']
      },
      pdf: {
        label: 'PDF',
        tasks: ['pdf2']
      },
      html5: {
        label: 'HTML5',
        tasks: ['html5']
      }
    };
  }

  createNew() {
    this.setState({ loading: true });
    this.props.create({
      input: this.input.value,
      transtype: this.transtypes[this.transtype.value].tasks,
      // filter: this.filter.value,
      output: this.output.value,
      params: {}
    });
  }

  render() {
    return (
      <main className={`col-md-10 create ${this.state.loading ? 'loading' : ''}`}>
        <h1>New Job</h1>
        <div className="row form-group">
          <label className="col-md-2 col-form-label" htmlFor="input">
            Input
          </label>
          <input
            id="input"
            ref={input => {
              this.input = input;
            }}
            defaultValue="file:/opt/workspace/Downloads/dita-demo-content-collection/Thunderbird/en-US/maps/User_Guide.ditamap"
            type="url"
            required
            className="col-md-10 form-control"
            placeholder="Input file URI"
          />
        </div>
        <div className="row form-group">
          <label className="col-md-2 col-form-label" htmlFor="transtype">
            Transtype
          </label>
          <select
            id="transtype"
            ref={transtype => {
              this.transtype = transtype;
            }}
            required
            className="col-md-10 form-control"
          >
            {Object.keys(this.transtypes).map(key => (
              <option value={key} selected={key === 'html5'}>
                {this.transtypes[key].label}
              </option>
            ))}
          </select>
        </div>
        {/* <div className="row form-group">
          <label className="col-md-2 col-form-label" htmlFor="filter">Filter</label>
          <input id="filter" ref={filter => { this.filter = filter }} placeholder="Filter file URI"
            type="url" className="col-md-10 form-control" />
        </div> */}
        <div className="row form-group">
          <label className="col-md-2 col-form-label">Parameters</label>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>force-unique</th>
                <td>
                  <select className="col-md-10 form-control">
                    <option value="true">true</option>
                    <option value="false" defaultValue>
                      false
                    </option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row form-group">
          <label className="col-md-2 col-form-label" htmlFor="output">
            Output
          </label>
          <input
            id="output"
            ref={output => {
              this.output = output;
            }}
            defaultValue="file:/opt/workspace/Downloads/dita-demo-content-collection/Thunderbird/en-US/out/"
            placeholder="Output file URI"
            type="url"
            className="col-md-10 form-control"
          />
        </div>
        <p>
          <button
            type="button"
            className="btn btn-primary"
            disabled={this.state.loading}
            onClick={() => this.createNew()}
          >
            Create
          </button>{' '}
          <Link to="/" className="btn btn-light">
            Cancel
          </Link>
        </p>
      </main>
    );
  }
}

export default Create;
