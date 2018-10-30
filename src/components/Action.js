import React from 'react';

const Action = (props) => {

    return (
        <div>
            <button
                className="big-button"
                onClick={props.handelPick}
                disabled={!props.hasOption}
            >
                What should I do
            </button>
        </div>
    );
}

export default Action;
// class Action extends React.Component {

//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={this.props.handelPick}
//                     disabled={!this.props.hasOption}
//                 >
//                     What should I do
//                 </button>
//             </div>
//         )
//     }
// }



