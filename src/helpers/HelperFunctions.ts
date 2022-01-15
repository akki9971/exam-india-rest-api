import { Answer } from "../entity/Answer";
import * as fs from 'fs';

class HelperFunctions {

    static getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static getRandomString(length, chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }

    static removeObjectKeys(arr, keys: Array<string>) {
        for (let i = 0; i < keys.length; i++) {
            delete arr[keys[i]];
        }
        return arr;
    }

    static appendUserId(answers: Answer[], userId: number) {
        for (let i = 0; i < answers.length; i++) {
            answers[i]['userId'] = userId;
        }
        return answers;
    }

    /**
     * check if give object has atleast 1 empty value
     * @param object 
     */
    static hasEmptyValues(obj: any) {
        if (!obj) { return true; } // return true if object is absent
        for (var key in obj) {
            if (obj[key] === null || obj[key] === '') {
                return true;
            }
        }
        return false;
    }

    /**
     * check if nested key exist
     * @param obj: object to look for a key
     * @param args: array of nested path to the key ['nestedLevel1', 'nestedLevel2']
     * @returns boolean
     */
    static checkNestedKey(obj: any, args: any[]) {
        for (let i = 0; i < args.length; i++) {
            if (!obj || !obj.hasOwnProperty(args[i])) {
                return false;
            }
            obj = obj[args[i]];
        }
        return true;
    }


    /**
     * Splits whole path into segments and checks each segment for existence and recreates directory tree from the bottom.
     * If since some segment tree doesn't exist it will be created in series.
     * Existing directories will be skipped.
     * @param {String} directory
     */
    static mkdirSyncRecursive(directory) {
        var path = directory.replace(/\/$/, '').split('/');

        for (var i = 1; i <= path.length; i++) {
            var segment = path.slice(0, i).join('/');
            !fs.existsSync(segment) ? fs.mkdirSync(segment) : null ;
        }
    }

    static getDateTime(exam, key) {
        const timeArr = exam[key].split(':');
        let convertStartTime = HelperFunctions.tConvert(`${timeArr[0]}:${timeArr[1]}`);
        return `${exam['date']}, ${convertStartTime}`;
    }

    static tConvert (time) {
        // Check correct time format and split into components
        time = time.split(':').map(value=> ("0" + value).slice(-2)).join(':').toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
      
        if (time.length > 1) { // If time format correct
          time = time.slice (1);  // Remove full string match value
          time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
          time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join (''); // return adjusted time or original string
      }

    static slugify(string) {
        const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
        const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
        const p = new RegExp(a.split('').join('|'), 'g')
      
        return string.toString().toLowerCase()
          .replace(/\s+/g, '-') // Replace spaces with -
          .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
          .replace(/&/g, '-and-') // Replace & with 'and'
          .replace(/[^\w\-]+/g, '') // Remove all non-word characters
          .replace(/\-\-+/g, '-') // Replace multiple - with single -
          .replace(/^-+/, '') // Trim - from start of text
          .replace(/-+$/, '') // Trim - from end of text
      }


}

export default HelperFunctions;