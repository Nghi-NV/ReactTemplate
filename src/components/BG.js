import React from 'react';

const BG = ({children}) => (
  <div style={styles.container}>
    {children}
  </div>
)

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    background: 'black', /* For browsers that do not support gradients */
    background: '-webkit-radial-gradient(circle, #033958, black 66%, black)', /* Safari */
    background: '-o-radial-gradient(circle, #033958, black 66%, black)', /* Opera 11.6 to 12.0 */
    background: '-moz-radial-gradient(circle, #033958, black 66%, black)', /* Firefox 3.6 to 15 */
    background: 'radial-gradient(circle, #033958, black 66%, black)', /* Standard syntax */
  }
}

export default BG;
