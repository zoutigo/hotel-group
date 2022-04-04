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
