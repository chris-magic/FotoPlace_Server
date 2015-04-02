
/**
  * @statuscode
  * @desc   error code
  function status_code(){}
*/
status_code = {
    "0"     : "success",
    
    "10001"	: "System error",		                            //	系统错误
    "10002"	: "Service unavailable",		                    //	服务暂停
    "10003"	: "Illegal request",		                        //	非法请求
    "10004"	: "Invalid weibo user",		                        //	不合法的微博用户
    "10005"	: "Request api not found",		                    //	接口不存在
    "10006"	: "HTTP method is not suported for this request",	//	请求的HTTP METHOD不支持，请检查是否选择了正确的POST/GET方式
    "10007"	: "IP requests out of rate limit",		            //	IP请求频次超过上限
    "10008"	: "User requests out of rate limit",		        //	用户请求频次超过上限
    "10009"	: "internal error",                                 //创建用户失败
    "10010"	: "Version not support",                            //创建用户失败
    
    "20001"	: "User already exist",	                            //用户已经存在
    "20002"	: "User does not exists",	                        //用户不存在
    "20003"	: "Uid parameter is null",	                        //Uid参数为空
    "20004" : "User token is error",                            //参数为空
    "20005" : "unkown register type",                           //未知注册类型
    "20006"	: "Create user Fail",	                            //创建用户失败
    "20007"	: "not valid email or phone",                       //创建用户失败
    "20008"	: "password not correct",	                        //密码不正确
    "20009"	: "user name already exist",	                    //用户名已经存在
    "20010"	: "verify code not correct",	                    //验证码不正确
    "20011"	: "sns already bind",	                            //账号已经绑定
    "20012"	: "sns bind fail",	                                //sns bind fail
    "20013"	: "sns not bound",	                                //sns not bound
    "20014"	: "cannot unbind with register account",	        //sns not bound
    "20015"	: "no user skin image",	                            //用户皮肤不存在
    "20016"	: "no phone",	                                    //电话号码为空
    "20017"	: "not verified",	                                //电话号码未验证
    "20018"	: "phone already bound",	                        //电话号码已经绑定
    
    "30001"	: "unkown feed type",	                            //未知卡片类型
    "30002"	: "no uid",	                                        //缺少用户uid
    "30003"	: "user token not correct",	                        //用户token不正确
    "30004"	: "unkown action",	                                //未知操作类型
    "30005"	: "lack feedid",	                                //未知操作对象id
    "30006"	: "repost source type error",	                    //转帖错误
    "30007"	: "repost source id missed",	                    //转帖错误
    "30008"	: "create post fail",	                            //发帖失败
    "30009"	: "footprint not found",	                        //官方详情未找到
    "30010"	: "post not found",	                                //用户详情未找到
    "30011"	: "parameter not correct",	                        //输入参数不正确
    "30012"	: "no priority to delete this post",	            //没有删除此帖权限
    "30013"	: "activity not found",	                            //活动未找到
    
    "40001"	: "unkown folder type",	                            //未知夹子类型
    "40002"	: "folder not found",	                            //未找到夹子
    "40003"	: "city not found",	                                //城市未找到
    "40004"	: "place not found",	                            //地点未找到
    "40005"	: "cluster not found",	                            //地点簇未找到
    "40006"	: "id not found",	                                //id未找到
    "40007"	: "no polygon",	                                    //no polygon
    
    "50001"	: "unkown phone type",	                            //未知手机类型
    "50002"	: "unkown token type",	                            //未知token类型
    "50003"	: "push token parameter not complete",	            //参数不全
    "50004"	: "uid not provided"	                            //uid为空
    
    
    
};


