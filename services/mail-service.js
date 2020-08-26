export const mailService = {
   
    query,
    getById,
    makeId,

}


const mails = [
    { id: makeId(), from:'Nevo', subject: 'Wassap?', body: 'Pick up!', isRead: false, markedAsRead: false, sentAt: 1551133930594 },
    { id: makeId(),from:'Alon', subject: 'Hey?', body: 'HELLO!', isRead: false, markedAsRead: false, sentAt: 1551133930594 + 200 },
    { id: makeId(),from:'Meshi', subject: 'dsd?', body: 'Hey!', isRead: false, markedAsRead: false, sentAt: 1551133930594 + 3000 }
]

function query() {
    return Promise.resolve(mails)
}


function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}


function getById(petId) {
    const pet = pets.find(pet => pet.id === petId)
    return Promise.resolve(pet)
}