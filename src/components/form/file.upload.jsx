// https://bulma.io/documentation/form/file/
import React from "react";
import PropTypes from "prop-types";
import { mapClasses } from "../util";

// TODO: Full implementation is pending
const FileUpload = props => {
  let classes = mapClasses(props);
  return (
    <div class="file">
      <label class="file-label">
        <input class="file-input" type="file" name={props.name} />
        <span class="file-cta">
          <span class="file-icon">
            <i class="fas fa-upload" />
          </span>
          <span class="file-label">{props.label}</span>
        </span>
      </label>
    </div>
  );
};

FileUpload.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string.required
};

export default FileUpload;
