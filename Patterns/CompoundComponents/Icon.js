import { useContent } from 'react';
import { ExpandableContext } from './Expandable';

const Icon = ({className = '', ...otherProps}) => {
    const { expanded } = useContext(ExpandableContext);
    const combinedClassName = ['Expandable-icon', className].join(' ');
    return (
        <span className={combinedClassNames}{...otherProps}>
            {expanded ? '-' : '+'}
        </span>
    )
}

export default Icon