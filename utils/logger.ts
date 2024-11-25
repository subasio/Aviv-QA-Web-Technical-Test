import { createLogger, format, transports } from 'winston'

const logFormat = format.printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level.toUpperCase()}]: ${message}`
})

const customLevels = {
    levels: {
        error: 0,
        warn: 1,
        info: 2,
        http: 3,
        debug: 4,
    },
    colors: {
        error: 'red',
        warn: 'yellow',
        info: 'green',
        http: 'magenta',
        debug: 'blue',
    },
}

const logger = createLogger({
    levels: customLevels.levels,
    format: format.combine(
        format.colorize({ all: true }),
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        logFormat
    ),
    transports: [new transports.Console(),
        // new transports.File({ filename: path.resolve(__dirname, '../../logs/app.log') })     // If needed we can log to a file
    ],
    // exceptionHandlers: [
    //     new transports.File({ filename: path.resolve(__dirname, '../../logs/exceptions.log') })
    // ]
})

export default logger