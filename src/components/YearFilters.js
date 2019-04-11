import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import selectedAlbums from "../selectors/albums";
import getYearFilters from "../selectors/yearFilters";
import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

class YearFilters extends Component {
  render() {
    const { filters, handleSelect } = this.props;
    const yearFiltersList = filters.map(years => {
      return (
        <ListItem
          key={years.key}
          style={{ paddingTop: "0", paddingBottom: "0" }}
        >
          <Checkbox
            value={years.key}
            onClick={e => handleSelect("year", e)}
            style={{ padding: "5px" }}
          />
          <ListItemText>
            {years.key} ({years.value.length})
          </ListItemText>
        </ListItem>
      );
    });
    return (
      <List dense disablePadding>
        {yearFiltersList}
      </List>
    );
  }
}

YearFilters.propTypes = {
  filters: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  filters: getYearFilters(selectedAlbums(state.albums, state.filters))
});

export default connect(mapStateToProps)(YearFilters);
