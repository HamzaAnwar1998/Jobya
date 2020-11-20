import React from 'react'
import { Icon } from 'react-icons-kit'
import { ic_arrow_drop_down } from 'react-icons-kit/md/ic_arrow_drop_down'
import { chevronsRight } from 'react-icons-kit/feather/chevronsRight'
import { chevronsLeft } from 'react-icons-kit/feather/chevronsLeft'
import logo1 from '../images/logo1.PNG'
import logo2 from '../images/logo2.PNG'
import logo3 from '../images/logo3.PNG'
import logo4 from '../images/logo4.PNG'
import logo5 from '../images/logo5.PNG'
import logo6 from '../images/logo6.PNG'
import logo7 from '../images/logo7.PNG'

export const Job = () => {
    return (
        <>
            <h4 className='job-heading'>Available job for you</h4>
            <br />
            <div className='style-box'>
                <div className='style-div'>
                    <div className='line-style'></div>
                    <div className='diamond-style'></div>
                    <div className='line-style'></div>
                </div>
            </div>
            <br />
            <div className='mytext'>Post a job to tell us about your project. We'll quickly match you with the right freelancers.</div>
            <br />
            <div className='job-flexbox'>
                <div className='job-leftside'>
                    {/* date posted card */}
                    <div className='card'>
                        <div className='card-head'>
                            <h6>Date posted</h6>
                            <div>
                                <Icon icon={ic_arrow_drop_down} size={18} />
                            </div>
                        </div>
                        <div className='radio-box'>
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="defaultUnchecked">Last hour</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="defaultUnchecked">Last 24 hours</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="defaultUnchecked">Last 7 days</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="defaultUnchecked">Last 14 days</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="defaultUnchecked">Last 30 days</label>
                            </div>
                        </div>
                    </div>
                    {/* categories card */}
                    <div className='card'>
                        <div className='card-head'>
                            <h6>Categories</h6>
                            <div>
                                <Icon icon={ic_arrow_drop_down} size={18} />
                            </div>
                        </div>
                        <div className='radio-box'>
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="defaultUnchecked">Digital & Creative</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="defaultUnchecked">Accountance</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="defaultUnchecked">Banking</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="defaultUnchecked">IT Contractor</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="defaultUnchecked">Graduate</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="defaultUnchecked">Estate Agency</label>
                            </div>
                        </div>
                    </div>
                    {/* experience */}
                    <div className='card'>
                        <div className='card-head'>
                            <h6>Experience</h6>
                            <div>
                                <Icon icon={ic_arrow_drop_down} size={18} />
                            </div>
                        </div>
                        <div className='radio-box'>
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" />
                                <label className="custom-control-label" html="defaultUnchecked">1Year to 2Year</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="defaultUnchecked">2Year to 3Year</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="defaultUnchecked">3Year to 4Year</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="defaultUnchecked">IT Contractor</label>
                            </div>
                        </div>
                    </div>
                    {/* gender */}
                    <div className='card'>
                        <div className='card-head'>
                            <h6>Gender</h6>
                            <div>
                                <Icon icon={ic_arrow_drop_down} size={18} />
                            </div>
                        </div>
                        <div className='radio-box'>
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="defaultUnchecked">Male</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="defaultUnchecked">Female</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="defaultUnchecked">Others</label>
                            </div>
                        </div>
                    </div>
                </div>
                {/* rightside */}
                <div className='job-rightside'>
                    <div className='job-rightside-header'>
                        <h6>Showing results 0 - 20</h6>
                        <div>
                            <select className='form-control select'>
                                <option value="nothing">nothing</option>
                                <option value="web developer">web developer</option>
                                <option value="php developer">php developer</option>
                                <option value="web designer">web designer</option>
                            </select>
                        </div>
                    </div>
                    <br />
                    {/* card1 */}
                    <div className='job-rightside-cards'>
                        <div className='cards-leftside'>
                            <div className='logo'>
                                <img src={logo1} alt="" />
                            </div>
                            <div className='details-box'>
                                <div className='details-title'>
                                    Web Designer, Graphic Designer, UI/UX Designer & Art
                                </div>
                                <div className='details-company'>
                                    <i className="far fa-building"></i> Web Themes.pvt.Ltd
                                </div>
                                <div className='details-address-time'>
                                    <span>
                                        <i className="fas fa-map-marker-alt"></i>
                                        Confederate Drive Potsdam, NY 13676
                                    </span>
                                    <span>
                                        <i className="far fa-clock"></i>
                                        1 Minute ago
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='cards-rightside'>
                            <div className='btn-box'>
                                <button className='fulltime-btn'>Full-Time</button>
                                <button className='apply-btn'>Apply</button>
                            </div>
                        </div>
                    </div>
                    {/* card2 */}
                    <div className='job-rightside-cards'>
                        <div className='cards-leftside'>
                            <div className='logo'>
                                <img src={logo2} alt="" />
                            </div>
                            <div className='details-box'>
                                <div className='details-title'>
                                    Web Designer, Graphic Designer, UI/UX Designer & Art
                                </div>
                                <div className='details-company'>
                                    <i className="far fa-building"></i> Web Themes.pvt.Ltd
                                </div>
                                <div className='details-address-time'>
                                    <span>
                                        <i className="fas fa-map-marker-alt"></i>
                                        Confederate Drive Potsdam, NY 13676
                                    </span>
                                    <span>
                                        <i className="far fa-clock"></i>
                                        1 Minute ago
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='cards-rightside'>
                            <div className='btn-box'>
                                <button className='fulltime-btn'>Full-Time</button>
                                <button className='apply-btn'>Apply</button>
                            </div>
                        </div>
                    </div>
                    {/* card3 */}
                    <div className='job-rightside-cards'>
                        <div className='cards-leftside'>
                            <div className='logo'>
                                <img src={logo3} alt="" />
                            </div>
                            <div className='details-box'>
                                <div className='details-title'>
                                    Web Designer, Graphic Designer, UI/UX Designer & Art
                                </div>
                                <div className='details-company'>
                                    <i className="far fa-building"></i> Web Themes.pvt.Ltd
                                </div>
                                <div className='details-address-time'>
                                    <span>
                                        <i className="fas fa-map-marker-alt"></i>
                                        Confederate Drive Potsdam, NY 13676
                                    </span>
                                    <span>
                                        <i className="far fa-clock"></i>
                                        1 Minute ago
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='cards-rightside'>
                            <div className='btn-box'>
                                <button className='fulltime-btn'>Full-Time</button>
                                <button className='apply-btn'>Apply</button>
                            </div>
                        </div>
                    </div>
                    {/* card4 */}
                    <div className='job-rightside-cards'>
                        <div className='cards-leftside'>
                            <div className='logo'>
                                <img src={logo4} alt="" />
                            </div>
                            <div className='details-box'>
                                <div className='details-title'>
                                    Web Designer, Graphic Designer, UI/UX Designer & Art
                                </div>
                                <div className='details-company'>
                                    <i className="far fa-building"></i> Web Themes.pvt.Ltd
                                </div>
                                <div className='details-address-time'>
                                    <span>
                                        <i className="fas fa-map-marker-alt"></i>
                                        Confederate Drive Potsdam, NY 13676
                                    </span>
                                    <span>
                                        <i className="far fa-clock"></i>
                                        1 Minute ago
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='cards-rightside'>
                            <div className='btn-box'>
                                <button className='fulltime-btn'>Full-Time</button>
                                <button className='apply-btn'>Apply</button>
                            </div>
                        </div>
                    </div>
                    {/* card5 */}
                    <div className='job-rightside-cards'>
                        <div className='cards-leftside'>
                            <div className='logo'>
                                <img src={logo5} alt="" />
                            </div>
                            <div className='details-box'>
                                <div className='details-title'>
                                    Web Designer, Graphic Designer, UI/UX Designer & Art
                                </div>
                                <div className='details-company'>
                                    <i className="far fa-building"></i> Web Themes.pvt.Ltd
                                </div>
                                <div className='details-address-time'>
                                    <span>
                                        <i className="fas fa-map-marker-alt"></i>
                                        Confederate Drive Potsdam, NY 13676
                                    </span>
                                    <span>
                                        <i className="far fa-clock"></i>
                                        1 Minute ago
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='cards-rightside'>
                            <div className='btn-box'>
                                <button className='fulltime-btn'>Full-Time</button>
                                <button className='apply-btn'>Apply</button>
                            </div>
                        </div>
                    </div>
                    {/* card6 */}
                    <div className='job-rightside-cards'>
                        <div className='cards-leftside'>
                            <div className='logo'>
                                <img src={logo6} alt="" />
                            </div>
                            <div className='details-box'>
                                <div className='details-title'>
                                    Web Designer, Graphic Designer, UI/UX Designer & Art
                                </div>
                                <div className='details-company'>
                                    <i className="far fa-building"></i> Web Themes.pvt.Ltd
                                </div>
                                <div className='details-address-time'>
                                    <span>
                                        <i className="fas fa-map-marker-alt"></i>
                                        Confederate Drive Potsdam, NY 13676
                                    </span>
                                    <span>
                                        <i className="far fa-clock"></i>
                                        1 Minute ago
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='cards-rightside'>
                            <div className='btn-box'>
                                <button className='fulltime-btn'>Full-Time</button>
                                <button className='apply-btn'>Apply</button>
                            </div>
                        </div>
                    </div>
                    {/* card7 */}
                    <div className='job-rightside-cards last-card'>
                        <div className='cards-leftside'>
                            <div className='logo'>
                                <img src={logo7} alt="" />
                            </div>
                            <div className='details-box'>
                                <div className='details-title'>
                                    Web Designer, Graphic Designer, UI/UX Designer & Art
                                </div>
                                <div className='details-company'>
                                    <i className="far fa-building"></i> Web Themes.pvt.Ltd
                                </div>
                                <div className='details-address-time'>
                                    <span>
                                        <i className="fas fa-map-marker-alt"></i>
                                        Confederate Drive Potsdam, NY 13676
                                    </span>
                                    <span>
                                        <i className="far fa-clock"></i>
                                        1 Minute ago
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='cards-rightside'>
                            <div className='btn-box'>
                                <button className='fulltime-btn'>Full-Time</button>
                                <button className='apply-btn'>Apply</button>
                            </div>
                        </div>
                    </div>
                    {/* page no */}
                    <div className='pageno-box'>
                        <div className='circles'>
                            <Icon icon={chevronsLeft} size={14} />
                        </div>
                        <div className='circles one'>1</div>
                        <div className='circles'>2</div>
                        <div className='circles'>3</div>
                        <div className='circles'><Icon icon={chevronsRight} size={14} /></div>
                    </div>
                </div>
            </div>
        </>
    )
}
