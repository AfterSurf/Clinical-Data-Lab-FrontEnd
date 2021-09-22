export default function getPermissionsDisplay(input:string) {
    var permissions:any = [];
    const types = ["device","observation","patient","practitioner"];
    if(input){
        for(var i = 0; i < types.length; i++) {
            if(input.includes(types[i])){
                permissions.push(types[i] + " ")
            }
        }
    }
    return permissions;
};

function getPermissions(input:string) {
    var permissions:any = [];
    const types = ["device","observation","patient","practitioner"];
    if(input){
        for(var i = 0; i < types.length; i++) {
            if(input.includes(types[i])){
                permissions.push(types[i])
            }
        }
    }
    return permissions;
};

export {getPermissions};