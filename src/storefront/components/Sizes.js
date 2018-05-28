import React from "react";
import { Query } from "react-apollo";

import { GET_SIZES } from "../../api/size";
import Select from "./Select";

const Sizes = props => (
  <Query query={GET_SIZES}>
    {({ loading, error, data }) => {
      if (loading) {
        return <span>Loading...</span>;
      }
      if (error) {
        return <span>Error!</span>;
      }

      return (
        <Select onChange={props.handleSelect}>
          {data.sizes.map(size => (
            <option key={size.id} value={`${size.id}-${size.quantity}`}>{`${
              size.name
            } - ${size.quantity}`}</option>
          ))}
        </Select>
      );
    }}
  </Query>
);

export default Sizes;
