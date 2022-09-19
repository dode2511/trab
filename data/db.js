import knex from 'knex'
import {development} from '../src/knexfile.js'

const connection = knex(development)

export default connection
