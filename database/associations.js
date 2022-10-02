/* Proyecto Asistencia */

import { Area } from "../models/Area.js";
import { Usuario } from "../models/Usuario.js";
import { Feriado } from "../models/Feriado.js";
import { Horario_Asistencia } from "../models/Horario_Asistencia.js";
import { Estado } from "../models/Estado.js";
import { Actividad } from "../models/Actividad.js";

//Un área tiene muchos usuarios
Area.hasMany(Usuario, { as: 'usuario', foreignKey: 'idArea' });
//Un usuario solo pertenece a un área
Usuario.belongsTo(Area, { as: 'area', foreignKey: 'idArea', targetKey: 'idArea' });
//un horario tiene muchos feriados
Horario_Asistencia.hasMany(Feriado,{as :'feriado',foreignKey:'idFeriado'});
//un horario tiene muchos estados
Horario_Asistencia.hasMany(Estado,{as :'estado',foreignKey:'idEstado'})
//un horario tiene muchos usuario
Horario_Asistencia.hasMany(Usuario,{as:'Usuario',foreignKey:'idUsuario'})
//Actividad tiene muhcos Horarios
Actividad.hasMany(Horario_Asistencia,{as:'horario_asistencia',foreignKey:'idActividad'})
