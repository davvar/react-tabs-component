import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tab from './Tab'

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      activeTab: this.props.children[1].props.label,
    }
  }

  onClickTabItem = tab => {
    this.setState({ activeTab: tab })
  }

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this

    return (
      <div className='tabs'>
        <ol className='tab-list'>
          {children.map(child => {
            const { label } = child.props
            console.dir(child)

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            )
          })}
        </ol>
        <div className='tab-content'>
          {children.map(child => {
            if (child.props.label !== activeTab) return undefined

            /**
             * example child
             *
             * ``tsx
             *
             * <div label='Gator'>
             *   See ya later, <em>Alligator</em>!
             * </div>
             *
             * ``
             *
             */
            return child.props.children
          })}
        </div>
      </div>
    )
  }
}

export default Tabs
