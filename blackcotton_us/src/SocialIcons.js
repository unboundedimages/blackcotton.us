import React from 'react';

class SocialIcon extends React.Component {
    render() {
        return (
            <div className='SI'>
                <div className='Social_Icons' id='IG'>
                    <a href='https://www.instagram.com/blackcotton.us/' className='Instagram_Icon'>
                        @blackcotton.us
                    </a>
                </div>
                <div className='Social_Icons' id='FB'>
                    <a href='https://www.facebook.com/blackcottondecor/' className='Facebook_icon'>
                       @blackcottondecor
                    </a>
                </div>
            </div>
        )
    }     
}
export default SocialIcon;