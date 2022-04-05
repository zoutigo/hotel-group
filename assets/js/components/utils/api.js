import axios from 'axios'

const LOCALHOST = 'http://localhost:8000'

const PREFIX = process.env.NODE_ENV === 'production' ? '' : LOCALHOST

export const apiLogin = async (datas) => {
  const URL = `${PREFIX}/api/login`
  const response = await axios.post(URL, datas)
  return response
}

export const apiRegister = async (datas) => {
  const URL = `${PREFIX}/api/register`

  const response = await axios.post(URL, datas)
  return response
}
export const apiBookingCreate = async (datas) => {
  const URL = `${PREFIX}/api/booking/create`

  const response = await axios.post(URL, datas)
  return response
}
export const apiHouseCreate = async (datas) => {
  const URL = `${PREFIX}/api/house/create`

  const response = await axios.post(URL, datas)
  return response
}
export const apiHouseUpdate = async (datas) => {
  const URL = `${PREFIX}/api/house/update`

  const response = await axios.post(URL, datas)
  return response
}
export const apiHouseDelete = async (datas) => {
  const URL = `${PREFIX}/api/house/delete`

  const response = await axios.post(URL, datas)
  return response
}
export const apiContact = async (datas) => {
  const URL = `${PREFIX}/api/contact/post`

  const response = await axios.post(URL, datas)
  return response
}
