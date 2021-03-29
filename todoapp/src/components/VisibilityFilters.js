import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import { VISIBILITY_FILTERS } from "../constants";

const VisibilityFilters = ({ activeFilter, setDispatcher }) => {
  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map((filterKey) => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              "filter",
              currentFilter === activeFilter && "filter--active"
            )}
            onClick={() => {
              setDispatcher(currentFilter);
            }}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { activeFilter: state.visibilityFilter };
};

export default connect(
  mapStateToProps, //1. функция которая возвращает объект с частью store и он будет доступен в виде пропсов (будет частью пропсов).
  { setDispatcher: setFilter } //2. методы actionCreators, которые опять же будут доступны в виде пропсов, но они уже будут обернуты структурой реакт-редакса и обудут связаны со store.dispatch и опять же будут доступны.
)(VisibilityFilters); // 3-4. сперва происходит вызов connect, который возвращает нам HOK и вызывает нам функцию, которую мы передаем в наш компонент VibilityFilter. И потом в нашем компоненте уже все начинает быть доступно в виде пропсов.

//Мы нигде не написали store.dispatch, store.getState, store.subscribe, потому что все это в реакт-редаксе, внутри connect.
