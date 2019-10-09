// https://bulma.io/documentation/layout/container/
import React from 'react';
import PropTypes from 'prop-types';
import BulmaHOC from '../bulma.hoc'
import { BackgroundColorProps } from '../props'

// A simple container to center your content horizontally
const Container = (props) => {
  return (
    <div
      className={`container ${props.classes} ${props.colorClass} ${props.fluid && 'is-fluid'} ${props.fullhd && 'is-fullhd'} ${props.widescreen &&
        'is-widescreen'}`}
    >
      {props.children}
    </div>
  );
};

Container.propTypes = {
  fluid: PropTypes.bool,
  fullhd: PropTypes.bool,
  widescreen: PropTypes.bool,
  backgroundColor: PropTypes.string,
  ...BackgroundColorProps
};

Container.uiProps = {
  width: {
    label: 'Container Width',
    type: PropTypes.oneOf,
    values: {
      fluid: {
        name: 'Fluid UI',
        description: 'This container is fluid: it will have a 32px gap on either side, on any viewport size.',
      },
      fullhd: {
        name: 'Full HD',
        description: 'This container is fullwidth until the fullhd breakpoint.',
      },
      widescreen: {
        name: 'Widescreen',
        description: 'The container is fullscreen until the widescreen breakpoint',
      },
    }
  },
  backgroundColor: {
    type: PropTypes.oneOf,
    label: 'Background Color',
    values: {
      backgroundPrimary: {
        name: 'Primary',
        description: 'Primary color',
      },
      backgroundDanger: {
        name: 'Danger',
        description: 'Danger color'
      }
    }
  }
};

let hoc = BulmaHOC(Container);
hoc.propTypes = { ...Container.propTypes }
hoc.uiProps = { ...Container.uiProps }
export default hoc