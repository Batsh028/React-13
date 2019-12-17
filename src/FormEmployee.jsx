import React from 'react';

class FormEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            post: '',
            comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    submitForm(e) {
        e.preventDefault();

        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        };
        
        const url = "https://post-a-form.herokuapp.com/api/movies/";

        fetch(url, config)
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                alert(res.error);
            } else {
                alert(`Employé ajouté avec l'ID ${res}!`);
            }
        }).catch(e => {
            console.error(e);
            alert("Erreur lors de l'ajout d'un film");
        });
    
    }


render() {
    return (
        <div className="FormEmployee">
            <h1>Saisi d'un film</h1>

            <form onSubmit={this.submitForm}>
                <fieldset>
                    <legend>Informations</legend>
                    <div className="form-data">
                        <label htmlFor="title">Titre</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            onChange={this.onChange}
                            value={this.state.title}
                        />
                    </div>

                    <div className="form-data">
                        <label htmlFor="poster">url</label>
                        <input
                            type="text"
                            id="poster"
                            name="poster"
                            onChange={this.onChange}
                            value={this.state.poster}
                        />
                    </div>

                    <div className="form-data">
                        <label htmlFor="comment">Comment</label>
                        <textarea
                            id="comment"
                            name="comment"
                            onChange={this.onChange}
                            value={this.state.com}>
                            </textarea>
                    </div>
                    <hr />
                    <div className="form-data">
                        <input type="submit" value="Envoyer" />
                    </div>
                </fieldset>
            </form>
        </div>
    );
}
}

export default FormEmployee;