import React, { PropTypes, Component } from 'react'

class TwoSections extends Component {
  render () {
    let i = 0, el, P = this.props
    let type = P.type || 'rows'
    let styles = [{}, {}]
    
    if (P.index == 0 || P.index == 1) {
      if (type == 'rows') {
        styles[P.size.index] = {
          width: P.size
        }
      } else {
        styles[P.size.index] = {
          height: P.size
        }
      }
    }
    
    let children = React.Children.map(
      this.props.children,
      function (child) {
        el = (
          <div style={ styles[i] }>
            { child }
          </div>
        )
        i++
        return el
      }
    )
    
    return (
      <div className="z-fill z-two-sections" type={ type }>
        { children }
      </div>
    )
  }
}

TwoSections.propTypes = {
  index: PropTypes.number,
  size: PropTypes.string,
  type: PropTypes.oneOf('columns', 'rows')
}

export default TwoSections
