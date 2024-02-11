import React from "react";

function BotArmy ( {army, removeFromArmy}){
    const handleDischarge = (bot) => {
        removeFromArmy(bot.id);
      };
    
      const handleFrontendDischarge = (bot) => {
        removeFromArmy(bot.id);
      };
    
    return(
        <div className="container">
        <h2>Your Bot Army</h2>
        {army.map((bot) => (
          <div key={bot.id}>
            <img src={bot.avatar_url} alt="bot avatar" />
            <h3>Name: {bot.name}</h3>
            <button
              className="btn btn-danger"
              onClick={() => handleDischarge(bot)}
            >
              Discharge
            </button>
            <button onClick={() => handleFrontendDischarge(bot)}>X</button>
          </div>
        ))}
      </div> 
    );
};

export default BotArmy
// class BotArmy extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             bots: [],
//             name: "",
//             health: 100,
//             damage: 5,
//             specialty:""
//         }
//     };

//     handleInputChange = event => {
//       const target = event.target;
//       const value = target.type === 'checkbox' ? target.checked : target.value;
//       const name = target.name;
//       console.log("Target Name: ", name);
//       this.setState({
//         [name]: value
//       });
//     };

//     addBotToArmy = () => {
//         let newBot = this.state;
//         delete newBot.name;
//         this.setState({bots: [...this.state.bots, newBot]});
//     };

//     render() {
//         return (
//           <div>
//               <h2>Add a bot to your army</h2>
//               <label>Name: </label>
//               <input type="text" name="name" onChange={this.handleInputChange} />
//               <br/>
//               <label>Health: </label>
//               <input type="number" name="health" onChange={this.handleInputChange} />
//               <br/>
//               <label>Damage: </label>
//               <input type="number" name="damage" onChange={this.handleInputChange} />
//               <br/>
//               Specialty:
//               <select name="specialty" onChange={this.handleInputChange}>
//                   <option value="None">--Select One--</option>
//                   <option value="Fire">Fire</option>
//                   <option value="Ice">Ice</option>
//                   <option value="Poison">Poison</option>
//               </select>
//               <button onClick={this.addBotToArmy}>Add Bot To Army</button>
//               <ul>
//                   {this.state.bots.map((bot) =>  (<li key={bot.id}>{bot.name + " - Health:"+ bot.health + " Damage: "+ bot.damage + " Specialty: " + bot
//                   {this.state.bots.map((bot) =>  (<li key={bot.id}>{bot.name + " - Health:" + bot.health + " Damage:"+ bot.damage + " Specialty: "+ bot.
//                   {this.state.bots.map((bot) =>  (<li key={bot.id}>{bot.name + " - Health:" + bot.health + " Damage:"+ bot.damage + " Specialty:" + bot.
//                   {this.state.bots.map((bot) =>  (<li key={bot.id}>{bot.name + " - Health:"+ bot.health + " Damage:" + bot.damage + " Specialty:" + bot.
//                   {this.state.bots.map((bot) =>  (<li key={bot.id}>{bot.name + " - Health: " + bot.health + "/" + bot.max_health + " Damage: " +
//                   {this.state.bots.map((bot) =>  (<li key={bot.id}>{bot.name + " - Health:"+ bot.health + " Damage:" + bot.damage + " Specialty:" + bot.
//                   {this.state.bots.map((bot, index) => (
//                       <li key={index}>{bot.name + " - Health: " + bot.health + "/" + bot.max_health + " Damage:
//                       <li key={index}>{bot.name + " - Health: " + bot.health + "/" + bot.max_health + " Damage:
//                       <li key={index}>{bot.name + " - Health: " + bot.health + "/" + bot.max_health +  " - Damage: " + bot.damage + " - Specialty: " + bot
//                       <li key={index}>{bot.name + " ("+ bot.health + "/" + bot.damage + ") - " + bot.specialty}</
//                       <Bot  
//                           key={index}  
//                           health={bot.health}  
//                           damage={bot.damage}  
//                           specialty={bot.specialty} 
//                       />
//                   ))}
//               </ul>
//           </div>
//         );
//     }
// }

