import React from 'react'
import '../App.css'
import postit from '../imgs/notes.png'
import direct from '../imgs/directory.png'
import blog from '../imgs/blogapp.png'


const Projects= () => {
  return (
    <>
      <h5 name='projects'className="projects-title">MY PROJECTS</h5>
      <div className="projects">
<div className='projects-grid'>
<div class="div1">
  <div class="in1"><img src={postit} style={{width:'25rem', height:"auto"}}></img> </div>
  <div class="in1">
    <h1 style={{fontSize:'40px', fontWeight:'bold', padding:'5px'}}>POST-IT</h1>
    <p style={{padding:'5px'}}> Used  React Hooks to mount custom notes to the page</p> 
  <p>with options to edit, delete and search for notes in the grid.</p>
  <p style={{padding:'5px'}}>BUILT WITH:</p>
  <div> icons here</div>
  <div>
    <button>DEMO</button>  <button>CODE</button>
</div>
  </div>
</div>
<div class="div2">
  <div class="in2">
    <h1 style={{fontSize:'40px', fontWeight:'bold', padding:'5px'}}>BLOG</h1>
    <p style={{padding:'5px'}}> Used React Hooks to mount custom blog entries to the page</p> 
  <p>with a form section. Also has options delete and search for posts.</p>
  <p style={{padding:'5px'}}>BUILT WITH:</p>
  <div> icons here</div>
  <div>
    <button>DEMO</button>  <button>CODE</button>
</div>
  </div>
  <div class="in2"><img src={blog} style={{width:'25rem', height:"auto"}}></img> </div>
</div>

<div class="div3">
  <div class="in3"><img src={direct} style={{width:'25rem', height:"auto"}}></img> </div>
  <div class="in3">
    <h1 style={{fontSize:'40px', fontWeight:'bold', padding:'5px'}}>DIRECTORY</h1>
    <p style={{padding:'5px'}}> Implemented MongoDB with Mongoose to locally store data on a table</p> 
  <p>built out with ejs. Theres options to add, edit and delete users directly from the database using a custom form.</p>
  <p style={{padding:'5px'}}>BUILT WITH:</p>
  <div> icons here</div>
  <div>
    <button>DEMO</button>  <button>CODE</button>
</div>
  </div>
</div>




</div>

      </div>
    </>
  );
}

export default Projects