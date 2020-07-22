import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

// Components
import MenuItem from "../menu-item/menu-item.component"

// Styles
import "./directory.styles.scss"

// Selectors
import { selectDirectorySections } from "../../redux/directory/directory.selectors"

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...othersSectionProps }) => (
        <MenuItem key={id} {...othersSectionProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
})

export default connect(mapStateToProps)(Directory)
