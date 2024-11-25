import {
    cleanEnv,
    str,
} from 'envalid'

export const GLOBALS = { env: cleanEnv(process.env, {
    PASS: str(),
    URL: str(),
    EMAIL: str(),
    BROWSER: str({ default: 'chromium', choices: ['chromium', 'firefox', 'webkit'] }),
    },
) }