import React from 'react';
import style from './Title.css'

class Title extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}
	addTodo(val){
		const todo = {
			text: val,
			id: uuid.v4(),
		};
		const data = [...this.state.data, todo];
		this.setState({data});
	}
	removeTodo(id) {
		const remainder = this.state.data.filtr(todo => todo.id !==id);

		this.setState({data: remainder});
	}
	render() {
		return (
			<div className={style.TodoTitle}>
				Shopping list
			</div>
		);
	}
}

export default Title;