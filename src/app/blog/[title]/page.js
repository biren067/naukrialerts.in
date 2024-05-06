import React from 'react'


function page({params}) {
  console.log(params)
  return (
    <div>
      <h1>On the basis of title, call get Database and display info</h1>
      <h2> Title is ::: {params.title}</h2>
      
    </div>
  )
}

export default page
