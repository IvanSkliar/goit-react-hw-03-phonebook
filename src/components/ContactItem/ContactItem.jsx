import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

function ContactItem({ name, number, onDelete }) {
    return (
        <>
            {name}: {number}
            <button type="button" className={s.btnDelete} onClick={onDelete}>
                Delete
            </button>
        </>
    );
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ContactItem;