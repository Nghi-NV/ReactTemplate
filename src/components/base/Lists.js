import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import styles from './ListStyles.scss';

class Lists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data || [],
        }
    }

    handleClick(e) {
        let { onClick } = this.props;
        if(onClick) {
            onClick(e)
        }
    }

    render() {
        let { data } = this.state;
        let {
            classRow,
            onClick
        } = this.props;

        return (
            <div className={styles.container}>
                {
                    data.map((t, id) => {
                        return (
                            <div
                             className={[styles.row, classRow].join(' ')} 
                             onClick={() => this.handleClick(t)}
                             key={id}>
                                {t.text}
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

Lists.defaultProps = {
    data: [
        {
            id: 1,
            text: 'Apple',
        },
        {
            id: 2,
            text: 'SONY'
        },
        {
            id: 3,
            text: 'HP'
        },
        {
            id: 4,
            text: 'DEL'
        },
        {
            id: 5,
            text: 'XIAOMI'
        }
    ]
}

Lists.propTypes = {
    data: PropTypes.array,
    classRow: PropTypes.string,
    onClick: PropTypes.func,
}

export default Lists;