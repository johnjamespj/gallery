import Volume from '../library'
import path from 'path'

const allowedExtensions = ['.jpg', '.jpeg', '.gif', '.png']
    .reduce((map, key) => { map[key] = true; return map; }, {});

class Filesystem extends Volume {
    async getFilesStats(path) { }

    async getFilePath(path) { }

    async getDirectoryStats(path) { }
}