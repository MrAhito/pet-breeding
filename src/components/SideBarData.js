import React from 'react'
import * as ioIcons from 'react-icons/io'
import * as aiIcons from 'react-icons/ai'
import * as bsIcons from 'react-icons/bs'

export const SideBarData = [
    {
        title: 'Home',
        path: '/dashboard',
        icon: <aiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Post',
        path: '/post',
        icon: <bsIcons.BsFilePost />,
        cName: 'nav-text'
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <aiIcons.AiFillMessage />,
        cName: 'nav-text'
    },
    {
        title: 'Team',
        path: '/team',
        icon: <ioIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <ioIcons.IoIosPaper />,
        cName: 'nav-text'
    }
]