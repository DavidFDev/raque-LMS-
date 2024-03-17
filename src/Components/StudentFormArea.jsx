import React from 'react'

const StudentFormArea = () => {
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
                                        <input type="text" className="form-control" placeholder="Your name*"/>
                                        <span className="label-title"><i className="bx bx-user"></i></span>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your address*"/>
                                        <span className="label-title"><i className="bx bx-home"></i></span>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Your email*"/>
                                        <span className="label-title"><i className="bx bx-envelope"></i></span>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your phone*"/>
                                        <span className="label-title"><i className="bx bx-phone"></i></span>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <textarea cols="30" rows="5" className="form-control" placeholder="Write something here (Optional)"></textarea>
                                        <span className="label-title"><i className="bx bx-edit"></i></span>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <button type="submit" className="default-btn">
                                        <i className="bx bx-paper-plane icon-arrow before"></i>
                                        <span className="label">Send Message</span>
                                        <i className="bx bx-paper-plane icon-arrow after"></i>
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