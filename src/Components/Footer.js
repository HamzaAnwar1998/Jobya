import React from 'react'
import { Icon } from 'react-icons-kit'
import { instagram } from 'react-icons-kit/feather/instagram'
import { twitter } from 'react-icons-kit/feather/twitter'
import { socialFacebook } from 'react-icons-kit/typicons/socialFacebook'
import { socialGoogleOutline } from 'react-icons-kit/ionicons/socialGoogleOutline'
import { chevronRight } from 'react-icons-kit/feather/chevronRight'

export const Footer = () => {
    return (
        <div className='footer-box'>
            <div className='boxes'>
                <div className='box-title'>JOBYA</div>
                <div className='box-text'>
                    At vero eos et accusamus et iusto odio dignissim os ducimus qui blanditiis praesentium
                </div>
                <div className='box-icon-box'>
                    <div className='footer-icon'>
                        <span><Icon icon={socialFacebook} size={11} /></span>
                    </div>
                    <div className='footer-icon'>
                        <Icon icon={twitter} size={11} />
                    </div>
                    <div className='footer-icon'>
                        <Icon icon={instagram} size={11} />
                    </div>
                    <div className='footer-icon'>
                        <Icon icon={socialGoogleOutline} size={11} />
                    </div>
                </div>
            </div>
            {/* company */}
            <div className='boxes'>
                <h6 className='company-title'>Company</h6>
                <div className='footer-links'>
                    <Icon icon={chevronRight} size={11} />
                    <span className='item'>About Us</span>
                </div>
                <div className='footer-links'>
                    <Icon icon={chevronRight} size={11} />
                    <span className='item'>Media & Press</span>
                </div>
                <div className='footer-links'>
                    <Icon icon={chevronRight} size={11} />
                    <span className='item'>Career</span>
                </div>
                <div className='footer-links'>
                    <Icon icon={chevronRight} size={11} />
                    <span className='item'>Blog</span>
                </div>
                <div className='footer-links'>
                    <Icon icon={chevronRight} size={11} />
                    <span className='item'>Pricing</span>
                </div>
                <div className='footer-links'>
                    <Icon icon={chevronRight} size={11} />
                    <span className='item'>Marketing</span>
                </div>
                <div className='footer-links'>
                    <Icon icon={chevronRight} size={11} />
                    <span className='item'>CEOs</span>
                </div>
                <div className='footer-links'>
                    <Icon icon={chevronRight} size={11} />
                    <span className='item'>Agencies</span>
                </div>
                <div className='footer-links'>
                    <Icon icon={chevronRight} size={11} />
                    <span className='item'>Our Apps</span>
                </div>
            </div>
            {/* resources */}
            <div className='boxes'>
                <h6 className='company-title'>Resources</h6>
                <div className='footer-links'>
                    <Icon icon={chevronRight} size={11} />
                    <span className='item'>Support</span>
                </div>
                <div className='footer-links'>
                    <Icon icon={chevronRight} size={11} />
                    <span className='item'>Privacy Policy</span>
                </div>
                <div className='footer-links'>
                    <Icon icon={chevronRight} size={11} />
                    <span className='item'>Terms</span>
                </div>
                <div className='footer-links'>
                    <Icon icon={chevronRight} size={11} />
                    <span className='item'>Accounting</span>
                </div>
                <div className='footer-links'>
                    <Icon icon={chevronRight} size={11} />
                    <span className='item'>Billing</span>
                </div>
                <div className='footer-links'>
                    <Icon icon={chevronRight} size={11} />
                    <span className='item'>F.A.Q.</span>
                </div>
            </div>
            {/* business hours */}
            <div className='boxes'>
                <h6 className='company-title'>Business Hours</h6>
                <div className='business-text'>Monday - Friday : 9:00 to 17:00</div>
                <div className='business-text'>Saturday : 10:00 to 15:00</div>
                <div className='business-text'>Sunday : Day Off (Holiday)</div>
            </div>
        </div>
    )
}
