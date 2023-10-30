import { Component } from "react";
class EventPractice extends Component {

    state = {
        message: ''
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="단어나 문장을 입력하세요"
                    value={this.state.message}
                    onChange={
                        (e) => {
                            console.log(e.target.value);
                            this.setState({
                                message: e.target.value
                            })
                        }
                    }
                    ></input>
                    <button onClick={
                        () => {
                            alert(this.state.message);
                            this.setState({
                                message: ''
                            });
                        }
                    }>확인</button>
            </div>
        );
    }
}

export default EventPractice;