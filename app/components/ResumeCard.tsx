import React from 'react'
import { Link } from 'react-router'
import ScoreCircle from './ScoreCircle'

const ResumeCard = ({resume :{companyName, id, jobTitle, feedback}}: {resume:Resume}) => {
  return (
    <Link to={`/resume/${id}`} className="resume-card animate-in fade-in duration-1000 ">
    <div className="flex justify-around">
        <div className="flex flex-col gap-2">
        <h2 className="!text-black font-bold break-words">
            {companyName}
        </h2>
        <h3 className="text-lg break-words test-gray-500">
            {jobTitle} 
        </h3>
    </div>

    <div className="flex ">
    <ScoreCircle score={feedback.overallScore}/>
    </div>
    </div>
    </Link> 
  )
}

export default ResumeCard