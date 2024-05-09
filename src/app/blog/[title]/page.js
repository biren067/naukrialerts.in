'use client'
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Link from 'next/link'
import '@/styles/jobpost.scss'


function page({params}) {
  const [jobInfo,setJobInfo] = useState()
  console.log("**** Received Title::",params.title)
  const url=`http://localhost:8000/api/getjobdetails/${params.title}`
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
    <div className='jobpost'>
      {/* {JSON.stringify(jobInfo)} */}
      {jobInfo && jobInfo.map((item, index) => (
        <div key={index} className=''>
          {item?.adv_no && (
             <div className='jobpost_element'>
                <div className='jobpost_element_label'>Advertisement No.:</div>
                <div className='jobpost_element_answer'>{item?.adv_no}</div>
            </div>
            )
          }
          <div className='jobpost_element'>
              <div className='jobpost_element_label'>Category:</div>
              <div className='jobpost_element_answer'>{item.category_name}</div>
          </div>

          <div className='jobpost_element'>
              <div className='jobpost_element_label'>Post Name:</div>
              <div className='jobpost_element_answer'> {item.post_name}</div>
          </div>

          <div className='jobpost_element'>
              <div className='jobpost_element_label'>Job Posted by:</div>
              <div className='jobpost_element_answer'> {item.state_ut}</div>
          </div>

          <div className='jobpost_element'>
              <div className='jobpost_element_label'>Descriptions:</div>
              <div className='jobpost_element_answer'>{item.short_desc}</div>
          </div>

          {item?.education && 
          (
              <div className='jobpost_element'>
                 <div className='jobpost_element_label'>Educations:</div>
                 <div className='jobpost_element_answer'>{item?.education}</div>
              </div>
          )}
          <div className='jobpost_element'>
              <div className='jobpost_element_label'>Application Fee Information:</div>
              <div className='jobpost_element_answer'>
                  {(item.others_fees && item.gen_fees)?(
                      <div className='jobpost_element_answer_box'>
                      {
                         <div className='jobpost_element_answer_box_inner'>
                             <div className='jobpost_element_answer_box_inner_label'>General Fees:</div>
                             <div className='jobpost_element_answer_box_inner_answer'>{item.gen_fees}</div>
                          </div>
                      
                      }
                      {item.others_fees && 
                         <div className='jobpost_element_answer_box_inner'>
                             <div className='jobpost_element_answer_box_inner_label'>Other Fees:</div>
                             <div className='jobpost_element_answer_box_inner_answer'>{item.others_fees}</div>
                          </div>
                      
                      }
                      {item.ph_fees && 
                         <div className='jobpost_element_answer_box_inner'>
                             <div className='jobpost_element_answer_box_inner_label'>PH Fees::</div>
                             <div className='jobpost_element_answer_box_inner_answer'>{item.ph_fees}</div>
                          </div>
                      
                      }
                    
                    </div>
                    ):(
                    <span>{item?.common_fees}</span>
                    )}
                  </div>
          </div>


          

          {item.total_vacancy && (
            
            <div className='jobpost_element'>
              <div className='jobpost_element_label'>Vacancy Information:</div>
              <div className='jobpost_element_answer'>{item.total_vacancy}</div>
            </div>
            )
          }

          {item.general_vacancy && 
                      <div className='jobpost_element'>
                        <div className='jobpost_element_label'>Vacancies as per Category: </div>
                        <div className='jobpost_element_answer'>
                          <div className='jobpost_element_answer_box'>
                              <div className='jobpost_element_answer_box_inner'>
                                <div className='jobpost_element_answer_box_inner_label'>General Vacancies:</div>
                                <div className='jobpost_element_answer_box_inner_answer'>{item.general_vacancy}</div>
                              </div>
                              <div className='jobpost_element_answer_box_inner'>
                                <div className='jobpost_element_answer_box_inner_label'>OBC Vacancies:</div>
                                <div className='jobpost_element_answer_box_inner_answer'>{item.obc_vacancy}</div>
                              </div>
                              <div className='jobpost_element_answer_box_inner'>
                                <div className='jobpost_element_answer_box_inner_label'>SC Vacancies:</div>
                                <div className='jobpost_element_answer_box_inner_answer'>{item.sc_vacancy}</div>
                              </div>
                              <div className='jobpost_element_answer_box_inner'>
                                <div className='jobpost_element_answer_box_inner_label'>ST Vacancies:</div>
                                <div className='jobpost_element_answer_box_inner_answer'>{item.st_vacancy}</div>
                              </div>
                          </div>
                          
                        </div>
                      </div>}     


          
         
          {/* <div className="">
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
           </div> */}

          {/* Application Fee End  */}
          
          {/* Vacancy Details start */}
          {/* {item.total_vacancy && (
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
          )} */}
          {/* Vacancy Details End */}

          {/* Important dates start */}
          <div className='jobpost_dates_heading'>Important Dates</div>
          <div className='jobpost_element'>
                 <div className='jobpost_element_label'>Applicaiton Starts Date:</div>
                 <div className='jobpost_element_answer'>{item?.app_begin_date}</div>
          </div>
          {/* <div className=''>Applicaiton Ends Date:</div><div>{item.app_last_date}</div> */}
          <div className='jobpost_element'>
                 <div className='jobpost_element_label'>Applicaiton Ends Date:</div>
                 <div className='jobpost_element_answer'>{item?.app_last_date}</div>
          </div>

          {item.app_last_fees_date && (
          <div className='jobpost_element'>
                 <div className='jobpost_element_label'>Applicaiton Last Fees Date:</div>
                 <div className='jobpost_element_answer'>{item?.app_last_fees_date}</div>
          </div>
          )}

          {item.prelim_exam_date? 
            (<span>
                <div className='jobpost_element'>
                      <div className='jobpost_element_label'>Prelims Exam Date:</div>
                      <div className='jobpost_element_answer'>{item?.prelim_exam_date}</div>
                </div>
                

                {item.main_exam_date && (
                <div className='jobpost_element'>
                      <div className='jobpost_element_label'>Main Exam Date:</div>
                      <div className='jobpost_element_answer'>{item?.main_exam_date}</div>
                </div>
                )}

                {item.interview_exam_date && (
                <div className='jobpost_element'>
                      <div className='jobpost_element_label'>Interview Exam Date:</div>
                      <div className='jobpost_element_answer'>{item?.interview_exam_date}</div>
                </div>
                )}
            </span>)
          :
          (<span>
              {item.result_exam_date && (
              <div className='jobpost_element'>
                    <div className='jobpost_element_label'>Result Exam Date:</div>
                    <div className='jobpost_element_answer'>{item?.result_exam_date}</div>
              </div>
              )}
          </span>
        )}


      <div className='jobpost_dates_heading'>Important Links</div>
       {item?.apply_online && 
          <div className='jobpost_element'>
              <div className='jobpost_element_label'>Apply online Now:</div>
              {item.apply_online.startsWith("http") ? (
                
                  <Link className='jobpost_element_answer' href={`${item.apply_online}`} alt='Not Available'>Apply Online</Link>
                
              ) : (
                <div className='jobpost_element_answer'>Not Available</div>
              )}
            </div>
        }

        {item?.official_website && 
          <div className='jobpost_element'>
              <div className='jobpost_element_label'>Officail Websites:</div>
              {item.official_website.startsWith("http") ? (
                
                  <Link className='jobpost_element_answer' href={`${item.official_website}`} alt='Not Available'>visit {item.category_name}</Link>
                
              ) : (
                <div className='jobpost_element_answer'>Not Available</div>
              )}
            </div>
        }

        {item?.app_notifications && 
          <div className='jobpost_element'>
              <div className='jobpost_element_label'>Job Notifications:</div>
              {item.app_notifications.startsWith("http") ? (
                
                  <Link className='jobpost_element_answer' href={`${item.app_notifications}`} alt='Not Available'>visit pdf documents</Link>
                
              ) : (
                <div className='jobpost_element_answer'>Not Available</div>
              )}
            </div>
        }       



      <div className='jobpost_dates_heading'>Others Details</div>
      {item.age_info && 
      (<div className='jobpost_element'>
            <div className='jobpost_element_label'>Age Info:</div>
            <div className='jobpost_element_answer'>{item?.age_info}</div>
      </div>
      )}
      {item.max_age && 
      (<div className='jobpost_element'>
            <div className='jobpost_element_label'>Maximum Age:</div>
            <div className='jobpost_element_answer'>{item?.max_age}</div>
      </div>
      )}
      {item.min_age && 
      (<div className='jobpost_element'>
            <div className='jobpost_element_label'>Minimum Age:</div>
            <div className='jobpost_element_answer'>{item?.min_age}</div>
      </div>
      )}
      {item.relaxation && 
      (<div className='jobpost_element'>
            <div className='jobpost_element_label'>relaxation Age:</div>
            <div className='jobpost_element_answer'>{item?.relaxation}</div>
      </div>
      )}

      {/* {item.age_info && <span><div className=''>Age</div><div>{item.age_info}</div></span>} */}
      {/* {item?.max_age && <span><div className=''>Maximum Age</div><div>{item.max_age}</div></span>}
      {item.min_age && <span><div className=''>Mimimum Age</div><div>{item.min_age}</div></span>}
      {item.relaxation && <span><div className=''>Age</div><div>{item.relaxation}</div></span>} */}

      {item.medical_std && (
      <div className='jobpost_element'>
            <div className='jobpost_element_label'>Medical Info:</div>
            <div className='jobpost_element_answer'>{item?.medical_std}</div>
      </div>
      )}

    {item.details_desc && (
      <div className='jobpost_element'>
            <div className='jobpost_element_label'>Miscellenous Info:</div>
            <div className='jobpost_element_answer'>{item?.details_desc}</div>
      </div>
      )}

      </div>
      ))}

      
    </div>
  )
}

export default page
