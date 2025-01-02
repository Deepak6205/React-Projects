import React from "react";
class Class_Component extends React.Component{
    render(){
        return(
            <div>
                <h2>this is a class based component</h2>
            </div>
        )
    }
    
}
export default Class_Component;

/*
    what is class based component.?

    ans- till when functional component was not introduce 
    we were using class components
    so here we create component using class and it will have a
    render method which returns html.
    and also it has to include extends React.Component statement,
    this statement cerates an inheritance to React.Componet and give 
    your componet access to React.Componet's function.


*/