import React, { useState } from 'react'
import { FaRegUser, FaPhone } from "react-icons/fa6";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import { FaArrowRight } from 'react-icons/fa';
import $ from 'jquery'

const StudentFormArea = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState();
    const [randonText, setRandownText] = useState("");

  return (
    <div className='student-form-area ptb-100'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 mb-md-4 mb-lg-0 text-center text-lg-start">
                    <div class="students-feedback-form-content">
                        <h2>Learning together, we achieve great things.</h2>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12">
                    <div className="students-feedback-form">
                        <h3>Students Feedback Form</h3>

                        <form>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your name*" 
                                            onChange={(e) => setName(e.target.value)} 
                                            value={name}
                                            required={true}
                                        />
                                        <span className="label-title">
                                            <FaRegUser className='icon'/>
                                        </span>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your address*" onChange={(e) => setAddress(e.target.value)} 
                                            value={address}
                                            required={true}
                                        />
                                        <span className="label-title">
                                            <AiOutlineHome className='icon'/>    
                                        </span>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Your email*" onChange={(e) => setEmail(e.target.value)} 
                                            value={email}
                                            required={true}
                                        />
                                        <span className="label-title">
                                            <MdMailOutline className='icon'/>
                                        </span>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="tel" className="form-control" 
                                            placeholder="Your phone*" 
                                            onChange={(e) => setPhone(e.target.value)} value={phone} 
                                            // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                                            maxlength="11"
                                            pattern=".{10,10}"
                                            required
                                            autoComplete='true'
                                        />
                                        <span className="label-title">
                                            <FiPhone className='icon'/>
                                        </span>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <textarea cols="30" rows="5" className="form-control" placeholder="Write something here (Optional)" onChange={(e) => setRandownText(e.target.value)} value={randonText}></textarea>
                                        <span className="label-title">
                                            <FaRegEdit/>
                                        </span>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <button type="submit" className="default-btn d-flex gap-2 align-items-center flex-nowrap justify-content-center m-auto ">
                                        <VscFeedback className="start-icon"/>
                                        <span className="label">Send Message</span>
                                        <VscFeedback className="end-icon"/>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StudentFormArea