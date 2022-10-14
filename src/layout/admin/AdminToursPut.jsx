import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ErrorMsg from '../../components/ErrorMsg'
import Loader from '../../components/Loader'
import { getTour } from '../../helpers/apifetch'
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css';
import { putTour } from '../../helpers/apifetch'
import MessageBox from '../../components/MessageBox'
import { useRef } from 'react'

const modules = {

  toolbar: [

      [ 'bold', 'italic', 'underline', 'strike' ],

      [ { 'color': [ '#000', '#e6000', '#ff9900' ] } ]

  ]

}

const AdminToursPut = () => {


    const {id} = useParams()

    const [tour, setTour] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [messages, setMessages] = useState()
    const [content, setContent] = useState(prevState => prevState)



    useEffect(() => {

        setLoading(true)
        getTour(id)
        .then( (res) => {
            setTour(res.data)
            setError(false)
        })
        .catch((err) => {
            setError(true)
        })
        .finally(() => {
            setLoading(false)
         });
    }, [])

    const handleEdit = (e) => {
      e.preventDefault()

      setLoading(true)

      let formData = new FormData(e.target)
      formData.append("content", content)

      putTour(formData, id)
      .then((res) => {
       /*  setContent(res.data.rettet.content) */
        console.log(content)
        setMessages("rettet")

      })
      .catch((err) => {
        console.log("fejl")
      })
      .finally( () => {

        setLoading(false)
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
          
        });
      }
      )
    }
  return (
    <div className='AdminToursEdit'>
        <h1>Ret tour</h1>
        {error && <ErrorMsg/>}
        {loading && <Loader/>}
        {tour && <div>
          {messages && <MessageBox message={messages} closeMsg={setMessages}/>}
        
        <form onSubmit={handleEdit} action="">
        <label htmlFor="inpTitle"> Title</label>
        <br />
        <input
          type="text"
          name="title"
          defaultValue={tour.title}
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
          <ReactQuill modules={modules }    defaultValue={tour.content}  theme="snow" onChange={setContent}/>
        <br />
        <label htmlFor="inpTraveltime"> Travel time</label>
        <br />
        <input
          type="text"
          name="traveltime"
          defaultValue={tour.traveltime}
          id="inpTraveltime"
          required
          />
        <br />
        <label htmlFor="inpDestination"> Destination</label>
        <br />
        <input
          type="text"
          name="destination"
          defaultValue={tour.destination}
          id="inpDestination"
          required
          />
        <br />
        <label htmlFor="inpDistance">Distance</label>
        <br />
        <input
          type="text"
          name="distance"
          defaultValue={tour.distance}
          id="inpDistance"
          required
        />
        <br />
        <label htmlFor="inpPrice"> Price</label>
        <br />
        <input
          type="text"
          name="price"
          defaultValue={tour.price}
          id="inpPrice"
          required
          />
        <br />
        <label htmlFor="inpImage1"> Image1</label>
        <br />
        <input
          type="file"
          name="image1"
          id="inpImage1"
          accept="image/*"
          />
        <br />
        <label htmlFor="inpImage2"> Image2</label>
        <br />
        <input
          type="file"
          name="image2"
          id="inpImage2"
          accept="image/*"
          />
        <button type="submit"> Ret tour</button>
      </form>
        </div>}

    </div>
  )
}

export default AdminToursPut