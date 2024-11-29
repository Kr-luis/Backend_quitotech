import mongoose, {Schema,model} from 'mongoose'
import bcrypt from "bcryptjs"
const PropietarioSchema = new Schema({
    nombre:{
        type:String,
        require:true,
        trim:true
    },
    apellido:{
        type:String,
        require:true,
        trim:true
    },
    Numero:{
        type:Number,
        require:true
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
    propietario:{
        type:Boolean,
        default:false
    },
    token:{
        type:String,
        default:null
    },
    confirmEmail:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})
// * Método para cifrar el password del paciente
PropietarioSchema.methods.encrypPassword = async function(password){
    const salt = await bcrypt.genSalt(10)
    const passwordEncryp = await bcrypt.hash(password,salt)
    return passwordEncryp
}
// * Método para verificar si el password ingresado es el mismo de la BDD
PropietarioSchema.methods.matchPassword = async function(password){
    const response = await bcrypt.compare(password,this.password)
    return response
}
PropietarioSchema.methods.crearToken = function(){
    const tokenGenerado = this.token = Math.random().toString(36).slice(2)
    return tokenGenerado
}
PropietarioSchema.methods.crearTokentienda = function(){
    const tokentiendagenerado = this.tokentienda = Math.random().toString(36).slice(2)
    return tokentiendagenerado
}
export default model('Propietario',PropietarioSchema)
