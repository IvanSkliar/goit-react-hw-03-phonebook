import { Component } from 'react';
import s from './ContactForm.module.css';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        const { name, number } = this.state;

        return (
            <form onSubmit={this.handleSubmit} className={s.form}>
                <label className={s.label}>
                    Name
                    <input
                        type="text"
                        className={s.input}
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        autoComplete="off"
                    />
                </label>
                <label className={s.label}>
                    Number
                    <input
                        type="tel"
                        className={s.input}
                        name="number"
                        value={number}
                        onChange={this.handleChange}
                        autoComplete="off"
                    />
                </label>
                <button
                    type="submit"
                    className={s.button}
                    disabled={name === '' || number === ''}
                >
                    Add contact
                </button>
            </form>
        );
    }
}

export default ContactForm;