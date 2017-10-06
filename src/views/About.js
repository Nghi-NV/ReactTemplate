import React, { Component } from 'react';
import { connect } from 'react-redux';
import BG from '../components/BG';
import { push } from 'react-router-redux';

import Scroll from 'react-scroll';

import Button from '../components/base/Button';
import Checkbox from '../components/base/Checkbox';
import Lists from '../components/base/Lists';
import Switch from '../components/base/Switch';

import styles from './styles.scss';

var Link       = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;


class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      height: props.height
    }

    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }

  scrollToTop() {
    scroll.scrollToTop();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  onClick(e) {
    console.log('click me', e)
  }

  handleClick(e) {
    console.log('handleClick', e)
  }

  handleScroll(e) {
    // console.log('scroll', e.target)
  }

  render() {
    console.log('height', this.state.height)
    return (
      <div className={styles.container}>
        <Switch
          onClick={this.onClick.bind(this)}
          
        />
        <li> <a className={styles.element} onClick={() => scroll.scrollToBottom()}>Scroll To Bottom</a></li>
        <Link activeClass="active" className={styles.element} to="test5" spy={true} smooth={true} duration={500} >Test 1</Link>
        <br/>
        <div className={styles.bao}>
        <div 
          onScroll={this.handleScroll.bind(this)}
          className={styles.scrolls}>
        
        <Element name="test1" className={styles.element} >
          test 1<br/>
          Ngày xuân con én đưa thoi<br/>
          Thiều quang chín chục đã ngoài tám mươi<br/>
          Cỏ non xanh rợn chân trời<br/>
          Cành lê trắng điểm một vài bông hoa<br/>
          Thanh minh trong tiết tháng ba<br/>
          Lễ là tảo mộ hội là đạp Thanh<br/>
          Gần xa nô nức yến anh<br/>
          Chị em sắm sửa bộ hành chơi xuân<br/>
          Dập dìu tài tử giai nhân<br/>
          Ngựa xe như nước áo quần như nêm<br/>
        </Element><br/>

        <Element name="test2" className={styles.element}>
           2<br/>
           Ngày xuân con én đưa thoi<br/>
           Thiều quang chín chục đã ngoài tám mươi<br/>
           Cỏ non xanh rợn chân trời<br/>
           Cành lê trắng điểm một vài bông hoa<br/>
           Thanh minh trong tiết tháng ba<br/>
           Lễ là tảo mộ hội là đạp Thanh<br/>
           Gần xa nô nức yến anh<br/>
           Chị em sắm sửa bộ hành chơi xuân<br/>
           Dập dìu tài tử giai nhân<br/>
           Ngựa xe như nước áo quần như nêm<br/>
        </Element><br/>

        <Element name="test3" className={styles.element}>
          test 3<br/>
          Ngày xuân con én đưa thoi<br/>
          Thiều quang chín chục đã ngoài tám mươi<br/>
          Cỏ non xanh rợn chân trời<br/>
          Cành lê trắng điểm một vài bông hoa<br/>
          Thanh minh trong tiết tháng ba<br/>
          Lễ là tảo mộ hội là đạp Thanh<br/>
          Gần xa nô nức yến anh<br/>
          Chị em sắm sửa bộ hành chơi xuân<br/>
          Dập dìu tài tử giai nhân<br/>
          Ngựa xe như nước áo quần như nêm<br/>
        </Element><br/>

        <Element name="test4" className={styles.element}>
          test 4<br/>
          Ngày xuân con én đưa thoi<br/>
          Thiều quang chín chục đã ngoài tám mươi<br/>
          Cỏ non xanh rợn chân trời<br/>
          Cành lê trắng điểm một vài bông hoa<br/>
          Thanh minh trong tiết tháng ba<br/>
          Lễ là tảo mộ hội là đạp Thanh<br/>
          Gần xa nô nức yến anh<br/>
          Chị em sắm sửa bộ hành chơi xuân<br/>
          Dập dìu tài tử giai nhân<br/>
          Ngựa xe như nước áo quần như nêm<br/>
        </Element><br/>

        <Element name="test5" className={styles.element}>
          test 5<br/>
          Ngày xuân con én đưa thoi<br/>
          Thiều quang chín chục đã ngoài tám mươi<br/>
          Cỏ non xanh rợn chân trời<br/>
          Cành lê trắng điểm một vài bông hoa<br/>
          Thanh minh trong tiết tháng ba<br/>
          Lễ là tảo mộ hội là đạp Thanh<br/>
          Gần xa nô nức yến anh<br/>
          Chị em sắm sửa bộ hành chơi xuân<br/>
          Dập dìu tài tử giai nhân<br/>
          Ngựa xe như nước áo quần như nêm<br/>
        </Element>
        </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect()(About);
