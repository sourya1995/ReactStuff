function Puppy(props){
    return(
        <div>
            {props.name} has <Bowl bowlShape="Square" bowlStatus="full" />
        </div>
    );
};

export default Puppy;