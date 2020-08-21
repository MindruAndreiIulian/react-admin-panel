import React from 'react';
import './UserAddForm.css';


class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        
            name: '',
            salary:'',
            email:'',
            isGoldClient: false
        };
    }

    updateName(event) {
        this.setState({name: event.target.value});
    }

    updateEmail(event) {
        
        this.setState({email: event.target.value});
    }

    updateSalary(event){
        this.setState({salary:event.target.value});
    }

    updateIsGoldClient(event) {
        this.setState({isGoldClient: event.target.checked});
    }

    
    

    render() {
        const {name, email,salary, isGoldClient} = this.state;
        
        
        return (
            <div className="d-felx flex-row">
            <form
                className="bg-info user-add-form position-fixed"
                onSubmit={(event) => this.props.submitAddForm(event, name, salary, email, isGoldClient)}
            >
                <h3>Adauga utilizatori:</h3>
                <label htmlFor="name">Nume:</label>
                <input
                    type="text"
                    name="name"
                    onChange={(event) => this.updateName(event)}
                />

                <label htmlFor="salary">Salariul:</label>
                <input
                    type="text"
                    name="salary"
                    onChange={(event) => this.updateSalary(event)}
                />

                

                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    name="email"
                    onChange={(event) => this.updateEmail(event)}
                />
                <label htmlFor="is-gold-client">Client GOLD</label>
                <input
                    type="checkbox"
                    name="is-gold-client"
                    value="true"
                    onChange={(event) => this.updateIsGoldClient(event)}
                />

                <input type="submit" value="Introdu utilizatorul"/>
            </form>
            </div>
        )
    }
}

export default UserAddForm;