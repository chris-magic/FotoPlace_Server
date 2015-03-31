/**
 * Created by ken on 15-3-26.
 */
var EventProxy = require('eventproxy');

var models = require('../models');
var Album = models.Album;
var tools = require('../common/tools');
var at = require('../common/at');
var _ = require('lodash');

/**
 * 根据用户ID，获取专辑列表
 * Callback:
 * - err, 数据库异常
 * - messages, 消息列表
 * @param {String} userId 用户ID
 * @param {Function} callback 回调函数
 */
exports.getAlbumsByUserId = function (userId, callback) {
    Album.find({user_id: userId}, null, {sort: '-create_at', limit: 200}, callback);
};

/**
 * 获取关键词能搜索到的主题数量
 * Callback:
 * - err, 数据库错误
 * - count, 主题数量
 * @param {String} query 搜索关键词a
 * @param {Function} callback 回调函数
 */
exports.getCountByUserId = function (userId, callback) {
    Album.count(userId, callback);
};

// for sitemap
exports.getLimit5w = function (callback) {
    Album.find({}, '_id', {limit: 50000, sort: '-create_at'}, callback);
};

/**
 * 更新主题的最后回复信息
 * @param {String} topicId 主题ID
 * @param {String} replyId 回复ID
 * @param {Function} callback 回调函数
 */
exports.updateAlbumByID = function (title, homepic, contents, albumId, callback) {
    Album.findOne({_id: albumId}, function (err, album) {
        if (err || !album) {
            return callback(err);
        }
        album.title = title;
        album.home_pic = homepic;
        album.contents = contents;
        album.save(callback);
    });
};

/**
 * 根据主题ID，查找一条主题
 * @param {String} id 主题ID
 * @param {Function} callback 回调函数
 */
exports.getAlbum = function (id, callback) {
    Album.findOne({_id: id}, callback);
};

/**
 * 删除专辑
 * @param {String} id 专辑ID
 * @param {Function} callback 回调函数
 */
exports.removeAlbum = function(album_id, callback) {
    Album.remove({_id:album_id},callback);
};

exports.newAndSave = function (title, homepic, contents, user_id, callback) {
    var album = new Album();
    album.title = title;
    album.home_pic = homepic;
    album.contents = contents;
    album.user_id = user_id;
    album.save(callback);
};
