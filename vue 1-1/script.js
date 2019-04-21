var Asyst = Asyst || {};
Asyst.Workspace = Asyst.Workspace || {};
Asyst.Workspace.FormFunctions = Asyst.Workspace.FormFunctions || {};
var ff = Asyst.Workspace.FormFunctions;


(function (model){
    model.runIt = function(){
        console.log("runId was stsarted successfully")
    };
    model.runIt();
})(ff);

new Vue({
    el: '.sample',
    data: {
        name: 'преку'
    },
    methods: {
        onChange(e){
            console.log(this);
            console.log(e);
        }
    }
    
});