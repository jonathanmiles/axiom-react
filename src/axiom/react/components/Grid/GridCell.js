import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';
import { blacklist } from '../../utils/props';
import { breakpointClassName } from '../../utils/class-name';
import { breakpointIds } from '../../../sass';

export class GridCell extends Component {
  static propTypes = {
    children: { any: true },
    full: { oneOf: [true, ...breakpointIds] },
    fit: { oneOf: [true, ...breakpointIds] },
    shrink: { oneOf: [true, ...breakpointIds] },
    half: { oneOf: [true, ...breakpointIds] },
    third: { oneOf: [true, ...breakpointIds] },
    quarter: { oneOf: [true, ...breakpointIds] },
    fifth: { oneOf: [true, ...breakpointIds] },
    sixth: { oneOf: [true, ...breakpointIds] },
    vAlign: { oneOf: ['top', 'middle', 'bottom'] },
  };

  render() {
    const {
      className,
      children,
      full,
      fit,
      shrink,
      half,
      third,
      quarter,
      fifth,
      sixth,
      vAlign,
    } = this.props;

    const classes = classnames(className,
      'ax-grid__cell', {
        'ax-grid__cell--top': vAlign === 'top',
        'ax-grid__cell--middle': vAlign === 'middle',
        'ax-grid__cell--bottom': vAlign === 'bottom',
        'ax-grid__cell--full': full === true,
        'ax-grid__cell--fit': fit === true,
        'ax-grid__cell--shrink': shrink === true,
        'ax-grid__cell--half': half === true,
        'ax-grid__cell--third': third === true,
        'ax-grid__cell--quarter': quarter === true,
        'ax-grid__cell--fifth': fifth === true,
        'ax-grid__cell--sixth': sixth === true,
      },
      breakpointClassName(full,  ({id}) => `ax-grid__cell--full--${id}`),
      breakpointClassName(fit,  ({id}) => `ax-grid__cell--fit--${id}`),
      breakpointClassName(shrink,  ({id}) => `ax-grid__cell--shrink--${id}`),
      breakpointClassName(half,  ({id}) => `ax-grid__cell--half--${id}`),
      breakpointClassName(third,  ({id}) => `ax-grid__cell--third--${id}`),
      breakpointClassName(quarter,  ({id}) => `ax-grid__cell--quarter--${id}`),
      breakpointClassName(fifth,  ({id}) => `ax-grid__cell--fifth--${id}`),
      breakpointClassName(sixth,  ({id}) => `ax-grid__cell--sixth--${id}`),
    );

    return (
      <div {...this.props} className={classes}>
        {children}
      </div>
    );
  }
};

export default enhance(GridCell)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
