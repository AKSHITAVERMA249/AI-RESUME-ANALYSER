import React, { type FormEvent } from 'react'
import Navbar from '~/components/Navbar'
import { useState } from 'react'
import FileUploader from '~/components/FileUploader';
const upload = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [statusText, setStatusText] = useState('');
    const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{

    }

  return (
   <main className="bg-[url('/images/bg-main.svg')] bg-cover flex flex-col justify-center">
    <Navbar />
    <div className="page-heading text-center ml-60 mr-60 py-16">
        <h1>Smart feedback for your Dream Job</h1>
        {isProcessing?(
            <>
            <h2>{statusText}</h2>
            <img src="/images/resume-scan.gif" alt="scanning" className="w-full mt-0" />
            </>
        ):(
            <>
            <h2>Drop your resume for an ATS score and improvement tips</h2>
            </>
        )}
        {!isProcessing && (
            <form id='upload-form' onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
                <div className="form-div">
                    <label htmlFor="company-name">Company Name</label>
                    <input type="text" name='company-name' placeholder='Company Name' id='company-name'/>
                </div>
                <div className="form-div">
                    <label htmlFor="job-title">Job Title</label>
                    <input type="text" name='job-title' placeholder='Job Title' id='job-title'/>
                </div>
                <div className="form-div">
                    <label htmlFor="job-Description">Job Description</label>
                    <textarea rows={5} name='job-Description' placeholder='Job Description' id='job-Description'/>
                </div>
                <div className="form-div">
                    <label htmlFor="upload-resume">Upload Resume</label>
                      <FileUploader/>
                </div>
                <button className="primary-button" type="submit">
                    Analyze Resume
                  
                </button>
            </form>

            
        )}
    </div>
<section className="main-section">
    </section>
    </main>
  )
}

export default upload