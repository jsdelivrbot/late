<template>
	<div id='dashboard'>
		<!-- //-Dropdown Button Code-// -->
  		<div class = "dropdown">
  			<button class = "dropbtn">Dropdown
  				<div class = "dropdown-content">
  					<a v-on:click="changeTimeDisplayed(week,'week')">week</a>
  					<a v-on:click="changeTimeDisplayed(day,'day')">day</a>
  				</div>
  			</button>
  		</div>
  		
  		<h1>Your work schedule for the {{showing}}</h1>

		<ol>
			<!-- TODO: will also display summary and details of assignment once that data is available -->
			<!-- default show day -->
			<div v-if="todos">
			    <li v-for="todo in todos"id="dashboard">
			      {{ todo }}
			    </li>
			</div>
			<div v-else="ok">
			    <li v-for="todo in day"id="dashboard">
			      {{ todo }}
			    </li>
			</div>
		</ol>

  		
	</div>
</template>



<script>
	export default {
	  	name: 'dashboard',
 
		data() {
			return{
				//TODO: week and day should be fetched from be will be of type assignment[]
			    week: ["Stupid Hass essay due 10/12 12-3pm","Circuits hw due 10/22", "Data Structures test studying for 10/25"],
			    day: ["Stupid Hass essay due 10/12"],
			    showing:"day",
			    todos: undefined,

			}
		},
		methods: {
			changeTimeDisplayed: function (newTodos, time) {
				this.todos = newTodos
				this.showing = time
			}
		}
	}
</script>





<style lang='scss'>
/*TODO: there needs to be LOTS of styling done on this*/
/*//-Button Interactions and Styling-//*/
button{
    background-color:#ff3860;
    color:white;
    border:none;
    padding:10px 15px 10px 15px;
    margin-left:20px;

}

nav.dropdown{
    li{
        visibility:hidden;
        background-color:#ff3860;
        border:none;
        padding:10px 15px 10px 15px;
    }
    a{
        color:white;
    }
}
nav.dropdown:hover{
    li{
        visibility: visible;
    }
}

/*//-DROP DOWN Button Classes-// */
.dropbtn {
    background-color:#ff3860;
    border:none;
    padding:10px 15px 10px 15px;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding:0px;
    z-index: 1;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: #3e8e41;}
</style>