/**
  * @userinfo
  * @desc   data structure
  function user_info(){}
*/
user_info = {
    "uid"               : "1404376560",
    "token"             : "d41d8cd98f00b204e9800998ecf8427e24fbc6df6a5b7a540b1ecca0ab17af55",
    "userName"          : "chenkai",
    "registerType"      : "email, phone, weibo, qq, weixin, renren, douban, weixin",
    "email"             : "",
    "avatar"            : "http://fotoplace.cc/img.png",
    "userSkin"          : "http://fotoplace.cc/img.png",
    "messageCount"      : "0",              //消息数
    "followingNumber"   : "1",              //关注个数
    "followerNumber"    : "0",              //粉丝个数
    "tagNumber"         : "0",              //关注的标签个数
    "isFind"            : "1",              //是否允许别人找到自己
    "telephone"         : "",               //自己的电话
    
    "isWeiboBound"      : "",
    "isQQBound"         : "",
    "isDoubanBound"     : "",
    "isWeixinBound"     : "",
    
    "newMsgCount"       : "",  // newAtCount + newCommentCount + newLikeCount+newReplyCount+newFollowerCount
    "newNotifyCount"    : "",
    "newTotalCount"     : "",
    
    "postCount"         : "",
    "likeCount"         : "",
    "wishCount"         : "",
    "stopbyCount"       : "",
    "location"          : "",
    "description"       : ""
};


/**
  * @path   http://fotoplace.cc/api2/user/user_check.php
  * @method post
  * @desc   check user exist
  function user_check(){}
*/
user_check = {
    version     : "2.0",
    checkType   : "emailphone, weibo, weixin, qq, renren, douban, weixin",
    checkStr    : "emailphone or snsId"
};

user_check_response = {
    status      : "0",
    error       : "error message",
    isExist     : "0"
};


/**
  * @path   http://fotoplace.cc/api2/user/loop_of_interest.php
  * @method post
  * @desc   check user exist
  function loop_of_interest(){}
*/
loop_of_interest_req = {
    version     : "2.0",
    uid         : "uid",
    token       : "token",
    selfphone   : "self phone",
    contact     : [
        {
            name    : "",
            phone   : ""
        }
    ]
};

loop_of_interest_response = {
    status      : "0",
    error       : "error message",
    data: {
        loopOfInterest:[
            {
                loopName    : "name",
                imgUrl      : "url"
            }
        ]
    }
};





/**
  * @path   http://fotoplace.cc/api2/user/sns_login.php
  * @method post
  * @desc   sns register, login, bind using same request interface
  function sns_login(){}
*/
sns_login_req = {
    version     : "2.0",
    OSType      : "iOS7.1, Android4.4",
    snsType     : "weibo, qq, weixin, renren, douban, weixin",
    snsId       : "64bit id",
    snsToken    : "string",
    snsName     : "sns name",
    snsAvatar   : "sns avatar url",
    lat         : "",
    lng         : ""
};

sns_login_response = {
    status      : "0",              //20002 not exist, then use sns_reg
    error       : "error message",
    data        : {
        "type"              : "login, register",              //login means old user, register means new user
        "uid"               : "1404376560",
        "token"             : "d41d8cd98f00b204e9800998ecf8427e24fbc6df6a5b7a540b1ecca0ab17af55",
        "userName"          : "chenkai",
        "registerType"      : "email, phone, weibo, qq, weixin, renren, douban, weixin",
        "email"             : "",
        "avatar"            : "http://fotoplace.cc/img.png",
        "userSkin"          : "http://fotoplace.cc/img.png",
        "messageCount"      : "0",              //是否有新消息
        "followingNumber"   : "1",              //关注个数
        "followerNumber"    : "0",              //粉丝个数
        "tagNumber"         : "0",              //关注的标签个数
        "isFind"            : "1",              //是否允许别人找到自己
        "telephone"         : "",               //自己的电话
        
        "isWeiboBound"      : "",
        "isQQBound"         : "",
        "isDoubanBound"     : "",
        "isWeixinBound"     : "",
        
        "newMsgCount"       : "",  // newAtCount + newCommentCount + newLikeCount+newReplyCount+newFollowerCount
        "newNotifyCount"    : "",
        "newTotalCount"     : "",
        
        "postCount"         : "",
        "likeCount"         : "",
        "wishCount"         : "",
        "stopbyCount"       : "",
        "location"          : "",
        "description"       : ""
    }
};

/**
  * @path   http://fotoplace.cc/api2/user/loop_of_interest_reg.php
  * @method post
  * @desc   sns register, login, bind using same request interface
  function loop_of_interest_reg(){}
*/
loop_of_interest_reg_req = {
    version     : "2.0",
    uid         : "uid",
    loopOfInterest  :["tag1", "tag2"]
};

