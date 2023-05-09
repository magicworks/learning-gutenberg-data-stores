import { useBlockProps } from '@wordpress/block-editor';
import { CheckboxControl, TextControl, Button } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit() {
	const [newTodo, setNewTodo] = useState('');
	const [addingTodo, setAddingTodo] = useState(false);
	const data = useSelect((select) => {
		const todosStore = select('learning-gutenberg/todos');
		return (
			todosStore && {
				todos: todosStore.getTodos(),
				total: todosStore.getTodosCount(),
				done: todosStore.getTodosDoneCount(),
				notdone: todosStore.getTodosNotDoneCount(),
			}
		);
	}, []);
	const { todos } = data;
	const actions = useDispatch('learning-gutenberg/todos');
	const addTodo = actions && actions.addTodo;
	const toggleTodo = actions && actions.toggleTodo;
	return (
		<div {...useBlockProps()}>
			{!todos && (
				<p>
					{__(
						'Please make sure your plugin is activated.',
						'learning-gutenberg-data-stores'
					)}
				</p>
			)}
			{todos && (
				<>
					<ul className="todos-status">
						<li>
							<h5>
								{__('Done:', 'learning-gutenberg-data-stores')}{' '}
								{data.done}
							</h5>
						</li>
						<li>
							<h5>
								{__(
									'Not Done:',
									'learning-gutenberg-data-stores'
								)}
								{data.notdone}
							</h5>
						</li>
						<li>
							<h5>
								{__('Total:', 'learning-gutenberg-data-stores')}{' '}
								{data.total}
							</h5>
						</li>
					</ul>
					<ul>
						{todos.map((todo, index) => (
							<li
								key={todo.id}
								className={todo.completed && 'todo-completed'}
							>
								<CheckboxControl
									disabled={todo.loading}
									label={todo.title}
									checked={todo.completed}
									onChange={() => {
										if (toggleTodo) {
											toggleTodo(todo, index);
										}
									}}
								/>
							</li>
						))}
					</ul>
					<form
						onSubmit={async (e) => {
							e.preventDefault();
							if (addTodo && newTodo) {
								setAddingTodo(true);
								await addTodo(newTodo);
								setNewTodo('');
								setAddingTodo(false);
							}
						}}
						className="addtodo-form"
					>
						<TextControl
							value={newTodo}
							onChange={(v) => setNewTodo(v)}
						/>
						<Button disabled={addingTodo} type="submit" isPrimary>
							{__('Add Todo', 'learning-gutenberg-data-stores')}
						</Button>
					</form>
				</>
			)}
		</div>
	);
}
