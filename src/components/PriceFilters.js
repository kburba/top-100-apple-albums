import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import selectedAlbums from "../selectors/albums";
import getPriceFilters from "../selectors/priceFilters";
import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

class PriceFilters extends Component {
  render() {
    const { filters, handleSelect } = this.props;
    const priceFiltersList = Object.keys(filters).map(key => {
      return (
        <ListItem key={key} style={{ paddingTop: "0", paddingBottom: "0" }}>
          <Checkbox
            value={key}
            onClick={e => handleSelect("price", e)}
            style={{ padding: "5px" }}
          />
          <ListItemText>
            {key} ({filters[key].length})
          </ListItemText>
        </ListItem>
      );
    });
    return (
      <List dense disablePadding>
        {priceFiltersList}
      </List>
    );
  }
}

PriceFilters.propTypes = {
  filters: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  filters: getPriceFilters(selectedAlbums(state.albums, state.filters))
});

export default connect(mapStateToProps)(PriceFilters);