sns_reg_response = {
    status      : "0", //same as sns_login_response
    error       : "error message"
};


/**
  * @path   http://fotoplace.cc/api2/user/sns_bind.php
  * @method post
  * @desc   sns register, login, bind using same request interface
  function sns_bind(){}
*/
sns_bind_req = {
    version     : "2.0",
    OSType      : "iOS7.1, Android4.4",
    uid         : "64bit uid of fotoplace, for bind",
    token       : "token of fotoplace, bind",
    snsType     : "weibo, qq, weixin, renren, douban, weixin",
    snsId       : "64bit id",
    snsToken    : "string",
    snsName     : "sns name",
    snsAvatar   : "sns avatar url",
    action      : "bind, unbind"       //default bind
};

sns_bind_response = {
    status      : "0",                  //
    error       : "error message"
};

sns_standard_response = {
    status      : "%s",                  //
    error       : "%s",
    data        :"%s"
};


/**
  * @path   http://fotoplace.cc/api2/user/user_reg.php
  * @method post
  * @desc   register with phone number
  function user_reg(){}
*/
user_reg_req = {
    version     : "2.0",
    OSType      : "iOS7.1, Android4.4",
    emailphone  : "email or phone number",
    //userName    : "user name",  //change in user profile
    password    : "password",
    lat         : "",
    lng         : ""
    //loopOfInterest  :["tag1", "tag2"],  use loop_of_interest_reg to update loopOfInterest
};

user_reg_response = {
    status      : "0",              //20002 not exist, then use sns_reg
    error       : "error message",
    data        : {
        "uid"               : "1404376560",
        "token"             : "d41d8cd98f00b204e9800998ecf8427e24fbc6df6a5b7a540b1ecca0ab17af55",
        "userName"          : "chenkai",
        "registerType"      : "email, phone, weibo, qq, weixin, renren, douban, weixin",
        "email"             : "",
        "avatar"            : "http://fotoplace.cc/img.png",
        "userSkin"          : "http://fotoplace.cc/img.png",
        "messageCount"      : "0",              //是否有新消息
        "followingNumber"   : "1",              //关注个数
        "followerNumber"    : "0",              //粉丝个数
        "tagNumber"         : "0",              //关注的标签个数
        "isFind"            : "1",              //是否允许别人找到自己
        "telephone"         : "",               //自己的电话
        
        "isWeiboBound"      : "",
        "isQQBound"         : "",
        "isDoubanBound"     : "",
        "isWeixinBound"     : "",
        
        "newMsgCount"       : "",  // newAtCount + newCommentCount + newLikeCount+newReplyCount+newFollowerCount
        "newNotifyCount"    : "",
        "newTotalCount"     : "",
        
        "postCount"         : "",
        "likeCount"         : "",
        "wishCount"         : "",
        "stopbyCount"       : "",
        "location"          : "",
        "description"       : ""
    }
};


/**
  * @path   http://fotoplace.cc/api2/user/user_login.php
  * @method post
  * @desc   login with phone number or email
  function user_login(){}
*/
user_login_req = {
    version     : "2.0",
    OSType      : "iOS7.1, Android4.4",
    emailphone  : "phone number",
    password    : "password"
};

user_login_response = {
    //same as user_reg_response
};


/**
  * @path   http://fotoplace.cc/api2/user/change_password.php
  * @method post
  * @doc    see message_sequence.mdl 001_phone_forget_password
  * @desc   submit new password
  function change_password(){}
*/
change_password_req = {
    version     : "2.0",
    uid         : "",
    token       : "",
    oldpassword : "",
    newpassword : ""
};

change_password_response = {
    status      : "",
    error       : "error message"
};


/**
  * @path   http://fotoplace.cc/api2/user/location_update.php
  * @method post
  * @desc   login with email
  function location_update(){}
*/
location_update_req = {
    version     : "2.0",
    uid         : "64bit uid of fotoplace, for bind",
    token       : "token of fotoplace, bind",
    lat         : "",
    lng         : ""
};

location_update_response = {
    status      : "0",
    error       : "error message"
};



