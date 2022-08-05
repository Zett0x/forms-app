import { FormControl } from "@angular/forms";

export const nombreApellidoPattern:string='([a-zA-Z]+) ([a-zA-Z]+)';
export const isEmailPattern:string='^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';

export function noPuedesSerStrider(control:FormControl){
  const valor:string=control.value.trim().toLowerCase();
  if(valor==='strider'){
    // return error
    return{
      noStrider:true
    }
  }
  return null;

}
