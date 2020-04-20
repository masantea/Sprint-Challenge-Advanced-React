import axios from 'axios';

export const useFetch = async (requestType, endpoint, payload) => {

  let result;

  if (requestType.toString().toUpperCase() === 'GET'){

    const res = await axios.get(endpoint)

    result= res.data

  } else if (requestType.toString().toUpperCase() === 'POST'){

    axios
      .post(endpoint, payload)
      .then(res => result = res.data)
      .catch(err => console.log(err))

   } else if (requestType.toString().toUpperCase() === 'PUT'){

    axios
      .post(endpoint, payload)
      .then(res => result = res.data)
      .catch(err => console.log(err))

   }

   console.log('result in custom hook', result)
   return [result]


}