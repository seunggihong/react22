import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <ol>
            <li>
              <a href="/read1">html</a>
            </li>
            <li>
              <a href="/read2">css</a>
            </li>
            <li>
              <a href="/read3">js</a>
            </li>
          </ol>
        </nav>
      </div>
    );
  }
}
