import React from 'react';

class CFooter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            component: "Handler"
        }
    }


    render() {

        return (
            <footer className="container-fluid">
                <div className="row">
                    <div className="col-md-4">© 2020 Copyright:</div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <a href="diego.alberto.zaratelara@gmail.com"> Contactanos.</a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default CFooter;