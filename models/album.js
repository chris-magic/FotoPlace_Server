/**
 * Created by ken on 15-3-26.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var config = require('../config');
var _ = require('lodash');

//var blogSchema = new Schema({
//    title:  String,
//    author: String,
//    body:   String,
//    comments: [{ body: String, date: Date }],
//    date: { type: Date, default: Date.now },
//    hidden: Boolean,
//    meta: {
//        votes: Number,
//        favs:  Number
//    }
//});

var AlbumSchema = new Schema({
    title: {type: String},
    home_pic:{type: String},
    contents: {type:Array},
    user_id: {type: String},
    album_id: {type: ObjectId},
    reply_count: {type: Number, default: 0},
    visit_count: {type: Number, default: 0},
    collect_count: {type: Number, default: 0},
    create_at: {type: Date, default: Date.now},
    update_at: {type: Date, default: Date.now}
});

AlbumSchema.index({create_at: -1});
AlbumSchema.index({album_id: 1, create_at: -1});


mongoose.model('Album', AlbumSchema);