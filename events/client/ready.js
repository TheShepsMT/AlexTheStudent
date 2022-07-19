
module.exports = async (client) => {
    console.log(`---------------------- DETALLES ----------------------`);
    console.log(`Nombre: ${client.user.username}\nProgramador: TheShepsMT#3871`);
    console.log(`Estado: ¡${client.user.username} en acción!`);
    client.user.setActivity("ClassTSC", { type: "WATCHING" }); //Viendo ClassTSC 
    console.log("Actividad: Viendo ClassTSC")  
    console.log("\n(* ¡Manténte Esperanzado!)")  
    console.log(`---------------------- DETALLES ----------------------\n`);
}
