import React, { Component } from 'react';
import BG from '../components/BG';

import './styles.scss';

class About extends Component {
  render() {
    return (
      <div>
        This is About component
        <div className="content blabla">
          Ngày xuân con én đưa thoi
          Thiều quang chín chục đã ngoài tám mươi
          Cỏ non xanh rợn chân trời
          Cành lê trắng điểm một vài bông hoa
          Thanh minh trong tiết tháng ba
          Lễ là tảo mộ hội là đạp thanh
          Gần xa nô nức yến anh
          Chị em sắm sửa bộ hành chơi xuân
          Dập dìu tài tử giai nhân
          Ngựa xe như nước áo quần như nêm
        </div>
        <div className="btn">
          Button
        </div>
      </div>
    );
  }
}

// const styles = {
//   btn: {
//     width: 350*2,
//     height: 36,
//     borderRadius: 8,
//     backgroundColor: 'skyblue',
//     marginTop: 12,
//     marginLeft: 24,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontFamily: 'roboto-light',
//     fontSize: '1em',
//     fontWeight: '100',
//   }
// }

export default About;
