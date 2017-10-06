import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import styles from './styles.scss';

const Link = ({name, onClick}) => (
  <a
    href="#" 
    onClick={onClick} 
    className={styles.link}>
    {name}
  </a>
)

const Navigate = [
  {name: 'Main', path: '/'},
  {name: 'Home', path: 'home'},
  {name: 'About', path: 'about'},
  {name: 'Home Page', path: 'homepage'},
];

class Nav extends Component {
  onClick(name) {
    console.log(name);
    this.props.dispatch(push(name))
  }

  render() {
    return (
      <div className={styles.nav}>
        {
          Navigate.map((t, id) => (
            <Link
              key={id}
              name={t.name}
              onClick={() => this.onClick(t.path)}
            />
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(Nav);