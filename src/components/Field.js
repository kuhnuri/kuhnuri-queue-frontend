import * as React from 'react'

export default (props) => (
  <div className="row form-group">
    <label className="col-md-2 col-form-label">{props.label}</label>
    <input className={`col-md-10 form-control ${props.readonly ? 'form-control-plaintext' : ''}`} value={props.value || '-'} />
  </div>
)