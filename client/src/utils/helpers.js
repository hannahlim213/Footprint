
import axios from "axios";

export default {

    // is the user logged in?????


// axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
// axios.get('/api/book')
//     .then(res => {
//         this.setState({ books: res.data });
//         console.log(this.state.books);

//     })
//     .catch((error) => {
//         if (error.response.status === 401) {
//             this.props.history.push("/login");
//         }
//     });

// 

    addingAnswers: function(answers) {
        console.log(answers);
        return axios.post("/api/book/test", answers);
        // axios.post(`/game/join/${this.state.selectedGameId}`).then(joined => {
        //     t.setState({
        //         joinedGame: joined
        //     });
        //     alert("You have joined the game!");
        // });
    }

};