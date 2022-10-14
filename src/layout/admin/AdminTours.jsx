import React, { useEffect } from 'react'
import { useState } from 'react'
import Loader from '../../components/Loader'
import {Link} from "react-router-dom"
import {getTours, DeleteTour} from "../../helpers/apifetch"
import Parser from "html-react-parser"


const AdminTours = () => {
    const [tours, setTours] = useState()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")
    useEffect(() => {
        setLoading(true)
            getTours()
            .then( (res) => {
                setTours(res.data)
            })
            .catch((err) => {
                setError(true)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [message])
const handleDelete = (id) => {

    if(window.confirm("er du sikke på at du ville slette denne ?")) {
        setLoading(true)
        DeleteTour(id)
        .then((res) => {
            setMessage("du har slette" + id)
     
        }
        )
        .catch( (err) => {
            setError(true)
            console.log(err)
        }
    
        )
        .finally(() => {
            setLoading(false)
        })
    }
    
}
tours?.sort(() => 0.5 - Math.random())
  return (
      <div>AdminTours
     

{error && <h2>fejl</h2>}
{loading && <Loader/>}
{tours && tours.map((obj, i) => (
    <>
    <div>{obj.title}</div>
    <div>{Parser(obj.content)}</div>
    <button onClick={() =>handleDelete(obj._id)}>slet</button>
    <Link to={"/admin/admintoursput/" + obj._id}>
    <button>edit</button>
    </Link>
    </>
))}
    </div>
  )
}

export default AdminTours