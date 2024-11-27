import {
    cleanEnv,
    str,
} from 'envalid'

export const GLOBALS = { env: cleanEnv(process.env, {
    URL: str({ default: 'https://demo.nopcommerce.com/' }),
    BROWSER: str({ default: 'chromium', choices: ['chromium', 'firefox', 'webkit'] }),
    CF_CLEARANCE: str({ default: '<paste_cf_clearance_value_here>' }),
    },
)}