import React from 'react';
import AddOption from './AddOptions';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {


    state = {
        options: [],
        selectedOption: undefined
    }
    // constructor(props) {
    //     super(props);
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
    //     this.state = {
    //         options: []
    //     }

    // }

    handleDeleteOptions = () => {

        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }))
    }

    handleCloseModal = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }

    handlePick = () => {
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNum];
        this.setState(() => ({ selectedOption: option }));
    }

    handleAddOption = (option) => {

        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'this item already exist'
        }

        this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
    }

    componentDidMount() {

        try {
            console.log('fetching data')
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }))
            }

        } catch (e) {

        }

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length);
        const json = JSON.stringify(this.state.options)
        localStorage.setItem('options', json);
        console.log('saving data')
    }

    componentWillUnmount() {
        console.log('component will unmount')
    }


    render() {
        const title = "Indecision App";
        const subTitle = "Put your life in the hands of a computer";

        return (
            <div>
                <Header subTitle={subTitle} />

                <div className="container">
                    <Action
                        hasOption={this.state.options.length > 0}
                        handelPick={this.handlePick}
                    />

                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>

                    <OptionModal
                        selectedOption={this.state.selectedOption}
                        handleCloseModal={this.handleCloseModal}
                    />

                </div>

            </div>
        )
    }
}