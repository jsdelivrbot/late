import Dashboard from './Dashboard.vue';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#dashboard',
  template: '<Dashboard/>',
  components: { Dashboard }
});



/*
new Vue({
	el:'#display',
	template:''
});

Vue.component('assignment-component',{
  template:
    <div class="assignmentBox">
      <details>
        <summary>{{studentAssigns.title}}</summary>
        <p>{{studentAssigns.description}}</p>
        <p>{{studentAssigns.expectedDuration}}</p>
      </details>
    </div>
  </template>
  */