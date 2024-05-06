'use client'
import React,{useState} from 'react'
import axios from 'axios'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import '@/styles/addpost.scss';
import {states_union_territories} from '@/data/staticdata';




function page() {
    const [formData,setFormData] = useState({})
    const [advNoInfo,setAdvNoInfo] = useState('')
    const [startDate, setStartDate] = useState(new Date());
    
    const handleSubmit= async (event)=>{
        event.preventDefault()
        const url='http://127.0.0.1:8000/api/post/'
        console.log("form data::",formData)
        // try
        // {
        //     const response = await axios.post(url,formData)
        //     console.log('post successful')
        //     console.log(response.data)
        // }catch(error) {
        //     console.log("Data Not Posted")
        //     console.error(error)
        // }
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
            setStartDate(date);
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
            <option value={'--select option--'} key={-1}>{'--select option--'}</option>
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
            <label>General Fees::</label><input type="text" name="gen_fees" onChange={handleChange} />
            
            <label>PH Fees::</label><input type="text" name="ph_fees"  onChange={handleChange}/>
            <label>Other Fees::</label><input type="text" name="other_fees" onChange={handleChange}/>
        </div>
        {/*
        <div className='addpost_form_filedcontrol'>
            <div>Important Date</div>
            <ul className='list-style-none'>
                <li><label>Applicaiton Begins::</label><input type="text" name="app_begin_date" onChange={handleChange} /></li>
                <li><label>Last Date for Registration::</label><input type="text" name="app_last_date" onChange={handleChange}/></li>
                <li><label>Fee Payment Last Date::</label><input type="text" name="app_last_fees_date" onChange={handleChange}/></li>
                <li><label>Correction Last Date::</label><input type="text" name="app_correction_last_date" onChange={handleChange}/></li>
                <li><label>Exam Date::</label><input type="text" name="exam_date" onChange={handleChange}/></li>
                <li><label>Admit Card Available::</label><input type="text" name="admit_card_date" onChange={handleChange} /></li>
                <li><label>Preliminary Exam Date::</label><input type="text" name="prelim_exam_date" onChange={handleChange}/></li>
                <li><label>Main Exam Date::</label><input type="text" name="main_exam_date" onChange={handleChange} /></li>
                <li><label>Interview Exam Date::</label><input type="text" name="interview_exam_date" onChange={handleChange} /></li>
                <li><label>Results Exam Date::</label><input type="text" name="result_exam_date" onChange={handleChange} /></li>
                <li><label>Medical Standards::</label><textarea  name="medical_std" id="" cols="30" rows="3" value={'Minimum Height for Male & Female Candidates: 157 CMS'} onChange={handleChange}/></li>
                
            </ul>
        </div>
        <div className='addpost_form_filedcontrol'>
            <div>Category Wise Vacancy Details</div>
            <table style={{border:'4px solid yellow'}}>
                <tbody>
                <tr>                    
                    <th style={{ border: '1px solid black' }}>General</th>
                    <th style={{ border: '1px solid black' }}>OBC</th>
                    <th style={{ border: '1px solid black' }}>General</th>
                    <th style={{ border: '1px solid black' }}>OBC</th>
                    <th style={{ border: '1px solid black' }}>Total</th>                
                </tr>
                <tr>
                    <td style={{ border: '1px solid black' }}>343</td>
                    <td style={{ border: '1px solid black' }}>11</td>
                    <td style={{ border: '1px solid black' }}>33</td>
                    <td style={{ border: '1px solid black' }}>45</td>
                    <td style={{ border: '1px solid black' }}>876</td>
                </tr>
                </tbody>
            </table>
            
        </div>
        <div className='addpost_form_filedcontrol'>
            <div>Importtant Links</div>
            <ul className='list-style-none'>
            <li><label>Apply Online::</label><input type="text" name="apply_online_link" onChange={handleChange} /></li>
                <li><label>Notification::</label><input type="text" name="app_notification" onChange={handleChange} /></li>
                <li><label>Official Website::</label><input type="text" name="offical_website" onChange={handleChange} /></li>
                </ul>
        </div>
        <div className=''>
            <label>Details Description::</label>
            <textarea  name="detail_desc" id="" cols="30" rows="5" value={'Rich Text Editor'} onChange={handleChange}/>
        </div>
        <div className=''>
            <label>Educations::</label>
            <textarea  name="education" id="" cols="30" rows="5" value={'Rich Text Editor'} onChange={handleChange}/>
        </div>
        <div className=''>
            <div>        Age Limit as on 01/07/2024::</div>
            <div><label>Minimum Age::</label><input type="text" name="min_age" onChange={handleChange} /></div>
            <div><label>Maximum Age::</label><input type="text" name="max_age" onChange={handleChange} /></div>
            <div><label>Relaxation ::</label><input type="text" name="relaxation" onChange={handleChange} /></div>
        </div> */}


        <button type="submit">Post</button>
      </form>
    </div>
  )
}

export default page
