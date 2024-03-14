import PropTypes from "prop-types";
import styles from "./Todos.module.css"
import minusIcon from "../../assets/minus-icon.svg"
import plusIcon from "../../assets/plus-icon.svg"
import classnames from "classnames";

const Todos = ({todos, onSubstaction, onAddition}) => {
    return (
        <div className={styles.todos}>
            {todos.map((todo, index, arr) => {
                return (
                    <div 
                        key={index} 
                        className = {classnames(styles.todo, {
                            [styles.todoDivider] : !(arr.length === index + 1)
                        })}
                    >
                        {todo.title}
                        <div className={styles.todoIconWrapper}>
                            <div className={styles.todoCount}>{todo.count}</div>

                            <button onClick={() => onSubstaction(index)} className={styles.todoActionButton}>
                                <img src={minusIcon} alt="minus icon" />
                            </button>
                            <button onClick={() => onAddition(index)} className={styles.todoActionButton}>
                                <img src={plusIcon} alt="plus icon" />
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

Todos.prototype = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        count: PropTypes.number
    })),
    onSubstaction: PropTypes.func,
    onAddition: PropTypes.func
};

export default Todos;