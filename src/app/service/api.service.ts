import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Userinfo } from './interfaces';

const DOMAIN_MAPPING = {
  'localhost': '//localhost/',
  '127.0.0.1': '//127.0.0.1/',
  'api.oneminuter.com': '//api.oneminuter.com/',
};
const api = {
  userRegister: '/user/register', //注册
  userLogin: '/user/login', //登录
  userinfo: '/user/info', //用户信息
  tempAccount: '/user/temp/create', //临时账户
  userinfoModify: '/user/info/modify', //修改用户信息
  passwordModify: '/user/password/modify', //修改密码

  communityList: '/community/list/all', //社区列表
  communityMyList: '/community/list/my', //我参加社区列表
  communityJoin: '/community/join', //加入社区
  communityExit: '/community/exit', //退出社区
  communityCreate: '/community/create', //创建社区
  communityModify: '/community', //修改社区信息
  communityDelete: '/community', //删除社区
  communityManagerAdd: '/community/manager/add', //添加社区管理员
  communityManagerRemove: '/community/manager/remove', //删除社区管理员

  topicList: '/topic/list', //话题列表
  topicAdd: '/topic/add', //添加话题
  topicDelete: '/topic/delete', //删除话题
  topicModify: '/topic/modify', //修改话题信息
  topicDetail: '/topic/detail', //删除话题
  topicCollectAdd: '/topic/collect/add', //收藏话题
  topicCancel: '/topic/collect/cancel', //取消收藏话题
  topicCollectList: '/topic/collect/list', //收藏话题列表

  commentList: '/comment/list', //评论列表
  commentAdd: '/comment/add', //添加评论
  commentDelete: '/comment/delete', //删除评论

  zanList: '/zan/list', //点赞列表
  zanAdd: '/zan/add', //点赞
  zanCancel: '/zan/cancel', //取消赞

  fansFollow: '/fans/follow', //关注
  fansCancle: '/fans/cancel', //取消关注
  fansList: '/fans/list', //粉丝列表
  fansFollowList: '/fans/follow/list', //关注列表

  messageList: '/message/list', //消息列表
  messageDetail: '/message/detail', //消息详情
  messageDelete: '/message/delete', //删除消息
  messageViewed: '/message/viewed', //查看消息

  adviseAdd: '/advise/add', //添加建议
  adviseList: '/advise/list', //建议列表

  tipAdd: '/tip/add', //举报

  storyAdd: '/story/add', //添加故事信息
  storyModify: '/story/modify', //故事信息修改
  storyList: '/story/list', //故事列表
  storyInfo: '/story/info', //故事信息
  storyContentAdd: '/story/content/add', //添加故事内容
  storyContentList: '/story/content/list', //故事内容列表
  storyContentModify: '/story/content/modify', //修改故事内容
  storySeriesAdd: '/story/series/add', //添加系列
  storySeriesList: '/story/series/list', //系列故事列表

  roleAdd: '/role/add', //添加角色
  roleModify: '/role/modify', //角色修改
  roleDelete: '/role/delete', //删除角色
  roleList: '/role/list', //角色列表
  roleInfo: '/role/info', //角色信息
};



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiHost = '//api.oneminuter.com/';
  path: string;

  constructor(
    private httpClient: HttpClient,
  ) {
    if (DOMAIN_MAPPING[location.hostname]) {
      this.apiHost == DOMAIN_MAPPING[location.hostname];
    }
    this.path = this.apiHost + "v1"
  }

  //post参数转化
  toParamString(params: Object) {
    return Object.keys(params).reduce((acc, k) => acc.concat(params[k] === void (0) ? [] : [`${k}=${encodeURIComponent(params[k])}`]), []).join('&');
  }

  //获取请求url
  getReqPath(urlKey: string): string {
    return this.path + api[urlKey];
  }

  //注册
  register(account, password: string) {
    return this.httpClient.post<Userinfo>(this.getReqPath('register'), this.toParamString({ account, password }));
  }
  //创建临时账户
  createTempAccount() {
    return this.httpClient.post<Userinfo>(this.getReqPath('tempAccount'), {});
  }
  //登录
  login(account, password: string) {
    return this.httpClient.post<Userinfo>(this.getReqPath('login'), this.toParamString({ account, password }));
  }
  //获取用户信息
  loadUserInfo() {
    return this.httpClient.get<Userinfo>(this.getReqPath('userinfo'));
  }
  //修改用户信息
  modifyUserInfo(...params) {
    return this.httpClient.post<null>(this.getReqPath('modifyUserinfo'), {params})
  }
  //修改密码
  modifyPassword(oldPassword, newPassword: string) {
    return this.httpClient.post<null>(this.getReqPath('modifyPassword'), {oldPassword, newPassword})
  }
}
