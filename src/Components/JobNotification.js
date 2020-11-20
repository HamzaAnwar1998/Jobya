import React from 'react'
import { Icon } from 'react-icons-kit'
import { bell } from 'react-icons-kit/feather/bell'

export const JobNotification = () => {
    return (
        <div className='notification-box'>
            <div className='notification-bell'>
                <div className='notification-icon'>
                    <Icon icon={bell} size={18} />
                    <span>1</span>
                </div>
                <div className='notification-text'>Your Job Notification</div>
            </div>
            <form autoComplete="off" className='subscribe-form'>
                <input type="text" className='subscribe-input' placeholder="Your email:" />
                <button type='submit' className='subscribe-btn'>Subscribe</button>
            </form>
        </div>
    )
}