/**
  * @path   http://fotoplace.cc/api2/user/forget_password.php
  * @method post
  * @doc    see message_sequence.mdl 001_phone_forget_password
  * @desc   request to send code to phone by short message
  function forget_password(){}
*/
forget_password_req = {
    version     : "2.0",
    emailphone  : ""
};

forget_password_response = {
    status      : "",  //0 complete
    error       : "error message"
};

/**
  * @path   http://fotoplace.cc/api2/user/forget_password_code.php
  * @method post
  * @doc    see message_sequence.mdl 001_phone_forget_password
  * @desc   submit code to server to check
  function forget_password_code(){}
*/
forget_password_code_req = {
    version     : "2.0",
    emailphone  : "",
    code        : ""
};

forget_password_code_response = {
    status      : "",  //0 complete
    error       : "error message",
    checkresult : "1"
};

/**
  * @path   http://fotoplace.cc/api2/user/new_password.php
  * @method post
  * @doc    see message_sequence.mdl 001_phone_forget_password
  * @desc   submit new password
  function new_password(){}
*/
new_password_req = {
    version     : "2.0",
    emailphone  : "",
    code        : "",
    password    : ""
};

new_password_response = {
    status      : "",  //0 complete, 20010 means verify code error
    error       : "error message",
    data        : {
        "uid"               : "1404376560",
        "token"             : "d41d8cd98f00b204e9800998ecf8427e24fbc6df6a5b7a540b1ecca0ab17af55",
        "userName"          : "chenkai",
        "registerType"      : "email, phone, weibo, qq, weixin, renren, douban, weixin",
        "email"             : "",
        "avatar"            : "http://fotoplace.cc/img.png",
        "userSkin"          : "http://fotoplace.cc/img.png",
        "messageCount"      : "0",              //是否有新消息
        "followingNumber"   : "1",              //关注个数
        "followerNumber"    : "0",              //粉丝个数
        "tagNumber"         : "0",              //关注的标签个数
        "isFind"            : "1",              //是否允许别人找到自己
        "telephone"         : "",               //自己的电话
        
        "isWeiboBound"      : "",
        "isQQBound"         : "",
        "isDoubanBound"     : "",
        "isWeixinBound"     : "",
        
        "newMsgCount"       : "",  // newAtCount + newCommentCount + newLikeCount+newReplyCount+newFollowerCount
        "newNotifyCount"    : "",
        "newTotalCount"     : "",
        
        "postCount"         : "",
        "likeCount"         : "",
        "wishCount"         : "",
        "stopbyCount"       : "",
        "location"          : "",
        "description"       : ""
    }
};



/**
  * @path   http://fotoplace.cc/api2/user/user_auto_login.php
  * @method post
  * @desc   user_autologin
  function user_auto_login(){}
*/
user_auto_login_req = {
    version     : "2.0",
    OSType      : "iOS7.1, Android4.4",
    uid         : "",
    token       : ""
};


user_auto_login_response = {
    status      : "0",
    error       : "error message"
    //same as user_reg_response
    
};



/**
  * @path   http://fotoplace.cc/api2/user/user_follow.php
  * @method post
  * @desc   user_follow
  function user_follow(){}
*/
user_follow_req = {
    version     : "2.0",
    uid         : "",
    token       : "",
    targetUid   : ""
};


user_follow_response = {
    status      : "0",
    error       : "error message",
    isFollowing : ""
};


/**
  * @path   http://fotoplace.cc/api2/user/user_unfollow.php
  * @method post
  * @desc   user_unfollow
  function user_unfollow(){}
*/
user_unfollow_req = {
    version     : "2.0",
    uid         : "",
    token       : "",
    targetUid   : ""
};


user_unfollow_response = {
    status      : "0",
    error       : "error message",
    isFollowing : ""
};




/**
  * @path   http://fotoplace.cc/api2/user/user_unfollow.php
  * @method post
  * @desc   user_unfollow
  function user_unfollow(){}
*/
user_unfollow_req = {
    version     : "2.0",
    uid         : "",
    token       : "",
    targetUid   : ""
};


user_unfollow_response = {
    status      : "0",
    error       : "error message",
    isFollowing : ""
};





