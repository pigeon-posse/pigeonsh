
/**
 * Super class for cmds.
 *
 * @description Super class for cmds.
 *
 */

import * as os   from 'os'
import * as path from 'path' 
import { not }   from '../utils/notifications.js'
import { text }  from '../utils/text.js'

export class Cli {

	infoFiledefaultVersion = '1.0.0'
	infoFileExts = [ 'yml', 'yaml', 'json' ]
	mainFileTypes = [
		{
			cli  : 'source',
			exts : [ 'sh', 'zsh' ],
		},
		{
			cli  : 'node',
			exts : [ 'js' ],
		},
		{
			cli  : 'python',
			exts : [ 'py' ],
		}, 
	]

	mainFileExts = this.#getMainFileExts()
	
	#getMainFileExts(){

		return this.mainFileTypes.flatMap( v => v.exts )
	
	}

	constructor( args ) {
	
		this.args               = args
		this.scriptsPath        = os.homedir() + '/.scriptsrc'
		this.defaultsPath       = path.resolve( 'src/data' )
		this.defaultScriptsPath = this.scriptsPath + '/defaults'
		this.utils              = {
			not  : not,
			text : text,
		}

	}

}
