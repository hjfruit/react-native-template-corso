const namespace = 'namespace'
export { namespace }

export default {
  namespace,
  state: {
    storeTest: '测试dva',
  },
  effects: {},
  reducers: {
    setState(state: any, { payload }: any) {
      return { ...state, ...payload }
    },
  },
}
