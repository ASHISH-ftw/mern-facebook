import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'


const Sidebar = () => {
return(
    <div className="sidebar">
        <SidebarRow  src="https://lh3.googleusercontent.com/ogw/ADGmqu-C7ZMGXItzH5Ym1xc_eXfy1Rf2q3kmnCjaiGKo=s32-c-mo" title="Ashish Ranjan"/>
        <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center'/>
    
        <SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>
        <SidebarRow Icon={PeopleIcon} title='Friends'/>
        <SidebarRow Icon={ChatIcon} title='Messenger'/>
        <SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
        <SidebarRow Icon={VideoLibraryIcon} title='VideoLibraryIcon'/>
        <SidebarRow Icon={ExpandMoreOutlinedIcon } title='More'/>
        

    </div>
);
};

export default Sidebar