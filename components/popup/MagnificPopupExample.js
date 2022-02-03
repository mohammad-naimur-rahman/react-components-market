import React from 'react'
import { Popup } from 'react-magnific-popup'

const MagnificPopupExample = () => {
  const dialogMoveConfig = {
    type: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  }

  return (
    <div>
      <Popup
        className="popup-with-move-anim"
        href="#small-dialog"
        config={dialogMoveConfig}
      >
        Open with fade-slide animation
      </Popup>
    </div>
  )
}

export default MagnificPopupExample
