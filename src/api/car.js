import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/vue-admin-template/car/list',
    method: 'get',
    params: query
  })
}

export function fetchCar(id) {
  return request({
    url: '/vue-admin-template/car/detail',
    method: 'get',
    params: { id }
  })
}

export function createCar(data) {
  return request({
    url: '/vue-admin-template/car/create',
    method: 'post',
    data
  })
}

export function updateCar(data) {
  return request({
    url: '/vue-admin-template/car/update',
    method: 'post',
    data
  })
}
