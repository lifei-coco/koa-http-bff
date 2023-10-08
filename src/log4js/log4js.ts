import * as Log4js from 'log4js';
import { log4jsConfig } from './index';

// 定义日志级别
export enum LoggerLevel {
  ALL = 'ALL',
  MARK = 'MARK',
  TRACE = 'TRACE',
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
  FATAL = 'FATAL',
  OFF = 'OFF',
}

// 内容跟踪类
export class ContextTrace {
  constructor(
    public readonly context: string,
    public readonly path?: string,
    public readonly lineNumber?: number,
    public readonly columnNumber?: number,
  ) {}
}

// 注入配置
Log4js.configure(log4jsConfig);

// 实例化
const logger = Log4js.getLogger('default');

logger.level = LoggerLevel.DEBUG;

// 定义log类方法
export class Logger {
  static access(args) {
    const loggerCustom = Log4js.getLogger('access');
    loggerCustom.info(args);
  }

  static error(args) {
    const loggerCustom = Log4js.getLogger('error');
    loggerCustom.info(args);
  }

  static system(args) {
    const loggerCustom = Log4js.getLogger('system');
    loggerCustom.info(args);
  }
}
