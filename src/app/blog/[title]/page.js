'use client'
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Link from 'next/link'


function page({params}) {
  const [jobInfo,setJobInfo] = useState()
  console.log("**** Received Title::",params.title)
  const url=`http://localhost:8000/api/getjobinfo/${params.title}`
  console.log("URL::",url)
  useEffect(() => {
    axios.get(url)
      .then(response => {
        console.log('get executed successful', response);
        if (response.status === 200) {
          setJobInfo(response.data); // Update jobInfo with response data
        } else {
          console.log("************", response.data, "::::", response.data.message)
          setJobInfo(null); // Update jobInfo to null if status is not 200
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setJobInfo(null); // Update jobInfo to null in case of an error
      });
  }, [params.title]);
  return (
    <div>
      <h1>On the basis of title, call get Database and display info</h1>
      <h2> Title is ::: {params.title}</h2>
      {/* {JSON.stringify(jobInfo)} */}
      {jobInfo && jobInfo.map((item, index) => (
        <div key={index}>
          <div>Category: {item.category_name}</div>
          <div>Post Name: {item.post_name}</div>
          <div>Job Posted by: {item.state_ut}</div> 
          <div>Descriptions: {item.short_desc}</div>
          {item?.education && <span><div className=''>Educations</div><div>{item?.education}</div></span>}
          {/* Application Fee start */}
          <div className="">
            <div> Application Fee Information</div>
          {(item.others_fees && item.gen_fees)?(
            <div>
            {<div>General Fees:{item.gen_fees}</div>}
            {<div>Others Fees:{item.others_fees}</div>}        
            {item.ph_fees && <div>PH Fees:{item.ph_fees}</div>}
            </div>
            ):(
            <div>
            Application Fees : {item.gen_fees}
            </div>
           )}
           </div>
          {/* Application Fee End  */}
          
          {/* Vacancy Details start */}
          {item.total_vacancy && (
            <div>
                  <div>Vacancy Information:</div>
                  <div>
                    Total Vacancy: {item.total_vacancy}
                    {item.general_vacancy && 
                      <div>
                        Vacancies as per Category: 
                        <div>General Vacancies:{item.general_vacancy}</div>
                        <div>OBC Vacancies:{item.obc_vacancy}</div>
                        <div>SC Vacancies:{item.sc_vacancy}</div>
                        <div>ST Vacancies:{item.st_vacancy}</div>
                      </div>}
                  </div>
            </div>
          )}
          {/* Vacancy Details End */}

          {/* Important dates start */}
          <div className=''>
            <h2>Important Dates</h2>
            <div className=''>
              <div className=''>Applicaiton Starts Date:</div><div>{item.app_begin_date}</div>
              <div className=''>Applicaiton Ends Date:</div><div>{item.app_last_date}</div>
              {item.app_last_fees_date && <span><div className=''>Applicaiton Last Fees Date:</div><div>{item.app_last_date}</div></span> }
              {item?.prelim_exam_date?(
                <span>

                <div className=''>Prelims Exam Date:</div><div>{item.prelim_exam_date}</div>
                {item.main_exam_date && <span><div className=''>Main Exam Date:</div><div>{item.main_exam_date}</div></span>}
                {item.interview_exam_date && <span><div className=''>Interview Exam Date:</div><div>{item.interview_exam_date}</div></span>}
                </span>):(
                  <span><div className=''>Exam Date:</div><div>{item.exam_date}</div></span>
                )}
                {item.result_exam_date && <span><div className=''>Result Exam Date:</div><div>{item.result_exam_date}</div></span>}
            </div>
          </div>
          {/* Important dates end */}
          {/* Age info start */}
          {item.age_info && <span><div className=''>Age</div><div>{item.age_info}</div></span>}
          {item?.max_age && <span><div className=''>Maximum Age</div><div>{item.max_age}</div></span>}
          {item.min_age && <span><div className=''>Mimimum Age</div><div>{item.min_age}</div></span>}
          {item.relaxation && <span><div className=''>Age</div><div>{item.relaxation}</div></span>}
          {/* Age info End */}
          {/* Important Link */}
          <h2>Important Links</h2>
          {item?.apply_online && <span>
              <div className=''>Apply online Now:</div>
              {item.apply_online.startsWith("http") ? (
                <div>
                  <Link href={`${item.apply_online}`} alt='Not Available'>Apply Online</Link>
                </div>
              ) : (
                <div>Not Available</div>
              )}
            </span>}
            {item?.official_website && <span>
              <div className=''>Official Website</div>
              {item.official_website.startsWith("http") ? (
                <div>
                  <Link href={`${item.official_website}`} alt='Not Available'>visit {item.category_name}</Link>
                </div>
              ) : (
                <div>Not Available</div>
              )}
            </span>}
            {item?.app_notifications && <span>
              <div className=''>Job Notifications</div>
              {item.app_notifications.startsWith("http") ? (
                <div>
                  <Link href={`${item.app_notifications}`} alt='Not Available'>visit notifications</Link>
                </div>
              ) : (
                <div>Not Available</div>
              )}
            </span>}
          {/* Medical start */}
          {item.medical_std && <span><div className=''>Medical Info</div><div>{item.medical_std}</div></span>}
          {item.details_desc && <span><div className=''>Miscellenous Info</div><div>{item.details_desc}</div></span>}
          {/* Medical end */}
          </div>
      ))}

      
    </div>
  )
}

export default page
