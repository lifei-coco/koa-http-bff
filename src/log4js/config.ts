import * as path from 'path';

// 日志保存目录
const baseLogPath = path.resolve(__dirname, '../../logs');

export const log4jsConfig = {
  appenders: {
    console: { type: 'console' }, // 控制打印至控制台
    // 统计日志
    access: {
      type: 'dateFile', // 写入文件格式，并按照日期分类
      filename: `${baseLogPath}/access/access.log`, // 日志文件名，会命名为：access.2021-04-01.log
      alwaysIncludePattern: true, // 为true, 则每个文件都会按pattern命名，否则最新的文件不会按照pattern命名
      pattern: 'yyyy-MM-dd-hh', // 日期格式
      maxLogSize: 791930, // 日志大小10485760
      daysToKeep: 30, // 文件保存日期30天
      numBackups: 3, //  配置日志文件最多存在个数
      compress: true, // 配置日志文件是否压缩
      category: 'access', // category 类型
      keepFileExt: true, // 是否保留文件后缀
    },
    // 异常日志
    error: {
      type: 'dateFile',
      filename: `${baseLogPath}/error/error.log`,
      alwaysIncludePattern: true,
      pattern: 'yyyy-MM-dd-hh', // 日期格式
      maxLogSize: 10485760, // 日志大小
      daysToKeep: 30,
      numBackups: 3,
      keepFileExt: true,
      category: 'error', // category 类型
    },
    system: {
      type: 'dateFile',
      filename: `${baseLogPath}/system/system.log`,
      alwaysIncludePattern: true,
      pattern: 'yyyy-MM-dd-hh', // 日期格式
      maxLogSize: 10485760, // 日志大小
      daysToKeep: 30,
      numBackups: 3,
      keepFileExt: true,
      category: 'system', // category 类型
    },
  },
  categories: {
    default: {
      appenders: ['console'],
      level: 'all',
    },
    access: { appenders: ['access'], level: 'info' },
    error: { appenders: ['error'], level: 'info' },
    system: { appenders: ['system'], level: 'info' },
  },
  pm2: true, // 使用 pm2 运行时需要开启此选项，否则日志不生效
  pm2InstanceVar: 'INSTANCE_ID', // pm2 NODE_APP_INSTANCE 变量的默认名称。
};
