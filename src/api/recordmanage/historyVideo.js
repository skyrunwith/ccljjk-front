import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/vue-admin-template/history/list',
    method: 'get',
    params: query
  })
}
