export function getPermissionsDisplay(input:string) {
    var permissions:any = [];
    console.log(input)
    const types = ["device","observation","patient","practitioner"];
    if(input){
        for(var i = 0; i < types.length; i++) {
            console.log("types: ", types[i])
            if(input.includes(types[i])){
                permissions.push(types[i] + " ")
            }
        }
    }

    console.log("permissions: ", permissions)
    return permissions;
};

export default function getPermissions(input:string) {
    var permissions:any = [];
    console.log(input)
    const types = ["device","observation","patient","practitioner"];
    if(input){
        for(var i = 0; i < types.length; i++) {
            console.log("types: ", types[i])
            if(input.includes(types[i])){
                permissions.push(types[i] + " ")
            }
        }
    }

    console.log("permissions: ", permissions)
    return permissions;
};