import { HOST, WX_APPID } from 'react-native-dotenv'
const config = {
  baseUrl: '/api',
  authKey: 'Authorization',
}
export default {
  ...config,
  HOST,
  WX_APPID,
}
