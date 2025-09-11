import {
  IconExternal,
  IconFolder,
  IconGitHub,
  IconLinkedin,
  IconLoader,
  IconLogo,
  IconMedium,
} from '@components/icons';
import PropTypes from 'prop-types';
import React from 'react';

const Icon = ({ name }) => {
  switch (name) {
    case 'External':
      return <IconExternal />;
    case 'Folder':
      return <IconFolder />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Medium':
      return <IconMedium />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Loader':
      return <IconLoader />;
    case 'Logo':
      return <IconLogo />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
