/**
 * 数据库模块
 */

var log = require('./log');
var config = require("../config");

var options = {
    'host': config.mysqlconf.db_host,
    'port': config.mysqlconf.db_port,
    'user': config.mysqlconf.db_user,
    'password': config.mysqlconf.db_passwd,
    'database': config.mysqlconf.db_name,
    'charset': config.mysqlconf.db_charset,
    'connectionLimit': config.mysqlconf.db_conn_limit,
    'supportBigNumbers': true,
    'bigNumberStrings': true
};

var mysql = require('mysql');
var pool = mysql.createPool(options);

/**
 * 释放数据库连接
 */
exports.release = function (connection) {
    connection.end(function (error) {
        log.debug('Connection closed');
    });
};

/**
 * 执行查询
 */
exports.execQuery = function (options) {
    pool.getConnection(function (error, connection) {
        if (error) {
            log.error('DB-获取数据库连接异常！');
            throw error;
        }

        /*
         * connection.query('USE ' + config.db, function(error, results) { if(error) { log.error('DB-选择数据库异常！'); connection.end(); throw error; } });
         */

        // 查询参数
        var sql = options['sql'];
        var args = options['args'];
        var handler = options['handler'];

        // 执行查询
        if (!args) {
            var query = connection.query(sql, function (error, results) {
                if (error) {
                    log.error('DB-执行查询语句异常！');
                    throw error;
                }

                // 处理结果
                handler(results);
            });

            log.debug(query.sql);
        } else {
            var query = connection.query(sql, args, function (error, results) {
                if (error) {
                    log.error('DB-执行查询语句异常！');
                    throw error;
                }

                // 处理结果
                handler(results);
            });

            log.debug(query.sql);
        }

        // 返回连接池
        connection.release(function (error) {
            if (error) {
                log.error('DB-关闭数据库连接异常！');
                throw error;
            }
        });
    });
};
