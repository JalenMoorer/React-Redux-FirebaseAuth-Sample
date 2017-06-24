import React from 'react'

const Info = (props) => {
  return (
    <div className="row">
      <div className="col-md-6 col-xs-6 col-md-offset-3 col-xs-offset-3">
        <ul className="list-group list-inline text-center">
          <li>
            <a style={{
              color: "#9b9b9b"
            }} href="http://jalenscript.com/about/">About |</a>
          </li>
          <li>
            <a style={{
              color: "#9b9b9b"
            }} href="https://linkedin.com/in/jalenmoorer">Author |</a>
          </li>
          <li>
            <a style={{
              color: "#9b9b9b"
            }} href="https://github.com/JalenMoorer">Github</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Info;
