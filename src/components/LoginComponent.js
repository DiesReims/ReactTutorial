import React from "react";

class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            version: "16.9",
            level: "master",
            hooks: true
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        this.setState({
            [e.target.name]: value
        });
    }

    render() {
        return (
            <div className="container">
                <form>
                    <pre>{JSON.stringify(this.state, null, 2)}</pre>
                    <div className="form-group row">
                        <label for="user">Usuario:
                    </label>
                        <input
                            className="form-control"
                            name="firstName"
                            type="text"
                            placeholder="Ingresa tu nombre"
                            onChange={this.handleChange}>
                        </input>
                    </div>
                    <div className="form-group row">
                        <label for="pass">Contraseña:
                    </label>
                        <input
                            className="form-control"
                            name="lastName"
                            type="password"
                            onChange={this.handleChange}>
                        </input>
                    </div>
                    <div className="form-group row">
                        <label>
                            Favorite version:
                    </label>
                        <select
                            className="form-control"
                            name="version"
                            onChange={this.handleChange}
                            value={this.state.version}>
                            <option value="16.9">v16.9.0</option>
                            <option value="16.8">v16.8.0</option>
                            <option value="16.7">v16.7.0</option>
                            <option value="16.6">v16.6.0</option>
                            <option value="16.5">v16.5.0</option>
                        </select>
                    </div>
                    <p>Level:</p>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="level"
                            value="acolyte"
                            checked={this.state.level === "acolyte"}
                            onChange={this.handleChange}>
                        </input>
                        <label className="form-check-label">
                            Acolyte.
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="level"
                            value="master"
                            checked={this.state.level === "master"}
                            onChange={this.handleChange}>
                        </input>
                        <label className="form-check-label">
                            Master
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="hooks"
                            checked={this.state.hooks}
                            onChange={this.handleChange}>
                        </input>
                        <label className="form-check-label">
                            With Hooks
                        </label>
                    </div>
                <button 
                type="button" 
                className="btn btn-block btn-dark"
                onClick={()=>alert("Data Uploaded")}>
                    Ingresar Datos.</button>
                </form>
            </div>
        );
    }
}

export default LoginComponent;