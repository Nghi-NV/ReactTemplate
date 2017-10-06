import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import styles from './SwitchStyles.scss';

class Switch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: this.props.value || 'on'
        }
    }

    handleClick() {
        this.setState({
            status: this.state.status == 'on' ? 'off' : 'on'
        })
        
        let { onClick } = this.props;
        if(onClick) {
            onClick(this.state.status == 'on' ? 'off' : 'on')
        }
    }

    render() {
        let { status } = this.state;
        let {
            className,
            style,
            disabled,
            onClick
        } = this.props;

        return (
            <img 
                src={status == 'on' ? require('./imgs/switch/switch_on.png') : require('./imgs/switch/switch_off.png')}
                className={[
                    styles.switch,
                    disabled ? styles.disabled : '',
                    className
                ].join(' ')}
                style={style}
                onClick={disabled ? () => {} : this.handleClick.bind(this)}
            />
        );
    }
}

Switch.defaultProps = {
    value: 'on',
    disabled: false
}

Switch.propTypes = {
    className: PropTypes.string,
    value: PropTypes.oneOf(['on', 'off']),
    style: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}

export default Switch;