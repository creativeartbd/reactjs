import React from 'react';

class Button extends React.Component {
    shouldComponentUpdate(nextProps) {
        
        // return false;
        const { change : currentChange, local : currentLocale } = this.props;
        const { change : nextChange, local : nextLocal } = nextProps;

        console.log(this.props);
        //console.log(nextProps);

        if( currentChange === nextChange && nextLocal === currentLocale ) {
            return false;
        }
        return true;
    }

    render() {
        console.log('button rendered');
        const { change, locale } = this.props;
        return (
            <div>
                <button  type="button" onClick={ () => change( locale )}>Click here ({locale})</button>
            </div>
        );
    }
}

export default Button;