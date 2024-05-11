import StudentForm from './StudentForm';

const StudentFormArea = () => {

  return (
    <section className='student-form-area ptb-100'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 mb-md-4 mb-lg-0 text-center text-lg-start">
                    <div className="students-feedback-form-content">
                        <h2>Learning together, we achieve great things.</h2>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12">
                    <div className="students-feedback-form">
                        <h3>Students Feedback Form</h3>
                        
                        <StudentForm/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default StudentFormArea