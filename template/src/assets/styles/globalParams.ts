import { Dimensions } from 'react-native'

const globalStyleParams = {
  $primaryColor: '#0AC6A6',
  $supColor1: '#FF781D',
  $supColor2: '#0C90F8',
  $supColor3: '#7576FF',
  $impColor: '#192A33',
  $generalColor1: '#6D7073',
  $generalColor2: '#B6BBBF',
  $weakColor1: '#EBEEF1',
  $weakColor2: '#EFF2F5',
  $border: {
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  $deviceWidth: Dimensions.get('window').width, // 设备的宽度
  $deviceHeight: Dimensions.get('window').height, // 设备的高度
}

export { globalStyleParams }
