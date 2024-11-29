import mongoose, {Schema,model} from 'mongoose'
import bcrypt from "bcryptjs"
const UsuarioSchema = new Schema({
    nombre:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        trim:true
    },
    password:{
        type:String,
        require:true
    },
    acepta_terminos:{
        type:Boolean,
        require:true,
        default:false
    }
},{
    timestamps:true
})
// * Método para cifrar el password del paciente
UsuarioSchema.methods.encrypPassword = async function(password){
    const salt = await bcrypt.genSalt(10)
    const passwordEncryp = await bcrypt.hash(password,salt)
    return passwordEncryp
}
// * Método para verificar si el password ingresado es el mismo de la BDD
UsuarioSchema.methods.matchPassword = async function(password){
    const response = await bcrypt.compare(password,this.password)
    console.log(response)
    return response
}
export default model('Usuario',UsuarioSchema)
