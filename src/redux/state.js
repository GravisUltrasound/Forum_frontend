let store = {
    _state: {
        topics: [
            {
                topicId: 1,
                title: "Title 1",
                firstMessage: "first message for topic 1",
                messages: [
                    {topicId: 1, messageId: 1, text: "first message for topic 1"},
                    {topicId: 1, messageId: 2, text: "koroche cheto napisano"}
                ]
            },
            {
                topicId: 2,
                title: "Title 2",
                firstMessage: "first message for topic 2",
                messages: [
                    {topicId: 2, messageId: 1, text: "aaaaaaaaaaaaa"},
                    {topicId: 2, messageId: 2, text: "aaaaaaaaaaaaa"}
                ]
            },
            {
                topicId: 3,
                title: "Title 3",
                firstMessage: "first message for topic 3",
                messages: [
                    {topicId: 3, messageId: 1, text: "aaaaaaaaaaaaa"},
                    {topicId: 3, messageId: 2, text: "aaaaaaaaaaaaa"}
                ]
            },
            {
                topicId: 4,
                title: "Title 4",
                firstMessage: "first message for topic 4",
                messages: [
                    {topicId: 4, messageId: 1, text: "aaaaaaaaaaaaa"},
                    {topicId: 4, messageId: 2, text: "aaaaaaaaaaaaa"},
                    {topicId: 4, messageId: 3, text: "aaaaaaaaaaaaa"}]
            }
        ],
        newTopicTitle: "",
        newFirstMessage: "",
        users: [
            {userId: 1, name: "Nikita"},
            {userId: 2, name: "Alexey"}
        ]
    },
    _renderEntireTree() {},

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._renderEntireTree = observer;
    },

    dispatch(action){
        if (action.type === 'ADD-TOPIC'){
            let newTopic = {
                topicId: 5,
                title: this._state.newTopicTitle,
                firstMessage: this._state.newFirstMessage
            }
            this._state.topics.push(newTopic);
            this._renderEntireTree(this._state);
            this._state.newTopicTitle = '';
            this._state.newFirstMessage = '';
        }
        else if (action.type === 'UPDATE-TOPIC-TITLE') {
            this._state.newTopicTitle = action.newTopicTitleText ;
        }
        else if (action.type === 'UPDATE-FIRST-MESSAGE-TEXT') {
            this._state.newFirstMessage = action.newFirstMessageText;
        }
    }
}

export default store;
window.store = store;