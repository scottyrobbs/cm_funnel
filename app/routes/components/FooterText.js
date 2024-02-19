import React from 'react';
import PropTypes from 'prop-types';

const FooterText = (props) => (
	<React.Fragment>
		<a
			href="http://www.atsautomation.com"
			target="_blank"
			rel="noopener noreferrer"
			className="sidebar__link"
		>
			www.atsautomation.com
		</a>
	</React.Fragment>
)
FooterText.propTypes = {
    year: PropTypes.node,
	name: PropTypes.node,
	desc: PropTypes.node,
};
FooterText.defaultProps = {
    year: "2024",
    name: "Admin Theme",
    desc: "Bootstrap 4, React 16 (latest) & NPM"
};

export { FooterText };
