import React from 'react'
import { Icon } from 'react-icons-kit'
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right'
import { ic_business_center } from 'react-icons-kit/md/ic_business_center'
import { ic_list } from 'react-icons-kit/md/ic_list'
import { ic_near_me } from 'react-icons-kit/md/ic_near_me'

export const Hero = () => {
    return (
        <div className='main-box'>
            <div className='background'>
                <div className='job-text'>JOB LIST VIEW</div>
                <br />
                <div className='nav-text'>
                    <span>HOME</span>
                    <span><Icon icon={ic_keyboard_arrow_right} size={18} /></span>
                    <span>JOBS</span>
                    <span><Icon icon={ic_keyboard_arrow_right} size={18} /></span>
                    <span style={{ color: '#fff' }}>JOBS LISTING</span>
                </div>
            </div>
            <div className='form-box'>
                <form className='form-group form'>
                    <div className="input-group">
                        <div className="input-group-addon">
                            <Icon icon={ic_business_center} size={18} />
                        </div>
                        <input className="form-control form-input" type="text"
                            placeholder="Job keywords..." />
                    </div><br />
                    <div className="input-group">
                        <div className="input-group-addon">
                            <Icon icon={ic_list} size={18} />
                        </div>
                        <input className="form-control form-input" type="text"
                            placeholder="Categories..." />
                    </div><br />
                    <div className="input-group">
                        <div className="input-group-addon">
                            <Icon icon={ic_near_me} size={18} />
                        </div>
                        <input className="form-control form-input" type="text"
                            placeholder="Location" />
                    </div><br />
                    <button type="submit" className='btn btn-primary btn-md mybtn'>Submit</button>
                </form>
            </div>
        </div>
    )
}
