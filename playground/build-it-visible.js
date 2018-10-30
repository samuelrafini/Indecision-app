class Visibility extends React.Component {

    constructor(props) {
        super(props)
        this.handelToggleVisibility = this.handelToggleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }

    handelToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    } 

    render() {
        return (
            <div>
                <h1>Visibility toggle</h1>
                <button onClick={this.handelToggleVisibility}>
                {this.state.visibility ? 'Hide detail': 'Show detail'}
                </button>
                {
                    this.state.visibility && (
                        <div>
                            <p>This is a detail text check this out</p>
                        </div>
                    )
                }
            </div>
        )
    }
}

ReactDOM.render(<Visibility/>, document.getElementById('app'));