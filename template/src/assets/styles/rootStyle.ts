import EStyleSheet from 'react-native-extended-stylesheet'

/**
 * [基础样式表]
 */
const RootStyles = EStyleSheet.create({
  bottomBorder: {
    borderBottomWidth: EStyleSheet.hairlineWidth,
    borderBottomColor: '#e5e5e5',
  },
  flex1: { flex: 1 },
  // flex-水平垂直居中
  flexCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // flex-垂直不居中
  flexAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // flex-垂直两端对齐
  flexSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

export { RootStyles }
