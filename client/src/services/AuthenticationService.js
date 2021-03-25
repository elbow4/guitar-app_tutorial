// axios object
import Api from '@/services/Api'

// export object with register method
export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}
