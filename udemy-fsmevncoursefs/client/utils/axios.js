import Axios from 'axios'

// export default Axios.create({
//     baseUrl: '/api/v1/'
// })

const axios = Axios.create({
    baseURL: '/api/v1/'
})


export default axios