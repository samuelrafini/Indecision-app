import React from 'react';

const Header = (props) => {
    return (
        <div className="header">
            <div className="container">
                <h1 className="header__title">{props.title}</h1>
                {props.subTitle && <h2 className="header__subtitle">{props.subTitle}</h2>}
            </div>
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision'
}

export default Header;

// class Header extends React.Component {
//     render() {
//         console.log(this.props);
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subTitle}</h2>
//             </div>
//         )

//     }
// }