import * as fs from 'fs'

import Base from '../base'
import RunBase from '../base/run'
import conf from '../services/conf'
import {logger} from '../services/logger'
import {MRDA} from '../services/message'
import _ from '../util'

export default class Clean extends RunBase {
  public static strict = false

  public static examples = [
    '$ rde clean',
  ]

  public static flags = {
    ...Base.flags,
    ...RunBase.flags,
  }

  public async run() {
    if (conf.isApp) {
      logger.warn('Start removing files...')

      const whitelist = [
        'app',
        'README.md',
        '.gitignore',
        '.git',
        conf.appConfName,
      ]
      const files = fs.readdirSync(process.cwd())
      files.map(async file => {
        if (!whitelist.includes(file)) {
          await _.asyncExec(`rm -rf ${file}`)
        }
      })
    } else {
      logger.info(MRDA.UNRECOGNIZED)
    }
  }
}