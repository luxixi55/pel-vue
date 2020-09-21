import request from '../utils/request'

export function gologin(data) {
  return request({
    url: '/redis/add',
    method: 'get',
    data: data
  })
}
