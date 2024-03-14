import PropTypes from "prop-types"
import styles from "./SearchInput.module.css"

const SearchInput = ({onSubmit, onChange, value}) => {
    return (
        <>
            <form className={styles.form} onSubmit={onSubmit}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="List"
                    onChange={onChange}
                    value={value}
                />
                <button className={styles.addButton}>Add</button>
            </form>
        </>
    );
};

SearchInput.prototypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string
};

export default SearchInput;