import { CodeGenerator, Interface } from 'pont-engine'

export default class MyGenerator extends CodeGenerator {
  getInterfaceContent(inter: Interface) {
    const bodyParmas = inter.getBodyParamsCode()
    const queryParamsType = 'IQueryParams'
    const queryParamsTmp = `queryParams:${queryParamsType}`
    const bodyParamsTmp = `bodyParams:${bodyParmas}`
    const paramsInterfaceTmp = `
    interface IParams{
      ${queryParamsTmp}
      ${bodyParmas ? bodyParamsTmp : ''}
    }
    `
    const requestParams = bodyParmas ? `{queryParams,bodyParams}` : `{queryParams}`
    return `
    /**
     * @desc ${inter.description}
     */
    import request   from '@/utils/request'
    import { stringify } from 'qs'
    export ${inter.getParamsCode(queryParamsType)}
    export ${paramsInterfaceTmp}
    export function ${inter.name}(${requestParams}:IParams = {} as IParams) {
      return request({
        url: \`${inter.path}?\${stringify(queryParams || {})}\`,
        method: '${inter.method}',
        ${bodyParmas ? 'body: bodyParams' : ''}
      });
    }
   `
  }
}
