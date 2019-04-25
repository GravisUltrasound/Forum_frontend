const ADD_TOPIC = 'ADD-TOPIC';
const UPDATE_FIRST_MESSAGE_TEXT = 'UPDATE-FIRST-MESSAGE-TEXT';
const UPDATE_TOPIC_TITLE = 'UPDATE-TOPIC-TITLE';

let store = {
    _state: {
        topics: [
            {
                topicId: 1,
                title: "Смотрите, какую шляпу купил",
                messages: [
                    {topicId: 1, messageId: 1, text: "красивая такая"},
                    {topicId: 1, messageId: 2, text: "Да, Геннадий, чудесная шляпа!"}
                ]
            },
            {
                topicId: 2,
                title: "Помогите, хочу на неткрекер поступить",
                messages: [
                    {topicId: 2, messageId: 1, text: "Хочу поступить на кафедру очень, ну учиться хочу на джаве там кодить, могу форум написать..."},
                    {topicId: 2, messageId: 2, text: "Вы приняты!!"}
                ]
            },
            {
                topicId: 3,
                title: "Как позвать девушку в кино?",
                messages: [
                    {topicId: 3, messageId: 1, text: "Нравится одноклассница, но стесняюсь позвать"},
                    {topicId: 3, messageId: 2, text: "СОБЕРИ ВОЛЮ В КУЛАК И ВПЕРЕД!!!"}
                ]
            },
            {
                topicId: 4,
                title: "Продам аккордеон",
                messages: [
                    {topicId: 4, messageId: 1, text: "Много лет учился, но огонь в глазах пропал, к чёрту это всё..."},
                    {topicId: 4, messageId: 2, text: "грустная история"},
                    {topicId: 4, messageId: 3, text: "сос мыслом"}]
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
        if (action.type === ADD_TOPIC){
            let newTopic = {
                topicId: 5,
                title: this._state.newTopicTitle,
                firstMessage: this._state.newFirstMessage,
                messages: [
                    {
                        topicId:5,
                        messageId:1,
                        text: this._state.newFirstMessage
                    }
                ]
            }
            this._state.topics.push(newTopic);
            this._renderEntireTree(this._state);
            this._state.newTopicTitle = '';
            this._state.newFirstMessage = '';
        }
        else if (action.type === UPDATE_TOPIC_TITLE) {
            this._state.newTopicTitle = action.newTopicTitleText ;
        }
        else if (action.type === UPDATE_FIRST_MESSAGE_TEXT) {
            this._state.newFirstMessage = action.newFirstMessageText;
        }
    }
}

export const updateTopicTitleActionCreator = (title) =>
    ({type: UPDATE_TOPIC_TITLE, newTopicTitleText: title})
export const updateFirstMessageTextActionCreator = (text) =>
    ({type: UPDATE_FIRST_MESSAGE_TEXT, newFirstMessageText: text})
export const addNewTopicActionCreator = () => ({type: ADD_TOPIC})

export default store;
window.store = store;