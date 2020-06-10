import React from 'react';
import ReactDOM from 'react-dom';

const powerUnitEndpoint = [document.location.origin, 'api/power-unit'].join('/');

async function request(requestType, url, data) {

    let request = axios[requestType](url, data, {
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            Accept: 'application/json'
        }
    })
    .then(function (response) {
        if (response.data && response.data.length) {
            return response.data;
        }
        return [];
    })
    .catch(function (error) {
        return [];
    });

    let result = await request;

    return result;

}

const DataSet = (res) => {
    const data = res.data;
    const els = [];
    for (let i = 0, count = data.length; i < count; i += 1) {
        els.push(
            <div
                key={ i }
            >
                <div><strong>Unit name:</strong> { data[i].unit_name }</div>
                <div><strong>Quantity:</strong> { data[i].quantity }</div>
            </div>
        );
    }
    return els;
};

const initState = {
    actionType: '',
    maximum: 0,
    minimum: 0,
    quantity: 0,
    unit_name: '',
    data: [],
    message: ''
};

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = initState;
    }

    handleActionSelection() {
        const stateSetter = this.setState.bind(this);
        const self = this;

        return (event) => {
            if (event.target.value !== self.state.actionType) {
                stateSetter({
                    actionType: event.target.value
                });
            }
        }
    }

    handleViewData() {
        const stateSetter = this.setState.bind(this);

        return request('get', powerUnitEndpoint, {}).then(data => {
            stateSetter({
                data: data
            })
        });
    }

    handleAddData() {

        const stateSetter = this.setState.bind(this);

        if (!this.state.maximum.length || !this.state.minimum || !this.state.quantity || !this.state.unit_name) {
            stateSetter({
                message: 'All fields are required.'
            });
            return;
        }

        request('post', powerUnitEndpoint, {
            maximum: this.state.maximum,
            minimum: this.state.minimum,
            quantity: this.state.quantity,
            unit_name: this.state.unit_name,
        }).then(() => {
            const newState = { ...initState, message: 'Your record has been saved.' }
            stateSetter(newState);
        });

    }

    handleSubmit() {

        const stateSetter = this.setState.bind(this);
        const self = this;

        return (event) => {
            event.preventDefault();
            if (self.state.actionType === 'viewAllPowerUnits') {
                self.handleViewData();
            }
            if (self.state.actionType === 'addPowerUnit') {
                stateSetter({
                    data: []
                });
                self.handleAddData();
            }
            return;
        }

    }

    handleInputChange(key) {
        const stateSetter = this.setState.bind(this);
        const self = this;

        return (event) => {
            stateSetter({
                [key]: event.target.value
            });
        }
    }

    render() {

        const {
            actionType,
            data,
            message
        } = this.state;

        const CTA = actionType === 'viewAllPowerUnits' ? 'View Data' : 'Submit Data';
        const showData = data && data.length && actionType !== 'addPowerUnit' ? true : false;

        if (message !== '') {
            const stateSetter = this.setState.bind(this);
            setTimeout(() => {
                stateSetter({
                    message: ''
                })
            }, 2000);
        }

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">This UI allows you to view records for `power_units` from the database, and to add new ones.</div>

                            <div className="card-body">Use the select box to choose whether you wish to view data, or add data to the collection.</div>

                            <form
                                name="data-controller"
                                action="#"
                                method="post"
                                onSubmit={ this.handleSubmit() }
                            >
                                <select
                                    id="actionSelector"
                                    name="actionSelector"
                                    onChange={ this.handleActionSelection() }
                                >
                                    <option value="">Select an action</option>
                                    <option value="viewAllPowerUnits">View All Power Units</option>
                                    <option value="addPowerUnit">Add a Power Unit</option>
                                </select>
                                { actionType === 'addPowerUnit' &&
                                    <span>
                                        <div className="field">
                                            <label htmlFor="unit_name">Unit Name:</label>
                                            <input
                                                id="unit_name"
                                                type="text"
                                                onChange={ this.handleInputChange('unit_name') }
                                                name="unit_name"
                                            />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="minimum">Minimum value:</label>
                                            <input
                                                id="minimum"
                                                type="text"
                                                onChange={ this.handleInputChange('minimum') }
                                                name="minimum"
                                            />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="maximum">Maximum value:</label>
                                            <input
                                                id="maximum"
                                                type="text"
                                                onChange={ this.handleInputChange('maximum') }
                                                name="maximum"
                                            />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="maximum">Quantity:</label>
                                            <input
                                                id="quantity"
                                                type="text"
                                                onChange={ this.handleInputChange('quantity') }
                                                name="quantity"
                                            />
                                        </div>
                                    </span>
                                }
                                { message &&
                                    <p>{ message }</p>
                                }
                                { actionType !== '' &&
                                    <button
                                        type="submit"
                                        value="Submit"
                                    >
                                        { CTA }
                                    </button>
                                }

                                { showData &&
                                    <div>
                                        <DataSet data={ data } />
                                    </div>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Form;

if (document.getElementById('powerUnitForm')) {
    ReactDOM.render(<Form />, document.getElementById('powerUnitForm'));
}
