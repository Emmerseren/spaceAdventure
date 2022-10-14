import axios from "axios";

const axiosBase = axios.create({baseURL: "http://localhost:4444/"})

export const getTours = () => {

    let res = axiosBase.get("tours")
    return res;

}
export const DeleteTour = (id) => {

    let res = axiosBase.delete("tours/admin/" + id)
    return res;

}
export const createTour = (newTour) => {

    let res = axiosBase.post("tours/admin", newTour)
    return res;

}
export const getTour = (id) => {

    let res = axiosBase.get("tours/" + id)
    return res;

}
export const putTour = (newUpdate, id) => {

    let res = axiosBase.put("tours/admin/" + id, newUpdate)
    return res;

}
