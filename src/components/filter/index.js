import React from "react";
import styles from "./styles.module.css";

function getSortOrderValue(sortOrder) {
  return sortOrder.replace(" ", "").toLowerCase();
}

function getPropertiesDisplayText(count) {
  if (count > 1 || count === 0) {
    return "properties";
  }
  return "property";
}

const DefaultState = {
  priceFrom: "",
  postcode: "",
  sortOrder: "",
  sortOrders: ["Highest First", "Lowest First"],
};

class Filter extends React.Component {
  state = Object.assign({}, DefaultState);

  handleChange = (prop, value) => {
    this.setState({
      [prop]: value,
    });
  };

  render() {
    const { priceFrom, postcode, sortOrder, sortOrders } = this.state;
    const { postcodes, count, updateFilter } = this.props;

    return (
      <aside>
        <div className={styles.filterContainer}>
          <h2 data-cy="property-count">
            {`${count} private ${getPropertiesDisplayText(count)} for sale`}
          </h2>
          <form
            onChange={() => setTimeout(() => updateFilter(this.state), 0)}
            noValidate
          >
            <p className={styles.filterHeader}>
              Refine your results
              <button
                data-cy="clear-button"
                type="button"
                className={styles.clearButton}
                onClick={() => {
                  this.setState(Object.assign({}, DefaultState));
                  updateFilter({});
                }}
              >
                Clear
              </button>
            </p>
            <div className={styles.filterOptions}>
              <div className={styles.filterOption}>
                <label htmlFor="price-from" className={styles.filterLabel}>
                  Price from
                </label>
                <input
                  min="0"
                  max="10000000"
                  type="number"
                  id="price-from"
                  placeholder="£1,000,000"
                  value={priceFrom}
                  className={styles.filterInput}
                  onChange={(event) =>
                    this.handleChange("priceFrom", Number(event.target.value))
                  }
                />
              </div>
              <div className={styles.filterOption}>
                <label htmlFor="postcode" className={styles.filterLabel}>
                  Postcode
                </label>
                <select
                  id="postcode"
                  value={postcode}
                  className={styles.filterSelect}
                  onChange={(event) =>
                    this.handleChange("postcode", event.target.value)
                  }
                >
                  <option value="">Choose...</option>
                  {postcodes.map((pc, idx) => (
                    <option key={idx} value={pc.toLowerCase()}>
                      {pc}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.filterOption}>
                <label htmlFor="sortorder" className={styles.filterLabel}>
                  Sort Order
                </label>
                <select
                  id="sortorder"
                  value={sortOrder}
                  className={styles.filterSelect}
                  onChange={(event) =>
                    this.handleChange("sortOrder", event.target.value)
                  }
                >
                  <option value="">Choose...</option>
                  {sortOrders.map((order, idx) => (
                    <option key={idx} value={getSortOrderValue(order)}>
                      {order}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </form>
        </div>
      </aside>
    );
  }
}

export default Filter;
