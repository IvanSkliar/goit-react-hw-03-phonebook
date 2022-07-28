import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';

function ContactList({ contacts, onDeleteContact }) {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => (
                <li key={id} className={s.contactItem}>
                    <ContactItem
                        name={name}
                        number={number}
                        onDelete={() => {
                            onDeleteContact(id);
                        }}
                    />
                </li>
            ))}
        </ul>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
    ),
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;