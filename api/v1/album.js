/**
 * Created by ken on 15-3-26.
 */
var models = require('../../models');
var AlbumModel = models.Album;
var AlbumProxy = require('../../proxy').Album;
var config = require('../../config');
var eventproxy = require('eventproxy');
var _ = require('lodash');
var at = require('../../common/at');
var renderHelper = require('../../common/render_helper');
var validator = require('validator');

var getAlbumList = function (req, res, next) {
    var userId = req.params.user_id;
    var ep = new eventproxy();
    ep.fail(next);
    AlbumProxy.getAlbumsByUserId(userId, ep.done('album_list', function (docs) {
        return docs;
    }));

    ep.all('album_list', function (unread) {
        res.send({
            success: true,
            album_list: unread
        });
    });
}
exports.getAlbumList = getAlbumList;

var addAlbum = function (req, res, next) {
    var body = req.body;
    console.log("Partial body: " + body);

    var user_id = validator.trim(body.user_id);
    user_id = validator.escape(user_id);
    var title = body.title;
    title = validator.escape(title);
    var home_pic = validator.trim(body.home_pic);
    home_pic = validator.escape(home_pic);
    var contents = validator.trim(body.contents);
    contents = validator.escape(contents);

    // 得到所有的 pic url, e.g. ['1.png', '2.png', ..]
    //var allTabs = contents.map(function (tPair) {
    //    return tPair[0];
    //});

    // 验证
    var editError;
    if (title === '') {
        editError = '标题不能是空的。';
    }
    //else if (title.length < 5 || title.length > 100) {
    //    editError = '标题字数太多或太少。';
    //}
    else if (!home_pic /*|| allTabs.indexOf(home_pic) === -1**/) {
        editError = '必须选择一个封面。';
    }
    else if (contents === '') {
        editError = '内容不可为空';
    }
    // END 验证

    if (editError) {
        res.status(422);
        return res.send({
            error_msg: editError
        });
    }

    AlbumProxy.newAndSave(title, home_pic, contents, user_id, function (err, album) {
        if (err) {
            return next(err);
        }

        if (album) {
            //res.json({success: true});
            res.send({
                success: true,
                album_id: album.album_id
            });
            return;

        }
    });
}
exports.addAlbum = addAlbum;

var updateAlbum = function (req, res, next) {
    var body = req.body;

    var album_id = validator.trim(body.album_id);
    album_id = validator.escape(album_id);
    var title = body.title;
    title = validator.escape(title);
    var home_pic = validator.trim(body.home_pic);
    home_pic = validator.escape(home_pic);
    var contents = validator.trim(body.contents);
    contents = validator.escape(contents);

    // 验证
    var editError;
    if (title === '') {
        editError = '标题不能是空的。';
    }
    //else if (title.length < 5 || title.length > 100) {
    //    editError = '标题字数太多或太少。';
    //}
    else if (!home_pic /*|| allTabs.indexOf(home_pic) === -1**/) {
        editError = '必须选择一个封面。';
    }
    else if (contents === '') {
        editError = '内容不可为空';
    }
    // END 验证

    if (editError) {
        res.status(422);
        return res.send({
            error_msg: editError
        });
    }

    AlbumProxy.updateAlbumByID(title, home_pic, contents, album_id, function (err, album) {
        if (err) {
            return next(err);
        }

        if (album) {
            //res.json({success: true});
            res.send({
                success: true,
                album_id: album.album_id
            });
            return;

        }
    });
}
exports.updateAlbum = updateAlbum;

var delAlbum = function (req, res, next) {
    var body = req.body;

    var album_id = validator.trim(body.album_id);
    album_id = validator.escape(album_id);


    AlbumProxy.removeAlbum(album_id, function (err) {
        if (err) {
            return next(err);
        }

        res.send({
            success: true
        });
    });
}
exports.delAlbum = delAlbum;