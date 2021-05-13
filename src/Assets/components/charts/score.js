import React, { Component } from 'react'

import ReactStoreIndicator from 'react-score-indicator'

class Score extends Component {
  render () {
    return (
      <ReactStoreIndicator
        value={245}
        maxValue={500}
        width={110}
        lineWidth={7}
        lineGap={1}
      />
    )
  }
}

export default Score;