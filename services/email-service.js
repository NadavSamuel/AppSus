export const emailService = {
   
    query,
    getById,
    makeId,
    getNextPrev,
    save,
    getEmpty
/*     remove, */
/*     like, */
/*     open, */

}



var emails = [
    { id: makeId(), from:'Nevo', subject: 'Wassap?', body: 'Pick up, Your Project should be ready!', isRead: false, isStarred: false, sentAt: 1551133930594 },
    { id: makeId(),from:'Alon', subject: 'Ma Hamatzav Ya Ach?', body: 'HELLO, Are you there?!', isRead: false, isStarred: false, sentAt: 1551133930594 + 200 },
    { id: makeId(),from:'Meshi', subject: 'Hakol Tov?', body: 'I made a CR today, check it in your folder!', isRead: false, isStarred: false, sentAt: 1551133930594 + 17000 },
    { id: makeId(),from:'Rotem', subject: 'Achla?', body: 'Think about it for a minute, and then come back!', isRead: false, isStarred: false, sentAt: 1551133930594 + 3000 },
    { id: makeId(),from:'Margad', subject: 'Walla?', body: 'Solved in 5 minutes!', isRead: false, isStarred: false, sentAt: 1551133930594 + 30000 },
    { id: makeId(),from:'Meital', subject: 'Sababa?', body: 'Hey!', isRead: false, isStarred: false, sentAt: 1551133930594 + 20000 },
    { id: makeId(),from:'Paolo', subject: 'Ma Kore Achi?', body: 'Bo Nirae! A ha hine habag', isRead: false, isStarred: false, sentAt: 1551133930594 + 10000 },
    { id: makeId(),from:'Daniel', subject: 'He?', body: 'Hey!', isRead: false, isStarred: false, sentAt: 1551133930594 + 9000 },
    { id: makeId(),from:'Itai', subject: 'dsd?', body: 'Hey!', isRead: false, isStarred: false, sentAt: 1551133930594 + 6000 },
    { id: makeId(),from:'Or', subject: 'Nachon', body: 'Meod', isRead: false, isStarred: false, sentAt: 1551133930594 + 10000 },
]

function query() {
    return Promise.resolve(emails)
}

function getById(emailId) {
    const email = emails.find(email => email.id === emailId)
    console.log(emails)
    console.log(email)
    return Promise.resolve(email)
}

function getNextPrev(emailId) {
    const emailIdx = emails.findIndex(email => email.id === emailId)
    const nextEmail = emails[emailIdx + 1] || emails[0]
    const prevEmail = emails[emailIdx - 1] || emails[emails.length - 1]
    return {
        prevEmailId: prevEmail.id,
        nextEmailId: nextEmail.id
    }
}

function save(emailToSave) {
    emailToSave.id ? _reply(emailToSave) : _compose(emailToSave)
}
function _compose(_email) {
    const emailToCompose = {
        ..._email,
        id: makeId()
    }
    emails = [emailToCompose, ...emails]
}
function _reply(emailToReply) {
    emails = emails.map(_email => _email.id === emailToReply.id ? emailToReply : _email)
    return emailToReply
}

function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function getEmpty() {
    return { from:'Lior', subject: '', body: '', isRead: false, isStarred: false, sentAt: Date.now() };
}
