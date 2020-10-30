
import React from 'react'
import './StoryReel.css'
import Story from './Story'

 const StoryReel = () => {
    return (
        <div className='storyReel'>
            <Story image='https://images.pexels.com/photos/1722072/pexels-photo-1722072.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
                    profileSrc='https://lh3.googleusercontent.com/ogw/ADGmqu-C7ZMGXItzH5Ym1xc_eXfy1Rf2q3kmnCjaiGKo=s32-c-mo'
                    title='Ashish ranjan'
            />
            <Story image='https://images.pexels.com/photos/2983141/pexels-photo-2983141.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
            profileSrc='https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-1/p320x320/12036479_1027077480672700_1429846567798597787_n.jpg?_nc_cat=102&_nc_sid=7206a8&_nc_ohc=GResowFwVD0AX-n6Osu&_nc_ht=scontent.fccu3-1.fna&tp=6&oh=1a247283058684006ff717efa15bc595&oe=5FB1E969'
            title='Ramraj Bishnoie'
            />
            <Story image='https://images.pexels.com/photos/4595295/pexels-photo-4595295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
            profileSrc='https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-1/p320x320/32760117_1373494729417356_151352066235695104_n.jpg?_nc_cat=106&_nc_sid=7206a8&_nc_ohc=hkRddkWRBx0AX_R_5kR&_nc_ht=scontent.fccu3-1.fna&tp=6&oh=a635a1403e98b711122e717e2da6974a&oe=5FB18D0F'
            title='Lucky Pareek'
            />
        </div>
    )
}
export default StoryReel
