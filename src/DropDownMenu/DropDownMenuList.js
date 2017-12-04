import React from "react";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import "./style.css";

const style = {
  generic: {
    color: "purple",
    fontFamily: "Verdana"
  }
};

export default class DropDownMenuList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 2 };
  }
  handleChange = (event, index, value) => this.setState({ value });
  render() {
    return (
      <DropDownMenu
        value={this.state.value}
        onChange={this.handleChange}
        menuItemStyle={style.generic}
        selectedMenuItemStyle={style.generic}
      >
        <MenuItem
          value={1}
          label="Existential Angst"
          primaryText="Existential Angst"
        />
        <MenuItem value={2} label="iOS Updates" primaryText="iOS Updates" />
        <MenuItem value={3} label="Donald Drumpf" primaryText="Donald Drumpf" />
        <MenuItem
          value={4}
          label="Cutting the Queue"
          primaryText="Cutting the Queue"
        />
      </DropDownMenu>
    );
  }
}
