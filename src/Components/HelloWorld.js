function HelloWorld(props){
return(
        <div>
            <h1>Primeiro Component</h1>
            {props.children}
        </div> 
)

}

export default HelloWorld;