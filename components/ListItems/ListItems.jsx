import { useState } from 'react';
import TODOElement from '../TODOElement/TODOElement.jsx';

const ListItems = ({ tasks = [] , taskChange}) => {

	const handleClick = (id) => {
        
        let toDelete = false;

		tasks = tasks.map((task) => {
			if (task.id === parseInt(id)) {
                if (task.complete === false) {
                    task.complete = true;
                } else {
                    toDelete = true;
                } 
            } 
            return task;
		});

        if (toDelete) {
           tasks = tasks.filter((task) => task.id !== parseInt(id)) 
        }
        
        taskChange(tasks);

	};



	return (
		<ul>
			{tasks.length !== 0 ? tasks.map((tareas) => {
				return (
					<TODOElement
						id={tareas.id}
						on={handleClick}
						key={tareas.id}
						description={tareas.description}
                        completed={tareas.complete}
					/>
				);
			}) : <h3>Your TODO list is empty! Go and relax, well done.</h3>}
		</ul>
	);

};

export default ListItems;
