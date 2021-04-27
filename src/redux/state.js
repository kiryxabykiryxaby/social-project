import { rerenderTree } from '../render';
let state = {
    profilePage: {

        posts: [
            { id: 1, message: 'Hi, how are you', likesCount: 12, },
            { id: 2, message: 'Whats your name', LikesCount: 54 },
            { id: 3, message: 'Bla JAJJA', LikesCount: 54 },
            { id: 4, message: 'ASJKLDASJ', LikesCount: 54 }],
        newPostText: "itcamacutra",
        siteBar: [
            { id: 1, message: 'Fil' },
            { id: 2, message: 'AndHi woldey' }
        ],


    },
    dialogsPage: {
        messages: [
            { id: 1, message: 'Fil' },
            { id: 2, message: 'AndHi woldey' },
            { id: 3, message: 'Lenomo' },
            { id: 4, message: 'Cofeei' },
            { id: 5, message: 'KIBye bYeRYL' }],
        dialogs: [
            { id: 1, name: 'Dima', ava: 'https://vraki.net/sites/default/files/mood/m.jpg' },
            { id: 2, name: 'Andey', ava: 'https://vraki.net/sites/default/files/mood/m.jpg' },
            { id: 3, name: 'Sveta', ava: 'https://vraki.net/sites/default/files/mood/m.jpg' },
            { id: 4, name: 'Lena', ava: 'https://vraki.net/sites/default/files/mood/m.jpg' },
            { id: 5, name: 'KIRYL', ava: 'https://vraki.net/sites/default/files/mood/m.jpg' }],

    }
}
window.state = (state);

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderTree(state);
}
export let updateNewPostText = (newText) => {
        state.profilePage.newPostText= newText;
    rerenderTree(state);
}
export default state;