import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../../components/Loader";
import {createTour} from"./../../helpers/apifetch"
import ReactQuill from "react-quill"
import "./admintours.scss"
import 'react-quill/dist/quill.snow.css';

const modules = {

  toolbar: [

      [ 'bold', 'italic', 'underline', 'strike' ],

      [ { 'color': [ '#000', '#e6000', '#ff9900' ] } ]

  ]

}

const AdminToursCreate = () => {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [messages, setMessages] = useState()
  const [content, setContent] = useState()
  console.log(
    content
  )
  const handleSubmit = (e) => {
    e.preventDefault()

    setLoading(true)

    let formData = new FormData(e.target)

    formData.append("content", content);
    createTour(formData)
    .then((res) => {
      console.log(res.data)
      e.target.reset()
      setMessages("Ny tur oprettet! Id'et er " + res.data.oprettet._id)
      
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      setLoading(false)
    })
  }

  return (
    <div>
        <h1></h1>
      {loading &&  <Loader/> }
        {messages && <h2>{messages}</h2>}
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="inpTitle"> Title</label>
        <br />
        <input
          type="text"
          name="title"
          placeholder="Opret title"
          id="inpTitle"
          required
          />
        <br />
        <label htmlFor="inpContent"> Content</label>
        <br />
      {/*   <textarea
          type="text"
          name="content"
          id="inpContent"
          required
          />  */}
          <ReactQuill modules={modules } theme="snow" placeholder="Opret Brødtext" onChange={setContent}/>
        <br />
        <label htmlFor="inpTraveltime"> Travel time</label>
        <br />
        <input
          type="text"
          name="traveltime"
          placeholder="Opret rejse tid"
          id="inpTraveltime"
          required
          />
        <br />
        <label htmlFor="inpDestination"> Destination</label>
        <br />
        <input
          type="text"
          name="destination"
          placeholder="Opret destination"
          id="inpDestination"
          required
          />
        <br />
        <label htmlFor="inpDistance">Distance</label>
        <br />
        <input
          type="text"
          name="distance"
          placeholder="Opret distance"
          id="inpDistance"
          required
        />
        <br />
        <label htmlFor="inpPrice"> Price</label>
        <br />
        <input
          type="text"
          name="price"
          placeholder="Opret Pris"
          id="inpPrice"
          required
          />
        <br />
        <label htmlFor="inpImage1"> Image1</label>
        <br />
        <input
          type="file"
          name="image1"
          placeholder="Opret et billed1"
          id="inpImage1"
          accept="image/*"
          />
        <br />
        <label htmlFor="inpImage2"> Image2</label>
        <br />
        <input
          type="file"
          name="image2"
          placeholder="Opret et billed1"
          id="inpImage2"
          accept="image/*"
          />
        <button type="submit"> opret tour</button>
      </form>
    </div>
  );
};

export default AdminToursCreate;
