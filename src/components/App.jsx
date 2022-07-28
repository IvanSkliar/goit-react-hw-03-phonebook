import { Component } from 'react';
import shortid from 'shortid';
import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

class App extends Component {
    state = {
        contacts: initialContacts,
        filter: '',
    };

    addContact = ({ name, number }) => {
        const contactsNames = this.getContactsNames();
        if (contactsNames.includes(name.toLowerCase())) {
            alert(`${name} is already in contacts`);
            return;
        }

        const contact = {
            id: shortid.generate(),
            name,
            number,
        };

        this.setState(({ contacts }) => ({
            contacts: [contact, ...contacts],
        }));
    };

    deleteContact = contactId => {
        this.setState(({ contacts }) => ({
            contacts: contacts.filter(contact => contact.id !== contactId),
        }));
    };

    changeFilter = event => {
        this.setState({ filter: event.currentTarget.value });
    };

    getVisibleContacts = () => {
        const { contacts, filter } = this.state;
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(normalizedFilter),
        );
    };

    getContactsNames = () => {
        const { contacts } = this.state;
        return contacts.reduce((allNames, { name }) => {
            allNames.push(name.toLowerCase());
            return allNames;
        }, []);
    };

    render() {
        const { filter } = this.state;
        const visibleContacts = this.getVisibleContacts();

        return (
            <Container>
                <h1 className='header'>Phonebook</h1>
                <ContactForm onSubmit={this.addContact} />

                <h2 className='header'>Contacts</h2>
                <Filter value={filter} onChange={this.changeFilter} />
                <ContactList
                    contacts={visibleContacts}
                    onDeleteContact={this.deleteContact}
                />
            </Container>
        );
    }
}

export default App;