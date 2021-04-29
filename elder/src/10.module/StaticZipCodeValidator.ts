const numberRegexp = /^[0-9]+$/;

/**
 * 这里直接没有写任何名字。
 */
export default function (s: string) {
    return s.length === 5 && numberRegexp.test(s);
}
