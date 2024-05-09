'use client'
import React,{useState, useRef, useMemo } from 'react'
import axios from 'axios'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import '@/styles/addpost.scss';
// import JoditEditor from 'jodit-react';
import {states_union_territories} from '@/data/staticdata';




function page() {
    const editor = useRef(null);
	// const [content, setContent] = useState('');

	// const config = useMemo(
	// 	{
	// 		readonly: false, // all options from https://xdsoft.net/jodit/docs/,
	// 		// placeholder: placeholder || 'Start typings...'
	// 	},
	// 	[placeholder]
	// );


    const [formData,setFormData] = useState({})
    const [advNoInfo,setAdvNoInfo] = useState('')
    const [startDate, setStartDate] = useState();
    const [appBeginDate, setAppBeginDate] = useState();
    const [appLastDate, setAppLastDate] = useState();
    const [appLastFeesDate, setAppLastFeesDate] = useState();
    const [appCorrectionLastDate, setAppCorrectionLastDate] = useState();
    const [appLastDateError, setAppLastDateError] = useState();
    const [examDate, setExamDate] = useState();
    const [admitCardDate, setAdmitCardDate] = useState();
    const [prelimExamDate, setPrelimExamDate] = useState();
    const [mainExamDate, setMainExamDate] = useState();
    const [interviewExamDate, setInterviewExamDate] = useState();
    const [resultExamDate, setResultExamDate] = useState();
    
    
    
    
    
    
    
    
    
    
    
    
    const handleSubmit= async (event)=>{
        event.preventDefault()
        const url='http://127.0.0.1:8000/api/post/'
        const formattedTitle = formData.post_name.replace(/[^\w\s-]/g, '');
        const finalTitle = formattedTitle.toLowerCase().replace(/\s+/g, '-');
        setFormData((prev)=>(
            {...prev,['link_post_name']:finalTitle}
        )
        )
        console.log("Sending from  FrontEnd::",formData)
        // try
        // {
        //     const response = await axios.post(url,formData)
        //     console.log('post successful')
        //     console.log(response.data)
        // }catch(error) {
        //     console.log("Data Not Posted")
        //     console.error(error)
        // }
        if(formData.app_last_date === undefined || formData.app_last_date === null || formData.app_last_date==="") {
            setAppLastDateError("Please update the Applicaiton Last Date")
        }
        axios.post(url, formData)
            .then(response => {
                console.log('Post successful');
                console.log(response.data); // Access response data
            })
            .catch(error => {
                console.error('Failed to post data:', error);
            });
        console.log('handleSubmit click')
    }
    const handleAdvNoBlur=(event) => {
        const value = event.target.value;
        console.log("1********************************",value)
        if (value===null || value===undefined || value===""){
            console.log("2********************************",value)
            setAdvNoInfo('Plase provide valid advertisement')
        }else{
            console.log("3********************************",value)
            const url=`http://127.0.0.1:8000/api/getadvno/${value}`
            console.log("URL::",url)
            axios.get(url)
            .then(response => {
                console.log('get executed successful',response.data,response.status);
                if (response.data.status === 200){
                    setAdvNoInfo("valid")
                }else{
                    console.log("************",response.data,"::::",response.data.message)
                    setAdvNoInfo(response.data.message)
                }
            })
            }
        }
    
    
        const handleChange=(event)=>{
            const name = event.target.name;
            let value = event.target.value;
            if (value===""){
                value = null;
            }
            setFormData((prev)=>(
                {...prev,[name]:value}
            )
            )
        }
        const handleDate =(date,name)=>{ 
            console.log("*********ON Select Date is::", date,name);
            if (name==="post_date"){
                console.log("*********Within post_date",name)
                  setStartDate(date);
            } else if (name==='app_begin_date'){
                console.log("*********Within app_begin_date",name)
                setAppBeginDate(date)
            } else if (name==='app_last_date'){
                console.log("*********Within app_last_date",name)
                setAppLastDate(date)
            } else if (name==='app_last_fees_date'){
                console.log("*********Within app_last_fees_date",name)
                setAppLastFeesDate(date)
            } else if (name==='app_correction_last_date'){
                console.log("*********Within app_correction_last_date",name)
                setAppCorrectionLastDate(date)
            } else if (name==='exam_date'){
                console.log("*********Within exam_date",name)
                setExamDate(date)
            } else if (name==='admit_card_date'){
                console.log("*********Within admit_card_date",name)
                setAdmitCardDate(date)
            } else if (name==='prelim_exam_date'){
                console.log("*********Within prelim_exam_date",name)
                setPrelimExamDate(date)
            } else if (name==='main_exam_date'){
                console.log("*********Within main_exam_date",name)
                setMainExamDate(date)
            } else if (name==='interview_exam_date'){
                console.log("*********Within interview_exam_date",name)
                setInterviewExamDate(date)
            } else if (name==='result_exam_date'){
                console.log("*********Within result_exam_date",name)
                setResultExamDate(date)
            }

            


            
            
            
            


            
            
            

            console.log("*********ON Select Date is::", date);
            const formattedDate = date ? 
            date.toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '/') :
            
            null;
            console.log("*********Date::", formattedDate);
            setFormData(prev => ({
                    ...prev,
                    [name]: formattedDate 
            }));
        }; 

  return (
    <div className='addpost'>
      <form className='addpost_form' onSubmit={handleSubmit}>
      <h1>Fill up the job details</h1>
      <div className='addpost_form_filedcontrol'>
            <label>Advt No.::</label>
            <input type="text" name="adv_no" onChange={handleChange} onBlur={handleAdvNoBlur} required />
            <div className='addpost_form_filedcontrol_info'>{advNoInfo}</div>
        </div>
        
        <div className='addpost_form_filedcontrol'>
            <label>Post Name::</label>
            <input type="text" name="post_name" onChange={handleChange} required />
        </div>
        <div className='addpost_form_filedcontrol'>
            <label>Category Name::</label>
            <input type="text" name="category_name" onChange={handleChange} required />
        </div>
        <div className='addpost_form_filedcontrol'>
            <label>State/UT::</label>
            <select name="state_ut" id="state_ut" required onChange={handleChange}>
            <option value={'central'} key={-1}>{'Central'}</option>
                {states_union_territories.map((item,index)=>(
                    <option value={item} key={index}>{item}</option>
                ))}
            </select>
        </div>
        <div className='addpost_form_filedcontrol'>
            <label>SubCategory Name::</label>
            <input type="text" name="sub_category_name" onChange={handleChange} />
        </div>
        <div className='addpost_form_filedcontrol'>
            <label>Post Date::</label>
            <DatePicker name="post_date" selected={startDate} onChange={(date)=>handleDate(date,"post_date")} 
                dateFormat='dd/MM/yyyy'
                showYearDropdown
                scrollableMonthYearDropdown
            />
            
        </div>
        <div className='addpost_form_filedcontrol'>
            <label>Total Vacancy::</label>
            <input type="text" name="total_vacancy" onChange={handleChange} />
        </div>
        <div className='addpost_form_filedcontrol'>
            <label>Short Description::</label>
            <textarea  name="short_desc" id="" cols="30" rows="3" placeholder='short description of the job..' onChange={handleChange}/>
        </div>
       
         <div className='addpost_form_filedcontrol'>
            <div>Application Fees::</div>
            <div>
            <label>General Fees::</label><input type="text" name="gen_fees" onChange={handleChange} />
            </div>
            <div>
            <label>PH Fees::</label><input type="text" name="ph_fees"  onChange={handleChange}/>
            </div>
            <div>
            <label>Other Fees::</label><input type="text" name="other_fees" onChange={handleChange}/>
            </div>
        </div>
        
        <div className='addpost_form_filedcontrol'>
            <div>Important Date</div>
            <ul className='list-style-none'>
                <li><label>Applicaiton Begins::</label>
                <DatePicker name="app_begin_date" selected={appBeginDate} onChange={(date)=>handleDate(date,"app_begin_date")} 
                dateFormat='dd/MM/yyyy'
                showYearDropdown
                scrollableMonthYearDropdown
                />
                <span className="">{appLastDateError}</span>
                </li>
                <li><label>Last Date for Registration::</label>
                <DatePicker name="app_last_date" selected={appLastDate} onChange={(date)=>handleDate(date,"app_last_date")} 
                dateFormat='dd/MM/yyyy'
                showYearDropdown
                scrollableMonthYearDropdown
                />
                </li>
                <li><label>Fee Payment Last Date::</label>
                <DatePicker name="app_last_fees_date" selected={appLastFeesDate} onChange={(date)=>handleDate(date,"app_last_fees_date")} 
                dateFormat='dd/MM/yyyy'
                showYearDropdown
                scrollableMonthYearDropdown
                />
                </li>
                <li><label>Correction Last Date::</label>
                <DatePicker name="app_correction_last_date" selected={appCorrectionLastDate} onChange={(date)=>handleDate(date,"app_correction_last_date")} 
                dateFormat='dd/MM/yyyy'
                showYearDropdown
                scrollableMonthYearDropdown
                />
                </li>
                <li><label>Exam Date::</label>
                <DatePicker name="exam_date" selected={examDate} onChange={(date)=>handleDate(date,"exam_date")} 
                dateFormat='dd/MM/yyyy'
                showYearDropdown
                scrollableMonthYearDropdown
                />
                </li>
                <li><label>Admit Card Available::</label>
                <DatePicker name="admit_card_date" selected={admitCardDate} onChange={(date)=>handleDate(date,"admit_card_date")} 
                dateFormat='dd/MM/yyyy'
                showYearDropdown
                scrollableMonthYearDropdown
                />
                </li>
                <li><label>Preliminary Exam Date::</label>
                <DatePicker name="prelim_exam_date" selected={prelimExamDate} onChange={(date)=>handleDate(date,"prelim_exam_date")} 
                dateFormat='dd/MM/yyyy'
                showYearDropdown
                scrollableMonthYearDropdown
                />
                </li>
                <li><label>Main Exam Date::</label>
                <DatePicker name="main_exam_date" selected={mainExamDate} onChange={(date)=>handleDate(date,"main_exam_date")} 
                dateFormat='dd/MM/yyyy'
                showYearDropdown
                scrollableMonthYearDropdown
                />
                </li>
                <li><label>Interview Exam Date::</label>
                <DatePicker name="interview_exam_date" selected={interviewExamDate} onChange={(date)=>handleDate(date,"interview_exam_date")} 
                dateFormat='dd/MM/yyyy'
                showYearDropdown
                scrollableMonthYearDropdown
                />
                </li>
                <li><label>Results Exam Date::</label>
                <DatePicker name="result_exam_date" selected={resultExamDate} onChange={(date)=>handleDate(date,"result_exam_date")} 
                dateFormat='dd/MM/yyyy'
                showYearDropdown
                scrollableMonthYearDropdown
                />
                </li>
                
                <li><label>Medical Standards::</label><textarea  name="medical_std" id="" cols="30" rows="3" onChange={handleChange}/></li>
                
            </ul>
        </div>
        
        <div className='addpost_form_filedcontrol'>
            <div>Category Wise Vacancy Details</div>
            <div><label>General Vacancy::</label><input type="text" name="general_vacancy"  onChange={handleChange}/></div>
            <div><label>OBC::</label><input type="text" name="obc_vacancy"  onChange={handleChange}/></div>
            <div><label>SC Vacancy::</label><input type="text" name="sc_vacancy"  onChange={handleChange}/></div>
            <div><label>ST Vacancy::</label><input type="text" name="st_vacancy"  onChange={handleChange}/></div>
            
        </div>
        
        <div className='addpost_form_filedcontrol'>
            <div>Importtant Links</div>
            <ul className='list-style-none'>
            <li><label>Apply Online::</label><input type="text" name="apply_online" onChange={handleChange} /></li>
            <li><label>Notification::</label><input type="text" name="app_notifications" onChange={handleChange} /></li>
            <li><label>Official Website::</label><input type="text" name="official_website" onChange={handleChange} /></li>
                </ul>
        </div>
       
        
        <div className=''>
            <label>Details Description::</label>
            <textarea  name="detail_desc" id="" cols="30" rows="5"  onChange={handleChange}/>
            {/* <JoditEditor
            // name="detail_desc"
			ref={editor}
			value={content}
			// config={config}
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={handleChange}
		/> */}
        </div>
        
        <div className=''>
            <label>Educations::</label>
            <textarea  name="education" id="" cols="30" rows="5" onChange={handleChange}/>
        </div>
        
        <div className=''>
            <div>        Age Limit as on 01/07/2024::</div>
            <div><label>Minimum Age::</label><input type="text" name="min_age" onChange={handleChange} /></div>
            <div><label>Maximum Age::</label><input type="text" name="max_age" onChange={handleChange} /></div>
            <div><label>Relaxation ::</label><input type="text" name="relaxation" onChange={handleChange} /></div>
            <div><label>Age Info::</label><input type="text" name="age_info" onChange={handleChange} /></div>
        </div> 


        <button type="submit">Post</button>
      </form>
    </div>
  )
}

export default page
