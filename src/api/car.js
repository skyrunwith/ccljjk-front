import request from '@/utils/request'

export function getCarList(params) {
  return request({
    url: '/vue-admin-template/car/list',
    method: 'get',
    params
  })
}
