// https://bulma.io/documentation/form/file/
import React from 'react';
import PropTypes from 'prop-types';

// TODO: Full implementation is pending
const FileUpload = (props) => {
	return (
		<div className="file">
			<label className="file-label">
				<input className="file-input" type="file" name={props.name} />
				<span className="file-cta">
					<span className="file-icon">
						<i className="fas fa-upload" />
					</span>
					<span className="file-label">{props.label}</span>
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
