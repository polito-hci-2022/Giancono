import Back from '../Buttons/backButton';

function TitleBar(props){

    return(
        <div>
            <h1>
                {props.name !== 'Plant Hug' && <Back/>}
                {props.name}
           </h1>
        </div>
    );
}


export default TitleBar;