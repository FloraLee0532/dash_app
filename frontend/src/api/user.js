import request from '@/api/request';
 
// 获取用户信息
export function getUserInfo(userId) {
  return request({
    url: `/users/${userId}`,
    method: 'get',
  });
}
 
// 更新用户信息
export function updateUserInfo(userId, data) {
  return request({
    url: `/users/${userId}`,
    method: 'put',
    data,
  });
}
 
// 删除用户
export function deleteUser(userId) {
  return request({
    url: `/users/${userId}`,
    method: 'delete',
  });
}