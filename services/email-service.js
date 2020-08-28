export const emailService = {
   
    query,
    getById,
    makeId,
/*     remove, */
/*     like, */
/*     open, */

}


var emails = [
    { id: makeId(), from:'Nevo', subject: 'Wassap?', body: 'Pick up!', isRead: false, isStarred: false, sentAt: 1551133930594 },
    { id: makeId(),from:'Alon', subject: 'Hey?', body: 'HELLO!', isRead: false, isStarred: false, sentAt: 1551133930594 + 200 },
    { id: makeId(),from:'Meshi', subject: 'dsd?', body: 'Hey!', isRead: false, isStarred: false, sentAt: 1551133930594 + 3000 }
]

function query() {
    return Promise.resolve(emails)
}


function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}


function getById(emailId) {
    const email = emails.find(email => email.id === emailId)
    return Promise.resolve(email)
}

/* function remove(emailId) {
   emails = emails.filter(email => email.id !== emailId)
   console.log(emails)
}

function star(emailId){
    emails[emailId].isStarred = true;
}

function read(emailId){
    emails[emailId].isRead = true;
} */