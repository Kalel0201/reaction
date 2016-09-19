import React, { Component, PropTypes } from "react";
import { i18next } from "/client/api";
import camelcase from "lodash/camelcase";

class Translation extends Component {
  render() {
    const i18nKey = this.props.i18nKey || camelcase(this.props.defaultValue);

    const translation = i18next.t(i18nKey, {
      defaultValue: this.props.defaultValue
    });

    return (
      <span>{translation}</span>
    );
  }
}

Translation.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  i18nKey: PropTypes.string.isRequired
};

export default Translation;