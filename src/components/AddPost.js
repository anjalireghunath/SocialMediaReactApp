import React from 'react'
import Header from './Header'

const AddPost = () => {
  return (
    <div>
<Header/>
<div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div class="row">
    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label for="" class="form-label">Title</label>
        <input type="text" class="form-control"/>
    </div>
    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label for="" class="form-label">Message</label>
        <textarea name="" id="" cols="30" rows="10" class="form-control"></textarea>
    </div>
    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <button class="btn btn-success">SUBMIT</button>
    </div>
</div>

        </div>
    </div>
</div>

    </div>
  )
}

export default AddPost