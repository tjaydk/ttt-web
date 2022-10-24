export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    baseURL: 'https://vision.googleapis.com/v1',
    headers: {
      // headers you need
    }
  })
  // Inject to context as $api
  inject('googleAxios', api)
}
